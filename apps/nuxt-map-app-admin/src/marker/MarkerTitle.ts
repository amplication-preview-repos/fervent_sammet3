import { Marker as TMarker } from "../api/marker/Marker";

export const MARKER_TITLE_FIELD = "id";

export const MarkerTitle = (record: TMarker): string => {
  return record.id?.toString() || String(record.id);
};
