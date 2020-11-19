import { ComponentStringProps, FunctionStringParams, StringSource, StringValue } from "../types";

const strings: StringSource = {
    "i18n/main.ts": {
        en: {
            "a": {type: "string", value: "en, A"},
            "b": {type: "string", value: "en, B"},
            "c": {type: "function", params: [{name: "name", type: "string"}], value: "Hello ${name}"},
            "d": {
                type: "component",
                params: {
                    name: "string",
                    age: "number"
                },
                value: "<p>Hello {name}, you have <span>{amount}</span> {amount === 1 ? \"stack\" : \"stacks\"}</p>"
            }
        },
        se: {
            "a": {type: "string", value: "se, A"},
            "b": {type: "string", value: `se,' \\" B`},
            "c": {type: "function", params: [{name: "name", type: "string"}], value: "Hej\\` ${name}"},
            "d": {
                type: "component",
                params: {
                    name: "string",
                    amount: "number"
                },
                value: "<p>Hej {name}, du har <span>{amount}</span> {amount === 1 ? \"stack\" : \"stacks\"}</p>"
            }
        },
    },
    "i18n/nav.ts": {
        en: {
            "home": {type: "string", value: "Home"},
        },
        se: {
            "home": {type: "string", value: "Hem"},
        },
    }
};

function handleString(str: string) {
    return str.replaceAll("\\", "\\\\").replaceAll(`"`, `\\"`);
}

function handleFunction(body: string, params: FunctionStringParams) {
    const escapedBody = body.replaceAll("\\", "\\\\").replaceAll("`", "\\`");

    return `(${params.map(param => `${param.name}:${param.type}`).join(",")}) => \`${escapedBody}\``;
}

function handleComponent(body: string, params: ComponentStringProps) {
    return `({${Object.keys(params).join(",")}}: {${Object.entries(params).map( ([name, type]) => `${name}:${type}`).join(",")}}) => ${body}`;
}

function compileString(str: StringValue) {
    switch (str.type) {
        case "string":
            return handleString(str.value);
        case "function":
            return handleFunction(str.value, str.params);
        case "component":
            return handleComponent(str.value, str.params);
    }
}

export function compileLocale(locale: {[key: string]: StringValue}) {
    const compiledStrings = {};
    for (const [key, string] of Object.entries(locale)) {
        compiledStrings[key] = compileString(string);
    }
    return compiledStrings;
}

export function compileAllLocales(file: string) {
    // TODO: Fetch data from data source
    /**
     * Fetch all locales from ${file} and call compileString for every string
     */

    const src = strings[file];

    const compiledLocales = {};

    for (const [locale, string] of Object.entries(src)) {
        compiledLocales[locale] = compileLocale(string);
    }
    return compiledLocales;
}

export function compileAllFiles() {
    // TODO: Fetch data from data source
    /**
     * Fetch all defined files, call compileAllLocales(file)
     */

    const compiledFiles = {};

    for (const file of Object.keys(strings)) {
        compiledFiles[file] = compileAllLocales(file);

        // TODO: probably save result to a file/zip-archive
    }
    return compiledFiles;
}


// const compiledStr = compileLocale(strings["i18n/main.ts"]["en"]);
const compiledStr = compileAllFiles();

console.log(compiledStr["i18n/main.ts"]);
console.log(compiledStr["i18n/main.ts"].se.b);
console.log(compiledStr["i18n/main.ts"].se.c);
