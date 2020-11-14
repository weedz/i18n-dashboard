# i18n-dashboard

## TODO:
- How to define a locale?
    ```typescript
    type StringFunction = {
        (...params: any): string
    }
    export type StringValue = {
        [key: string]: string | StringFunction | AnyComponent | ComponentConstructor
    };
    ```
    - Make sure all locales use the same definition for a key. Eg. the key `test` for `en` is defined as
        ```typescript
        "test": (name: string) => `Hello ${name}!`
        ```
        then it must be defined as a function with 1 parameter for all locales.
    - When we use a component as a value we must define the file as `.tsx`/`.jsx`.
