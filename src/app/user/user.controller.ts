import BaseController from "../base/base-controller";
import IUser from "./user.interface";

class UserController extends BaseController<IUser> {

    public path = "/api/users";

    constructor() {
        super();
        this.initializeOwnRoutes();
    }

    private initializeOwnRoutes() {
        this.router.get(this.path, this.getAll);
        this.router.get(`${this.path}/:id`, this.getById);
        this.router.put(`${this.path}/:id`, this.modify);
        this.router.delete(`${this.path}/:id`, this.delete);
        this.router.post(this.path, this.create);
    }

}

export default UserController;
