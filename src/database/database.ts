import { IVideo } from "../interface/video.interface";

export const videoDatabase: IVideo[] = [];

let id = 0;

export function generateId() {
  id++;

  return id;
}
