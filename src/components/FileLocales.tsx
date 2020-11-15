import { h } from "preact";
import { RoutableProps, Link } from "preact-router";
import { locales } from "./data";

type Props = {
    file: string
} & RoutableProps;

export default function FileLocales(props: Props) {
    return (
        <div>
            <h1>Locales</h1>
            <h2>{props.file}</h2>
            <ul>
                {locales.map(locale => <li><Link href={`/files/${encodeURIComponent(props.file)}/${locale}`}>{locale}</Link> - Translations: %</li>)}
            </ul>
        </div>
    );
}
