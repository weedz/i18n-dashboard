import { h } from "preact";
import { Router, Link, Route } from "preact-router";
import Files from "./Files";
import Home from "./Home";
import FileLocales from "./FileLocales";
import Strings from "./Strings";
import Locales from "./Locales";

export default function App() {
    return (
        <div>
            <nav>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/files">Files</Link></li>
                <li><Link href="/locales">Locales</Link></li>
            </nav>
            <Router>
                <Home default />
                <Files path="/files" />
                <Locales path="/locales" />
                <Route path="/files/:file" component={FileLocales} />
                <Route path="/files/:file/:locale" component={Strings} />
            </Router>
        </div>
    );
}
