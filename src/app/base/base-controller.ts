import express from "express";

class BaseController<T> {

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

    protected getById = (request: express.Request, response: express.Response) => {
        //
    }

    protected create = (request: express.Request, response: express.Response) => {
        //
    }

    protected modify = (request: express.Request, response: express.Response) => {
        //
    }

    protected delete = (request: express.Request, response: express.Response) => {
        //
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAll);
        this.router.get(`${this.path}/:id`, this.getById);
        this.router.put(`${this.path}/:id`, this.modify);
        this.router.delete(`${this.path}/:id`, this.delete);
        this.router.post(this.path, this.create);
    }
}

export default BaseController;
