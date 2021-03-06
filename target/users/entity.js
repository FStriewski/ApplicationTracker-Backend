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
const entity_1 = require("../companys/entity");
const class_transformer_1 = require("class-transformer");
const bcrypt = require("bcrypt");
let Users = class Users extends typeorm_1.BaseEntity {
    async setPassword(rawPassword) {
        const hash = await bcrypt.hash(rawPassword, 10);
        this.password = hash;
    }
    checkPassword(rawPassword) {
        return bcrypt.compare(rawPassword, this.password);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    class_validator_1.IsEmail(),
    typeorm_1.Column('text', { nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    typeorm_1.Column('text', { default: 'admin' }),
    __metadata("design:type", String)
], Users.prototype, "role", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(6),
    typeorm_1.Column('text'),
    class_transformer_1.Exclude({ toPlainOnly: true }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    typeorm_1.OneToMany(_ => entity_1.Companys, company => company.user),
    __metadata("design:type", Array)
], Users.prototype, "companys", void 0);
Users = __decorate([
    typeorm_1.Entity()
], Users);
exports.Users = Users;
//# sourceMappingURL=entity.js.map