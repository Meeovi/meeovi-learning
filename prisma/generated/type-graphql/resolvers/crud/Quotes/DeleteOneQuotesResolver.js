"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneQuotesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneQuotesArgs_1 = require("./args/DeleteOneQuotesArgs");
const Quotes_1 = require("../../../models/Quotes");
const helpers_1 = require("../../../helpers");
let DeleteOneQuotesResolver = class DeleteOneQuotesResolver {
    async deleteOneQuotes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).quotes.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Quotes_1.Quotes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneQuotesArgs_1.DeleteOneQuotesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneQuotesResolver.prototype, "deleteOneQuotes", null);
DeleteOneQuotesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Quotes_1.Quotes)
], DeleteOneQuotesResolver);
exports.DeleteOneQuotesResolver = DeleteOneQuotesResolver;
