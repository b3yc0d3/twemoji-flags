const fs = require("node:fs");
const path = require("node:path");
const { globSync, Path } = require("glob");
const sass = require("sass");

function getArgs(options = {}) {
    return process.argv.reduce((args, arg) => {
        // long arg
        if (arg.slice(0, 2) === "--") {
            const longArg = arg.split("=");
            const longArgFlag = longArg[0].slice(2);
            const longArgValue = longArg.length > 1 ? longArg[1] : true;
            options[longArgFlag] = longArgValue;
        }
        // flags
        else if (arg[0] === "-") {
            const flags = arg.slice(1).split("");
            flags.forEach((flag) => {
                options[flag] = true;
            });
        }
        return options;
    }, {});
}

/**
 * Simple function to generate "_flags.scss" file
 */
function generate_flag_dict(out_path) {
    console.info(`[TWF] Generating ${out_path}...`);
    const flags_list = globSync(path.join("assets", "flags", "*.svg"));

    const PREFIX_B64_SVG = "data:image/svg+xml;base64,";
    var scss_result = "$flag-data: (";

    flags_list.forEach((flag) => {
        var abs_path = path.resolve(flag);
        var name = path.basename(flag).split(".")[0].split("_").slice(0, -1);

        if (name != "TEMPLATE") {
            var className = name;
            className.push("flag");
            className = className.join("-");

            const contents = fs.readFileSync(abs_path, { encoding: 'base64' });

            scss_result += `"${className}": url('${PREFIX_B64_SVG}${contents}'),`
        }
    });

    scss_result = scss_result.endsWith(',') ?
        scss_result.slice(0, -1) :
        scss_result;

    scss_result += ");";
    fs.writeFileSync(path.resolve(out_path), scss_result);
}

function generate_css(inp_path, out_path, sass_style) {
    console.info(`[SASS] Compiling ${inp_path}...`);

    const result = sass.compile(inp_path, { style: sass_style, sourceMap: true });
    fs.writeFileSync(out_path, result.css);

    // source map
    console.info(`[SASS] Generating source map ${inp_path}.map...`);
    let src_map = result.sourceMap;
    src_map.sources = []
    result.loadedUrls.forEach((lurl) => {
        src_map.sources.push(path.basename(lurl.pathname));
    });
    fs.writeFileSync(out_path + ".map", JSON.stringify(src_map || {}));
}

const args = getArgs({ dist: false, dev: false });
const is_dist = args["dist"] || true;
const is_dev = args["dev"] || false;
const dist_dir = path.join("dist");

generate_flag_dict(path.join("assets", "scss", "_gen_flags.scss"));

fs.mkdirSync(dist_dir, { recursive: true });

if (is_dist) {
    generate_css(path.join("assets", "scss", "base.scss"), path.join(dist_dir, `twf.min.css`), "compressed");
    generate_css(path.join("assets", "scss", "base.scss"), path.join(dist_dir, `twf.css`), "expanded");
} else {
    generate_css(path.join("assets", "scss", "base.scss"), path.join(dist_dir, `twf.dev.css`), "expanded");
}
