import type { GraphQLResolveInfo } from "graphql";
import { AggregateAttributesArgs } from "./args/AggregateAttributesArgs";
import { CreateOneAttributesArgs } from "./args/CreateOneAttributesArgs";
import { DeleteManyAttributesArgs } from "./args/DeleteManyAttributesArgs";
import { DeleteOneAttributesArgs } from "./args/DeleteOneAttributesArgs";
import { FindFirstAttributesArgs } from "./args/FindFirstAttributesArgs";
import { FindFirstAttributesOrThrowArgs } from "./args/FindFirstAttributesOrThrowArgs";
import { FindManyAttributesArgs } from "./args/FindManyAttributesArgs";
import { FindUniqueAttributesArgs } from "./args/FindUniqueAttributesArgs";
import { FindUniqueAttributesOrThrowArgs } from "./args/FindUniqueAttributesOrThrowArgs";
import { GroupByAttributesArgs } from "./args/GroupByAttributesArgs";
import { UpdateManyAttributesArgs } from "./args/UpdateManyAttributesArgs";
import { UpdateOneAttributesArgs } from "./args/UpdateOneAttributesArgs";
import { UpsertOneAttributesArgs } from "./args/UpsertOneAttributesArgs";
import { Attributes } from "../../../models/Attributes";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAttributes } from "../../outputs/AggregateAttributes";
import { AttributesGroupBy } from "../../outputs/AttributesGroupBy";
export declare class AttributesCrudResolver {
    aggregateAttributes(ctx: any, info: GraphQLResolveInfo, args: AggregateAttributesArgs): Promise<AggregateAttributes>;
    createOneAttributes(ctx: any, info: GraphQLResolveInfo, args: CreateOneAttributesArgs): Promise<Attributes>;
    deleteManyAttributes(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAttributesArgs): Promise<AffectedRowsOutput>;
    deleteOneAttributes(ctx: any, info: GraphQLResolveInfo, args: DeleteOneAttributesArgs): Promise<Attributes | null>;
    findFirstAttributes(ctx: any, info: GraphQLResolveInfo, args: FindFirstAttributesArgs): Promise<Attributes | null>;
    findFirstAttributesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstAttributesOrThrowArgs): Promise<Attributes | null>;
    findManyAttributes(ctx: any, info: GraphQLResolveInfo, args: FindManyAttributesArgs): Promise<Attributes[]>;
    findUniqueAttributes(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAttributesArgs): Promise<Attributes | null>;
    findUniqueAttributesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAttributesOrThrowArgs): Promise<Attributes | null>;
    groupByAttributes(ctx: any, info: GraphQLResolveInfo, args: GroupByAttributesArgs): Promise<AttributesGroupBy[]>;
    updateManyAttributes(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAttributesArgs): Promise<AffectedRowsOutput>;
    updateOneAttributes(ctx: any, info: GraphQLResolveInfo, args: UpdateOneAttributesArgs): Promise<Attributes | null>;
    upsertOneAttributes(ctx: any, info: GraphQLResolveInfo, args: UpsertOneAttributesArgs): Promise<Attributes>;
}
