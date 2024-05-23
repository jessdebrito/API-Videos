import { TVideo } from "../interface/video.interface";

export const videoDatabase: TVideo[] = [];

let id = 0;

export function generateId() {
  id++;

  return id;
}
