import { MarkerWhereInput } from "./MarkerWhereInput";
import { MarkerOrderByInput } from "./MarkerOrderByInput";

export type MarkerFindManyArgs = {
  where?: MarkerWhereInput;
  orderBy?: Array<MarkerOrderByInput>;
  skip?: number;
  take?: number;
};
