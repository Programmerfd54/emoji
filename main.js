const fs = require("fs");
const path = require("path");

const folder = "./emoji"; // локальная папка с файлами
const baseUrl = "https://raw.githubusercontent.com/Programmerfd54/emoji/main";

const files = fs.readdirSync(folder);
const emojis = files.map((file) => {
  const name = path.parse(file).name;
  return `  - name: ${name}\n    src: ${baseUrl}/${file}`;
});

const yaml = "emojis:\n" + emojis.join("\n");
fs.writeFileSync("emojis.yaml", yaml);
console.log("emojis.yaml создан");

