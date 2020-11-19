export type FunctionStringParams = Array<{
    name: string
    type: string
}>;

export type ComponentStringProps = {
    [key: string]: string
};

export type StringValue = ({
    type: "string"
} | {
    type: "function"
    params: FunctionStringParams
} | {
    type: "component"
    params: ComponentStringProps
}) & {
    value: string
}

export type StringSource = {
    [file: string]: {
        [locale: string]: {
            [key: string]: StringValue
        }
    }
};
