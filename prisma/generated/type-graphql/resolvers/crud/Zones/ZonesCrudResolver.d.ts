import type { GraphQLResolveInfo } from "graphql";
import { AggregateZonesArgs } from "./args/AggregateZonesArgs";
import { CreateOneZonesArgs } from "./args/CreateOneZonesArgs";
import { DeleteManyZonesArgs } from "./args/DeleteManyZonesArgs";
import { DeleteOneZonesArgs } from "./args/DeleteOneZonesArgs";
import { FindFirstZonesArgs } from "./args/FindFirstZonesArgs";
import { FindFirstZonesOrThrowArgs } from "./args/FindFirstZonesOrThrowArgs";
import { FindManyZonesArgs } from "./args/FindManyZonesArgs";
import { FindUniqueZonesArgs } from "./args/FindUniqueZonesArgs";
import { FindUniqueZonesOrThrowArgs } from "./args/FindUniqueZonesOrThrowArgs";
import { GroupByZonesArgs } from "./args/GroupByZonesArgs";
import { UpdateManyZonesArgs } from "./args/UpdateManyZonesArgs";
import { UpdateOneZonesArgs } from "./args/UpdateOneZonesArgs";
import { UpsertOneZonesArgs } from "./args/UpsertOneZonesArgs";
import { Zones } from "../../../models/Zones";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateZones } from "../../outputs/AggregateZones";
import { ZonesGroupBy } from "../../outputs/ZonesGroupBy";
export declare class ZonesCrudResolver {
    aggregateZones(ctx: any, info: GraphQLResolveInfo, args: AggregateZonesArgs): Promise<AggregateZones>;
    createOneZones(ctx: any, info: GraphQLResolveInfo, args: CreateOneZonesArgs): Promise<Zones>;
    deleteManyZones(ctx: any, info: GraphQLResolveInfo, args: DeleteManyZonesArgs): Promise<AffectedRowsOutput>;
    deleteOneZones(ctx: any, info: GraphQLResolveInfo, args: DeleteOneZonesArgs): Promise<Zones | null>;
    findFirstZones(ctx: any, info: GraphQLResolveInfo, args: FindFirstZonesArgs): Promise<Zones | null>;
    findFirstZonesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstZonesOrThrowArgs): Promise<Zones | null>;
    findManyZones(ctx: any, info: GraphQLResolveInfo, args: FindManyZonesArgs): Promise<Zones[]>;
    findUniqueZones(ctx: any, info: GraphQLResolveInfo, args: FindUniqueZonesArgs): Promise<Zones | null>;
    findUniqueZonesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueZonesOrThrowArgs): Promise<Zones | null>;
    groupByZones(ctx: any, info: GraphQLResolveInfo, args: GroupByZonesArgs): Promise<ZonesGroupBy[]>;
    updateManyZones(ctx: any, info: GraphQLResolveInfo, args: UpdateManyZonesArgs): Promise<AffectedRowsOutput>;
    updateOneZones(ctx: any, info: GraphQLResolveInfo, args: UpdateOneZonesArgs): Promise<Zones | null>;
    upsertOneZones(ctx: any, info: GraphQLResolveInfo, args: UpsertOneZonesArgs): Promise<Zones>;
}
