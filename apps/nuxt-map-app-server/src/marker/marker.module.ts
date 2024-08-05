import { Module } from "@nestjs/common";
import { MarkerModuleBase } from "./base/marker.module.base";
import { MarkerService } from "./marker.service";
import { MarkerController } from "./marker.controller";
import { MarkerResolver } from "./marker.resolver";

@Module({
  imports: [MarkerModuleBase],
  controllers: [MarkerController],
  providers: [MarkerService, MarkerResolver],
  exports: [MarkerService],
})
export class MarkerModule {}
