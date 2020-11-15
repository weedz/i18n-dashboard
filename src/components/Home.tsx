import { h } from "preact";
import { RoutableProps, Link } from "preact-router";

type Props = RoutableProps;

export default function Home(props: Props) {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}
