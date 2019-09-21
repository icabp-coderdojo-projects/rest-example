import express from "express";
import Model, {exists} from "./model";

const app = express();
const port = 3000;

app.use("/static", express.static("public"));

app.get("/user/:name", (request, response) => {
    let name = request.params.name.toLowerCase();
    if(exists(name)) {
        response.json(new Model(request.params.name));
    } else {
        response.sendStatus(404);
    }
});

app.listen(port, () => console.log(`Started on port ${port}`));
