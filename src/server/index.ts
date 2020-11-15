import * as express from "express";
import * as path from "path";

const port = 9000;

const app = express();
app.use(express.static("dist"));

// TODO: actual logic

app.get("*", (req, res) => {
    res.sendFile(path.resolve("dist/index.html"));
});
app.listen(port, () => {
    console.log(`listening on *:${port}`);
});
