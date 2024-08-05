import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarkerServiceBase } from "./base/marker.service.base";

@Injectable()
export class MarkerService extends MarkerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
