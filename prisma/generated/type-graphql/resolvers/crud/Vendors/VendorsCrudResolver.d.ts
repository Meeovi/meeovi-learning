import type { GraphQLResolveInfo } from "graphql";
import { AggregateVendorsArgs } from "./args/AggregateVendorsArgs";
import { CreateOneVendorsArgs } from "./args/CreateOneVendorsArgs";
import { DeleteManyVendorsArgs } from "./args/DeleteManyVendorsArgs";
import { DeleteOneVendorsArgs } from "./args/DeleteOneVendorsArgs";
import { FindFirstVendorsArgs } from "./args/FindFirstVendorsArgs";
import { FindFirstVendorsOrThrowArgs } from "./args/FindFirstVendorsOrThrowArgs";
import { FindManyVendorsArgs } from "./args/FindManyVendorsArgs";
import { FindUniqueVendorsArgs } from "./args/FindUniqueVendorsArgs";
import { FindUniqueVendorsOrThrowArgs } from "./args/FindUniqueVendorsOrThrowArgs";
import { GroupByVendorsArgs } from "./args/GroupByVendorsArgs";
import { UpdateManyVendorsArgs } from "./args/UpdateManyVendorsArgs";
import { UpdateOneVendorsArgs } from "./args/UpdateOneVendorsArgs";
import { UpsertOneVendorsArgs } from "./args/UpsertOneVendorsArgs";
import { Vendors } from "../../../models/Vendors";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVendors } from "../../outputs/AggregateVendors";
import { VendorsGroupBy } from "../../outputs/VendorsGroupBy";
export declare class VendorsCrudResolver {
    aggregateVendors(ctx: any, info: GraphQLResolveInfo, args: AggregateVendorsArgs): Promise<AggregateVendors>;
    createOneVendors(ctx: any, info: GraphQLResolveInfo, args: CreateOneVendorsArgs): Promise<Vendors>;
    deleteManyVendors(ctx: any, info: GraphQLResolveInfo, args: DeleteManyVendorsArgs): Promise<AffectedRowsOutput>;
    deleteOneVendors(ctx: any, info: GraphQLResolveInfo, args: DeleteOneVendorsArgs): Promise<Vendors | null>;
    findFirstVendors(ctx: any, info: GraphQLResolveInfo, args: FindFirstVendorsArgs): Promise<Vendors | null>;
    findFirstVendorsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstVendorsOrThrowArgs): Promise<Vendors | null>;
    findManyVendors(ctx: any, info: GraphQLResolveInfo, args: FindManyVendorsArgs): Promise<Vendors[]>;
    findUniqueVendors(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVendorsArgs): Promise<Vendors | null>;
    findUniqueVendorsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueVendorsOrThrowArgs): Promise<Vendors | null>;
    groupByVendors(ctx: any, info: GraphQLResolveInfo, args: GroupByVendorsArgs): Promise<VendorsGroupBy[]>;
    updateManyVendors(ctx: any, info: GraphQLResolveInfo, args: UpdateManyVendorsArgs): Promise<AffectedRowsOutput>;
    updateOneVendors(ctx: any, info: GraphQLResolveInfo, args: UpdateOneVendorsArgs): Promise<Vendors | null>;
    upsertOneVendors(ctx: any, info: GraphQLResolveInfo, args: UpsertOneVendorsArgs): Promise<Vendors>;
}
