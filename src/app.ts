import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

class App {

    private static connectToTheDatabase() {
        const {
            DB_USER,
            DB_PASSWORD,
            DB_HOST,
            DB_PORT,
            DB_NAME
        } = process.env;

        mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
            {useNewUrlParser: true})
            .then(
                () => {
                    // tslint:disable-next-line:no-console
                    console.log("Connected to database");
                }
            ).catch(
            (error) => {
                // tslint:disable-next-line:no-console
                console.log("Could not connect to database", error);
            }
        );
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
