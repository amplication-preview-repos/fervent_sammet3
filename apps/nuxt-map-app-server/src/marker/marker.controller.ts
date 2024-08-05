import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MarkerService } from "./marker.service";
import { MarkerControllerBase } from "./base/marker.controller.base";

@swagger.ApiTags("markers")
@common.Controller("markers")
export class MarkerController extends MarkerControllerBase {
  constructor(protected readonly service: MarkerService) {
    super(service);
  }
}
