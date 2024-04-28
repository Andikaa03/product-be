"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDatasource = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("./product.model");
const mongoose_2 = require("@nestjs/mongoose");
let ProductDatasource = class ProductDatasource {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async create({ name, image, price, stock, category, }) {
        await this.productModel.create({
            name,
            image,
            price,
            stock,
            category,
        });
    }
    async getList(page) {
        return await this.productModel.paginate({}, { page, limit: 10 });
    }
    async find(id) {
        return await this.productModel.findOne({
            _id: new mongoose_1.Types.ObjectId(id),
        });
    }
    async update(id, { name, image, price, stock, category, }) {
        await this.productModel.updateOne({
            _id: new mongoose_1.Types.ObjectId(id),
        }, {
            $set: {
                name,
                image,
                price,
                stock,
                category,
            },
        });
    }
    async delete(id) {
        await this.productModel.deleteOne({
            _id: new mongoose_1.Types.ObjectId(id),
        });
    }
};
exports.ProductDatasource = ProductDatasource;
exports.ProductDatasource = ProductDatasource = __decorate([
    __param(0, (0, mongoose_2.InjectModel)(product_model_1.Product.name)),
    __metadata("design:paramtypes", [Object])
], ProductDatasource);
//# sourceMappingURL=product.datasource.js.map