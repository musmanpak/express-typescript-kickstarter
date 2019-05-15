import { cleanEnv, port, str} from "envalid";

function validateEnv() {
    cleanEnv(process.env, {
        DB_HOST: str(),
        DB_NAME: str(),
        DB_PASSWORD: str(),
        DB_PORT: port(),
        DB_USER: str(),
        SERVER_PORT: port()
    });
}

export default validateEnv;
