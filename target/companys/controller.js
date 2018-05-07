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
const routing_controllers_1 = require("routing-controllers");
const entity_1 = require("./entity");
let CompanyController = class CompanyController {
    async getAllCompanys() {
        const companys = await entity_1.Companys.find();
        return companys;
    }
    async getSingleCompany(id) {
        const company = await entity_1.Companys.findOneById(id);
        if (!company)
            throw new routing_controllers_1.NotFoundError("No company found");
        return company;
    }
    async createCompany(body) {
        const company = await entity_1.Companys.create(body).save();
        return company;
    }
    async updateCompany(id, update) {
        const company = await entity_1.Companys.findOneById(id);
        if (!company)
            throw new routing_controllers_1.NotFoundError("Company not found");
        return entity_1.Companys.merge(company, update).save();
    }
    deleteCompany(id) {
        try {
            console.log("Deleting...");
            entity_1.Companys.removeById(id);
            return id;
        }
        catch (e) {
            return e.message;
        }
    }
};
__decorate([
    routing_controllers_1.Get('/companys'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getAllCompanys", null);
__decorate([
    routing_controllers_1.Get('/companys/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getSingleCompany", null);
__decorate([
    routing_controllers_1.Post('/companys'),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.Companys]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "createCompany", null);
__decorate([
    routing_controllers_1.Put('/companys/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param("id")),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "updateCompany", null);
__decorate([
    routing_controllers_1.Delete('/companys/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CompanyController.prototype, "deleteCompany", null);
CompanyController = __decorate([
    routing_controllers_1.JsonController()
], CompanyController);
exports.default = CompanyController;
//# sourceMappingURL=controller.js.map