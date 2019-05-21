import "dotenv/config";
import UserController from "./app/user/user.controller";
import validateEnv from "./utils/validateEnv";

import App from "./app";

validateEnv();

const app = new App([
    new UserController()
]);

app.listen();
