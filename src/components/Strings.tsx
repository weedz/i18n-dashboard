import { h } from "preact";
import { RoutableProps } from "preact-router";
import { strings, StringValue } from "./data";

type Props = {
    locale: string
    file: string
} & RoutableProps;

function renderStringType(string: StringValue) {
    switch (string.type) {
        case "string":
            return string.value
        case "function":
            return (
                <div>
                    <i>Function</i>
                    <span>, Params:</span>
                    <ol>
                        {string.params.map(param => <li>{param.name}: <i>{param.type}</i></li>)}
                    </ol>
                    <p>{string.value}</p>
                </div>
            );
        case "component":
            return (
                <div>
                    <i>Component</i>
                    <span>, Params:</span>
                    <ol>
                        {string.params.map(param => <li>{param.name}: <i>{param.type}</i></li>)}
                    </ol>
                    <p>{string.value}</p>
                </div>
            );
    }
}

export default function Strings(props: Props) {
    return (
        <div>
            <h1>Strings for {props.locale}</h1>
            <ul>
                {Object.entries(strings[props.file][props.locale]).sort((a,b) => a[0].localeCompare(b[0])).map( ([key, value]) => (
                    <li>
                        <strong>{key}</strong>
                        <span>&nbsp;-&nbsp;</span>
                        {renderStringType(value)}
                    </li>
                ))}
            </ul>
        </div>
    );
}
