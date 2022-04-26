"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cowsay = tslib_1.__importStar(require("cowsay"));
const quotes_json_1 = tslib_1.__importDefault(require("./quotes.json"));
const random_1 = tslib_1.__importDefault(require("./random"));
let cowNamesList = [];
function getCows(error, cowNames) {
    if (error) {
        console.log(error);
    }
    else if (cowNames) {
        console.log(`Number of cows available: ${cowNames.length}`);
        cowNamesList = cowNames;
    }
}
cowsay.list(getCows);
function default_1(file = 'random') {
    const quoteObj = quotes_json_1.default[(0, random_1.default)(0, quotes_json_1.default.length)];
    const opts = {
        text: `${quoteObj.quote} - ${quoteObj.author}`,
        e: 'OO',
        r: true,
    };
    if (file !== 'random') {
        const cowExist = cowNamesList.includes(file);
        if (cowExist) {
            opts.f = file;
            opts.r = false;
        }
        else {
            console.log(`Cow ${file} does not exist`);
            return `Sorry, ${file} does not exist as a cow`;
        }
    }
    let output = cowsay.think(opts);
    output = `
\`\`\`
${output}
\`\`\`
`;
    if (output.length > 2000) {
        output = 'Sorry, the cow is sleeping. Please come again later';
    }
    return output;
}
exports.default = default_1;
