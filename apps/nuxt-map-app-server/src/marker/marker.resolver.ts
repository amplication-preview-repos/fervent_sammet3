import * as graphql from "@nestjs/graphql";
import { MarkerResolverBase } from "./base/marker.resolver.base";
import { Marker } from "./base/Marker";
import { MarkerService } from "./marker.service";

@graphql.Resolver(() => Marker)
export class MarkerResolver extends MarkerResolverBase {
  constructor(protected readonly service: MarkerService) {
    super(service);
  }
}
