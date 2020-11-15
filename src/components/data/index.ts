export const files = [
    "i18n/main.ts",
    "i18n/nav.ts",
];
export const defaultLocale = "en";
export const locales = [
    "en",
    "se"
];

export type StringValue = ({
    type: "string"
} | {
    type: "function"
    params: [
        {
            name: string
            type: string|number|boolean|any
        }
    ]
} | {
    type: "component"
    params: [
        {
            name: "props"
            type: any
        }
    ]
}) & {
    value: string
}

export const strings: {
    [file: string]: {
        [locale: string]: {
            [key: string]: StringValue
        }
    }
} = {
    "i18n/main.ts": {
        en: {
            "a": {type: "string", value: "en, A"},
            "b": {type: "string", value: "en, B"},
            "c": {type: "function", params: [{name: "name", type: "string"}], value: "Hello ${name}"},
        },
        se: {
            "a": {type: "string", value: "se, A"},
            "b": {type: "string", value: "se, B"},
            "c": {type: "function", params: [{name: "name", type: "string"}], value: "Hej ${name}"},
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
