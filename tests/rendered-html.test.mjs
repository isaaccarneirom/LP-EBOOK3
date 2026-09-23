import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import test from "node:test";

async function availablePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close(() => reject(new Error("Unable to allocate a test port.")));
        return;
      }
      server.close(() => resolve(address.port));
    });
  });
}

async function waitForPage(url, server) {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js exited before serving the page (${server.exitCode}).`);
    }
    try {
      const response = await fetch(url, { headers: { accept: "text/html" } });
      if (response.ok) return response;
    } catch {
      // The production server may still be starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error("Timed out waiting for the Next.js production server.");
}

async function render() {
  const port = await availablePort();
  const server = spawn(
    process.execPath,
    ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)],
    { cwd: new URL("..", import.meta.url), stdio: "ignore" },
  );

  try {
    const response = await waitForPage(`http://127.0.0.1:${port}/`, server);
    return { response, server };
  } catch (error) {
    server.kill("SIGTERM");
    throw error;
  }
}

test("renders the complete Portuguese book landing page", async () => {
  const { response, server } = await render();

  try {
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, /<html[^>]+lang="pt-BR"/i);
    assert.match(html, /<title>O Castelo, o Ouro e o Porão — Nide Souza<\/title>/i);
    assert.match(html, /Eu não sabia que alguns dos sonhos que estava construindo/);
    assert.match(html, /Continuar, para mim, quase sempre significou dar conta/);
    assert.match(html, /Durante muito tempo, achei que dar conta era o mesmo que estar bem\./);
    assert.match(html, /Escrever este livro acabou se tornando algo muito diferente/);
    assert.match(html, /QUERO CONHECER ESSA HISTÓRIA/);
    assert.match(html, /o-castelo-o-ouro-e-o-porao-cover\.png/);
    assert.match(html, /nide-souza\.png/);
    assert.match(html, /Nide Souza, autora de O Castelo, o Ouro e o Porão/);
    assert.match(html, /O CASTELO, O OURO E O PORÃO/);
    assert.match(html, /A história completa de uma mulher comum que começou a escrever/);
    assert.match(html, /R\$ 29,90/);
    assert.match(html, /QUERO LER O LIVRO/);
    assert.match(html, /href="https:\/\/pay\.hotmart\.com\/K107437086I"/);
    assert.match(html, /connect\.facebook\.net\/en_US\/fbevents\.js/);
    assert.match(html, /1624319002380414/);
    assert.match(html, /facebook\.com\/tr\?id=1624319002380414(?:&|&amp;)ev=PageView/);
    assert.ok(html.indexOf("1624319002380414") < html.indexOf("</head>"));
    assert.match(html, /Ficou alguma dúvida\?/);
    assert.match(html, /a Hotmart libera o acesso ao livro digital/);
    assert.match(html, /celular, tablet, computador ou em outro dispositivo/);
    assert.doesNotMatch(html, /R\$ \[VALOR\]/);
    assert.doesNotMatch(html, /Acesso após a confirmação da compra/);
    assert.doesNotMatch(html, /Você se acostumou a ser a pessoa que resolve tudo/);
    assert.doesNotMatch(html, /section-number/);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Building your site/i);
  } finally {
    server.kill("SIGTERM");
  }
});
