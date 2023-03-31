"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCountriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyCountriesArgs_1 = require("./args/UpdateManyCountriesArgs");
const Countries_1 = require("../../../models/Countries");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCountriesResolver = class UpdateManyCountriesResolver {
    async updateManyCountries(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).countries.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCountriesArgs_1.UpdateManyCountriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCountriesResolver.prototype, "updateManyCountries", null);
UpdateManyCountriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Countries_1.Countries)
], UpdateManyCountriesResolver);
exports.UpdateManyCountriesResolver = UpdateManyCountriesResolver;
