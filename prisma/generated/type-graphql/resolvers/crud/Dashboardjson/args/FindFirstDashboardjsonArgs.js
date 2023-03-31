"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardjsonArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonOrderByWithRelationInput_1 = require("../../../inputs/DashboardjsonOrderByWithRelationInput");
const DashboardjsonWhereInput_1 = require("../../../inputs/DashboardjsonWhereInput");
const DashboardjsonWhereUniqueInput_1 = require("../../../inputs/DashboardjsonWhereUniqueInput");
const DashboardjsonScalarFieldEnum_1 = require("../../../../enums/DashboardjsonScalarFieldEnum");
let FindFirstDashboardjsonArgs = class FindFirstDashboardjsonArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonWhereInput_1.DashboardjsonWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonWhereInput_1.DashboardjsonWhereInput)
], FindFirstDashboardjsonArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonOrderByWithRelationInput_1.DashboardjsonOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardjsonArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonWhereUniqueInput_1.DashboardjsonWhereUniqueInput)
], FindFirstDashboardjsonArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardjsonArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstDashboardjsonArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonScalarFieldEnum_1.DashboardjsonScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstDashboardjsonArgs.prototype, "distinct", void 0);
FindFirstDashboardjsonArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstDashboardjsonArgs);
exports.FindFirstDashboardjsonArgs = FindFirstDashboardjsonArgs;
