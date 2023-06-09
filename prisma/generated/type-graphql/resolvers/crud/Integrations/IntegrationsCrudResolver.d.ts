import type { GraphQLResolveInfo } from "graphql";
import { AggregateIntegrationsArgs } from "./args/AggregateIntegrationsArgs";
import { CreateOneIntegrationsArgs } from "./args/CreateOneIntegrationsArgs";
import { DeleteManyIntegrationsArgs } from "./args/DeleteManyIntegrationsArgs";
import { DeleteOneIntegrationsArgs } from "./args/DeleteOneIntegrationsArgs";
import { FindFirstIntegrationsArgs } from "./args/FindFirstIntegrationsArgs";
import { FindFirstIntegrationsOrThrowArgs } from "./args/FindFirstIntegrationsOrThrowArgs";
import { FindManyIntegrationsArgs } from "./args/FindManyIntegrationsArgs";
import { FindUniqueIntegrationsArgs } from "./args/FindUniqueIntegrationsArgs";
import { FindUniqueIntegrationsOrThrowArgs } from "./args/FindUniqueIntegrationsOrThrowArgs";
import { GroupByIntegrationsArgs } from "./args/GroupByIntegrationsArgs";
import { UpdateManyIntegrationsArgs } from "./args/UpdateManyIntegrationsArgs";
import { UpdateOneIntegrationsArgs } from "./args/UpdateOneIntegrationsArgs";
import { UpsertOneIntegrationsArgs } from "./args/UpsertOneIntegrationsArgs";
import { Integrations } from "../../../models/Integrations";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateIntegrations } from "../../outputs/AggregateIntegrations";
import { IntegrationsGroupBy } from "../../outputs/IntegrationsGroupBy";
export declare class IntegrationsCrudResolver {
    aggregateIntegrations(ctx: any, info: GraphQLResolveInfo, args: AggregateIntegrationsArgs): Promise<AggregateIntegrations>;
    createOneIntegrations(ctx: any, info: GraphQLResolveInfo, args: CreateOneIntegrationsArgs): Promise<Integrations>;
    deleteManyIntegrations(ctx: any, info: GraphQLResolveInfo, args: DeleteManyIntegrationsArgs): Promise<AffectedRowsOutput>;
    deleteOneIntegrations(ctx: any, info: GraphQLResolveInfo, args: DeleteOneIntegrationsArgs): Promise<Integrations | null>;
    findFirstIntegrations(ctx: any, info: GraphQLResolveInfo, args: FindFirstIntegrationsArgs): Promise<Integrations | null>;
    findFirstIntegrationsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstIntegrationsOrThrowArgs): Promise<Integrations | null>;
    findManyIntegrations(ctx: any, info: GraphQLResolveInfo, args: FindManyIntegrationsArgs): Promise<Integrations[]>;
    findUniqueIntegrations(ctx: any, info: GraphQLResolveInfo, args: FindUniqueIntegrationsArgs): Promise<Integrations | null>;
    findUniqueIntegrationsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueIntegrationsOrThrowArgs): Promise<Integrations | null>;
    groupByIntegrations(ctx: any, info: GraphQLResolveInfo, args: GroupByIntegrationsArgs): Promise<IntegrationsGroupBy[]>;
    updateManyIntegrations(ctx: any, info: GraphQLResolveInfo, args: UpdateManyIntegrationsArgs): Promise<AffectedRowsOutput>;
    updateOneIntegrations(ctx: any, info: GraphQLResolveInfo, args: UpdateOneIntegrationsArgs): Promise<Integrations | null>;
    upsertOneIntegrations(ctx: any, info: GraphQLResolveInfo, args: UpsertOneIntegrationsArgs): Promise<Integrations>;
}
