"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTagsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByTagsArgs_1 = require("./args/GroupByTagsArgs");
const Tags_1 = require("../../../models/Tags");
const TagsGroupBy_1 = require("../../outputs/TagsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTagsResolver = class GroupByTagsResolver {
    async groupByTags(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).tags.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TagsGroupBy_1.TagsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTagsArgs_1.GroupByTagsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTagsResolver.prototype, "groupByTags", null);
GroupByTagsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Tags_1.Tags)
], GroupByTagsResolver);
exports.GroupByTagsResolver = GroupByTagsResolver;
