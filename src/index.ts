import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import v1Routes from "./v1/routes";

const app = express();
const port = 3000;

app.use(helmet());

app.use(cors());
app.options("*", cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mount api v1 routes
app.use("/v1", v1Routes); 

app.use(function (req, res, next) {
    res.status(404).send("Route doesn't exist");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));