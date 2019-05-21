import mongoose from "mongoose";

export class Database {
    public static connectToTheDatabase() {
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
}
