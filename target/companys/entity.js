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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const entity_1 = require("../users/entity");
let Companys = class Companys extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Companys.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Companys.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Companys.prototype, "market", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Companys.prototype, "focus", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typeorm_1.Column('integer', { nullable: true }),
    __metadata("design:type", Number)
], Companys.prototype, "score", void 0);
__decorate([
    typeorm_1.Column('text', { default: "NL", nullable: true }),
    __metadata("design:type", String)
], Companys.prototype, "language", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: true }),
    __metadata("design:type", String)
], Companys.prototype, "applied", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: true }),
    __metadata("design:type", String)
], Companys.prototype, "link", void 0);
__decorate([
    typeorm_1.ManyToOne(_ => entity_1.Users, user => user.companys, { eager: true }),
    __metadata("design:type", entity_1.Users)
], Companys.prototype, "user", void 0);
Companys = __decorate([
    typeorm_1.Entity()
], Companys);
exports.Companys = Companys;
//# sourceMappingURL=entity.js.map