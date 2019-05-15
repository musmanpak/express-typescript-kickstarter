import "dotenv/config";
import { BaseController } from "./app/base/base-controller";
import validateEnv from "./utils/validateEnv";

import App from "./app";

validateEnv();

const app = new App([
    new BaseController("/")
]);

app.listen();
