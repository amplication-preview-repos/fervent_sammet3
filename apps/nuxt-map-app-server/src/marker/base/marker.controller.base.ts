/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MarkerService } from "../marker.service";
import { MarkerCreateInput } from "./MarkerCreateInput";
import { Marker } from "./Marker";
import { MarkerFindManyArgs } from "./MarkerFindManyArgs";
import { MarkerWhereUniqueInput } from "./MarkerWhereUniqueInput";
import { MarkerUpdateInput } from "./MarkerUpdateInput";

export class MarkerControllerBase {
  constructor(protected readonly service: MarkerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Marker })
  async createMarker(@common.Body() data: MarkerCreateInput): Promise<Marker> {
    return await this.service.createMarker({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Marker] })
  @ApiNestedQuery(MarkerFindManyArgs)
  async markers(@common.Req() request: Request): Promise<Marker[]> {
    const args = plainToClass(MarkerFindManyArgs, request.query);
    return this.service.markers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Marker })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async marker(
    @common.Param() params: MarkerWhereUniqueInput
  ): Promise<Marker | null> {
    const result = await this.service.marker({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Marker })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMarker(
    @common.Param() params: MarkerWhereUniqueInput,
    @common.Body() data: MarkerUpdateInput
  ): Promise<Marker | null> {
    try {
      return await this.service.updateMarker({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Marker })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMarker(
    @common.Param() params: MarkerWhereUniqueInput
  ): Promise<Marker | null> {
    try {
      return await this.service.deleteMarker({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}