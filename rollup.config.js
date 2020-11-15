import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

const extensions = [".tsx", ".ts"];

export default {
    input: "src/components/index.tsx",
    output: {
        sourcemap: !production,
        format: "cjs",
        dir: "dist",
    },
    plugins: [
        typescript(),
        resolve({
            extensions
        }),
        postcss(),
        production && terser(),
    ],
    watch: {
        clearScreen: false
    }
};
