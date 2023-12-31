import { container } from "tsyringe";
import { tokens } from "./tokens";
import { Config } from "@config/config";
import Routes from "@presentation/http/routes";
import RedisClient from "@infrastructure/cache/redis";
import { SystemRouter } from "@presentation/http/routers/v1/systemRouter";
import { CategoryRouter } from "@presentation/http/routers/v1/categoryRouter";
import FindByIdCategoryController from "@presentation/http/controllers/category/findByIdCategoryController";
import FindAllCategoryController from "@presentation/http/controllers/category/findAllCategoryController";
import CreateCategoryController from "@presentation/http/controllers/category/createCategoryController";
import DeleteCategoryController from "@presentation/http/controllers/category/deleteCategoryController";
import UpdateCategoryController from "@presentation/http/controllers/category/updateCategoryController";
import CategoryRepository from "@domain/category/infrastructure/categoryRepository";
import CategoryService from "@domain/category/services/categoryService";
import { ProductRouter } from "@presentation/http/routers/v1/productRouter";
import FindByIdProductController from "@presentation/http/controllers/product/findByIdProductController";
import FindAllProductController from "@presentation/http/controllers/product/findAllProductController";
import CreateProductController from "@presentation/http/controllers/product/createProductController";
import DeleteProductController from "@presentation/http/controllers/product/deleteProductController";
import UpdateProductController from "@presentation/http/controllers/product/updateProductController";
import ProductRepository from "@domain/product/infrastructure/productRepository";
import ProductService from "@domain/product/services/productService";
import SystemService from "@domain/system/services/systemService";
import HealthcheckController from "@presentation/http/controllers/system/healthcheckController";
import SystemRepository from "@domain/system/infrastructure/systemRepository";
import EmailClient from "@infrastructure/email/email";
import ApmClient from "@infrastructure/apm/apm";
import CreateAsyncCategoryController from "@presentation/http/controllers/category/createAsyncCategoryController";
import CreateAsyncProductController from "@presentation/http/controllers/product/createAsyncProductController";
import KafkaClient from "@infrastructure/kafka/kafka";

const childContainer = container.createChildContainer();

childContainer.registerSingleton(tokens.Config, Config);
childContainer.registerSingleton(tokens.KafkaClient, KafkaClient);
childContainer.registerSingleton(tokens.RedisClient, RedisClient);
childContainer.registerSingleton(tokens.EmailClient, EmailClient);
childContainer.registerSingleton(tokens.ApmClient, ApmClient);
childContainer.registerSingleton(tokens.Routes, Routes);
childContainer.registerSingleton(tokens.SystemRouter, SystemRouter);
childContainer.registerSingleton(tokens.HealthcheckController, HealthcheckController);
childContainer.registerSingleton(tokens.SystemService, SystemService);
childContainer.registerSingleton(tokens.SystemRepository, SystemRepository);
childContainer.registerSingleton(tokens.CategoryRouter, CategoryRouter);
childContainer.registerSingleton(tokens.FindByIdCategoryController, FindByIdCategoryController);
childContainer.registerSingleton(tokens.FindAllCategoryController, FindAllCategoryController);
childContainer.registerSingleton(tokens.CreateAsyncCategoryController, CreateAsyncCategoryController);
childContainer.registerSingleton(tokens.CreateCategoryController, CreateCategoryController);
childContainer.registerSingleton(tokens.DeleteCategoryController, DeleteCategoryController);
childContainer.registerSingleton(tokens.UpdateCategoryController, UpdateCategoryController);
childContainer.registerSingleton(tokens.CategoryRepository, CategoryRepository);
childContainer.registerSingleton(tokens.CategoryService, CategoryService);
childContainer.registerSingleton(tokens.ProductRouter, ProductRouter);
childContainer.registerSingleton(tokens.FindByIdProductController, FindByIdProductController);
childContainer.registerSingleton(tokens.FindAllProductController, FindAllProductController);
childContainer.registerSingleton(tokens.CreateAsyncProductController, CreateAsyncProductController);
childContainer.registerSingleton(tokens.CreateProductController, CreateProductController);
childContainer.registerSingleton(tokens.DeleteProductController, DeleteProductController);
childContainer.registerSingleton(tokens.UpdateProductController, UpdateProductController);
childContainer.registerSingleton(tokens.ProductRepository, ProductRepository);
childContainer.registerSingleton(tokens.ProductService, ProductService);

export { childContainer as container };