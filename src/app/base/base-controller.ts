import express from "express";

export class BaseController {

    public path = "";
    public router = express.Router();

    constructor(path = "") {
        if (path) {
            this.path = path;
            this.initializeRoutes();
        }
    }

    public getAll = (request: express.Request, response: express.Response) => {
        response.send("Hello World");
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAll);
    }
}
