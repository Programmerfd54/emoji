const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const repo = "Programmerfd54/emoji"; // репозиторий
const branch = "main";              // ветка
const folder = "emoji";             // правильная папка с файлами

const baseUrl = `https://raw.githubusercontent.com/${repo}/${branch}/${folder}`;

fs.readdir(path.join(__dirname, folder), (err, files) => {
  if (err) {
    console.error("Ошибка чтения папки:", err);
    return;
  }

  const emojis = files
    .filter((file) => /\.(png|jpg|jpeg|gif|webp)$/i.test(file))
    .map((file) => {
      const name = path.parse(file).name;
      return {
        name: name,
        src: `${baseUrl}/${file}`,
      };
    });

  const yamlStr = yaml.dump({ emojis });
  fs.writeFileSync("emojis.yaml", yamlStr, "utf8");

  console.log("✅ Файл emojis.yaml создан!");
});

