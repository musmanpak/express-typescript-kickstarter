import { cleanEnv, port, str} from "envalid";

function validateEnv() {
    cleanEnv(process.env, {
        SERVER_PORT: port()
    });
}

export default validateEnv;
