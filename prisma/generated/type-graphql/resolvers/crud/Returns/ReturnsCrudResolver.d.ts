import type { GraphQLResolveInfo } from "graphql";
import { AggregateReturnsArgs } from "./args/AggregateReturnsArgs";
import { CreateOneReturnsArgs } from "./args/CreateOneReturnsArgs";
import { DeleteManyReturnsArgs } from "./args/DeleteManyReturnsArgs";
import { DeleteOneReturnsArgs } from "./args/DeleteOneReturnsArgs";
import { FindFirstReturnsArgs } from "./args/FindFirstReturnsArgs";
import { FindFirstReturnsOrThrowArgs } from "./args/FindFirstReturnsOrThrowArgs";
import { FindManyReturnsArgs } from "./args/FindManyReturnsArgs";
import { FindUniqueReturnsArgs } from "./args/FindUniqueReturnsArgs";
import { FindUniqueReturnsOrThrowArgs } from "./args/FindUniqueReturnsOrThrowArgs";
import { GroupByReturnsArgs } from "./args/GroupByReturnsArgs";
import { UpdateManyReturnsArgs } from "./args/UpdateManyReturnsArgs";
import { UpdateOneReturnsArgs } from "./args/UpdateOneReturnsArgs";
import { UpsertOneReturnsArgs } from "./args/UpsertOneReturnsArgs";
import { Returns } from "../../../models/Returns";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReturns } from "../../outputs/AggregateReturns";
import { ReturnsGroupBy } from "../../outputs/ReturnsGroupBy";
export declare class ReturnsCrudResolver {
    aggregateReturns(ctx: any, info: GraphQLResolveInfo, args: AggregateReturnsArgs): Promise<AggregateReturns>;
    createOneReturns(ctx: any, info: GraphQLResolveInfo, args: CreateOneReturnsArgs): Promise<Returns>;
    deleteManyReturns(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReturnsArgs): Promise<AffectedRowsOutput>;
    deleteOneReturns(ctx: any, info: GraphQLResolveInfo, args: DeleteOneReturnsArgs): Promise<Returns | null>;
    findFirstReturns(ctx: any, info: GraphQLResolveInfo, args: FindFirstReturnsArgs): Promise<Returns | null>;
    findFirstReturnsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstReturnsOrThrowArgs): Promise<Returns | null>;
    findManyReturns(ctx: any, info: GraphQLResolveInfo, args: FindManyReturnsArgs): Promise<Returns[]>;
    findUniqueReturns(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReturnsArgs): Promise<Returns | null>;
    findUniqueReturnsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReturnsOrThrowArgs): Promise<Returns | null>;
    groupByReturns(ctx: any, info: GraphQLResolveInfo, args: GroupByReturnsArgs): Promise<ReturnsGroupBy[]>;
    updateManyReturns(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReturnsArgs): Promise<AffectedRowsOutput>;
    updateOneReturns(ctx: any, info: GraphQLResolveInfo, args: UpdateOneReturnsArgs): Promise<Returns | null>;
    upsertOneReturns(ctx: any, info: GraphQLResolveInfo, args: UpsertOneReturnsArgs): Promise<Returns>;
}
