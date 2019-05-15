import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

class App {

    private static connectToTheDatabase() {
        // Connect to data base here
    }

    public app: express.Application;

    constructor(controllers: any[]) {

        this.app = express();

        App.connectToTheDatabase();
        this.initializeMiddleware();
        this.initializeControllers(controllers);
    }

    public listen() {
        this.app.listen(process.env.PORT || process.env.SERVER_PORT, () => {
            // tslint:disable-next-line:no-console
            console.log(`server started at http://localhost:${process.env.PORT || process.env.SERVER_PORT}`);
        });
    }

    private initializeControllers(controllers: any[]) {
        controllers.forEach((controller: any) => {
            this.app.use("/", controller.router);
        });
    }

    private initializeMiddleware() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }
}

export default App;
