const fs = require("fs");
const path = require("path");

// Normaliza o nome da revenda
function normalizeRevendaName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
}

// Defina suas revendas e suas configurações específicas (nome, CSS, JS)
const revendas = [
  {
    name: "Marcelo Veículos",
    description: "Revenda Marcelo Veículos",
    url: "www.marceloveiculos.com.br",
    img: "https://api.regionalmotors.com.br/uploads/anunciantes/perfil/1732294683.png",
  },
];

// Gera o index.html para cada revenda
function gerarIndex(revenda) {
  const template = fs.readFileSync(path.join(__dirname, "../index.template.html"), "utf-8"); // Acessa o padrão

  // Substitui os placeholders do template com dados da revenda
  const content = template
    .replace("{{REVENDA_NAME}}", revenda.name)
    .replace("{{REVENDA_TITLE}}", revenda.name)
    .replace("{{REVENDA_DESCRIPTION}}", revenda.description)
    .replace("{{REVENDA_DESCRIPTION_OG}}", revenda.description)
    .replace("{{REVENDA_URL}}", revenda.url)
    .replace("{{REVENDA_IMAGE}}", revenda.img);

  // Cria nova pasta chamada "revendas"
  const revendasFolder = path.join(__dirname, "../dist", "revendas");
  if (!fs.existsSync(revendasFolder)) {
    fs.mkdirSync(revendasFolder, { recursive: true });
  }

  // Cria a pasta dist/revendaX (caso não exista) e grava o arquivo index.html
  const revendaDirName = normalizeRevendaName(revenda.name);
  const outputDir = path.join(__dirname, "../dist/revendas", revendaDirName);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Grava o arquivo gerado
  fs.writeFileSync(path.join(outputDir, "index.html"), content);
}

// Executa a função para gerar o index.html para cada revenda
revendas.forEach((revenda) => gerarIndex(revenda));

console.log("Index das revendas geradas!");
