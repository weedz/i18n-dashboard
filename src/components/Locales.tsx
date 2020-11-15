import { h } from "preact";
import { RoutableProps, Link } from "preact-router";
import { defaultLocale, locales } from "./data";

type Props = RoutableProps;

export default function Locles(props: Props) {
    return (
        <div>
            <h1>Locales</h1>
            <h4>Default: <strong>{defaultLocale}</strong></h4>
            <ul>
                {locales.map(locale => <li><Link href={`/locales/${locale}`}>{locale}</Link></li>)}
            </ul>
            <button>Add</button>
        </div>
    );
}
