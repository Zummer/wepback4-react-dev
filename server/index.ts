import express from "express";
import {renderSSR} from './renderSSR';

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
    res.send(renderSSR());
});

app.listen(3000, () => {
    console.log("Server is listening");
});