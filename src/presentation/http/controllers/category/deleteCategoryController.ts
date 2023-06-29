import { Response, Request } from "express";
import { IBaseController } from "../../types/IRouter";
import { inject, injectable } from "tsyringe";
import { tokens } from "@di/tokens";
import { StatusCodes } from "http-status-codes";
import { ICategoryService } from "@domain/category/types/ICategoryService";

@injectable()
export default class DeleteCategoryController implements IBaseController {

    constructor(
        @inject(tokens.CategoryService)
        private categoryService: ICategoryService,
    ) { }

    async handler(req: Request, res: Response) {
        const id = req.params.id;
        await this.categoryService.delete(id);
        res.sendStatus(StatusCodes.NO_CONTENT);
    }
}