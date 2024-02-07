/**
 * Simple script to generate "_flags.scss" file
 */

const fs = require("node:fs");
const path = require("node:path");
const { globSync } = require("glob");

const PREFIX_B64 = "data:image/svg+xml;base64,";
const PATH_OUT = "scss/_flags.scss";
var scssOut = "$flag-data: (";

// List of all flags
const flagsList = globSync('flags/*.svg');

flagsList.forEach((flag) => {
    var absPath = path.resolve(flag);
    var name = path.basename(flag).split(".")[0].split("_").slice(0, -1);

    if (name != "TEMPLATE") {
        var className = name;
        className.push("flag");
        className = className.join("-");

        const contents = fs.readFileSync(absPath, { encoding: 'base64' });

        scssOut += `"${className}": url('${PREFIX_B64}${contents}'),`
    }
});

scssOut = scssOut.endsWith(',') ?
    scssOut.slice(0, -1) :
    scssOut;

scssOut += ");";

// write it
fs.writeFileSync(path.resolve(PATH_OUT), scssOut);

/**
 * "sass-dev": "sass --watch --update --style=expanded assets/scss:assets/css",
    "ssass-prod": "sass --no-source-map --style=compressed assets/scss:assets/css"
 */