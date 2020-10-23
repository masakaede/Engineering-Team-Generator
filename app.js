const userInput = require("./lib/user-input");
const path = require("path");
const fs = require("fs");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

async function teamInfo() {
    const engineeringTeam = await userInput.teamData();

    const html = render(engineeringTeam);

    await writeFileAsync(outputPath, html, "utf8");

    console.log("Engineering Team List Generated!")
}

teamInfo();
