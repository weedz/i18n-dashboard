import { h } from "preact";
import { RoutableProps, Link } from "preact-router";
import { files, strings, defaultLocale } from "./data";

type Props = RoutableProps;

export default function Files(props: Props) {
    return (
        <div>
            <h1>Files</h1>
            <ul>
                {
                    files.sort(
                        (a,b) => a.localeCompare(b)
                    ).map(file => (
                        <li>
                            <Link href={`/files/${encodeURIComponent(file)}`}>{file}</Link>
                            <span> - Strings: {Object.keys(strings[file][defaultLocale]).length}, Translations: %</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
