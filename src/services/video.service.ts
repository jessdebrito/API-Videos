import { generateId, videoDatabase } from "../database/database";
import {
  IVideo,
  TCreateVideoData,
  TUpdateVideoData,
} from "../interface/video.interface";

export class VideoService {
  create(data: TCreateVideoData) {
    const now = new Date();

    const newVideo: IVideo = {
      id: generateId(),
      ...data,
      createdAt: now,
      updatedAt: now,
    };

    videoDatabase.push(newVideo);

    return newVideo;
  }

  getMany(search?: string, genre?: string) {
    const results =
      search || genre
        ? videoDatabase.filter((video) => {
            return (
              video.title.toLowerCase().includes(search!.toLowerCase()) ||
              video.genre === genre
            );
          })
        : videoDatabase;
    return results;
  }

  getOne(id: number) {
    const video = videoDatabase.find((video) => video.id === id);
    return videoDatabase;
  }

  update(id: number, data: TUpdateVideoData) {
    const currentVideo = videoDatabase.find(
      (video) => video.id === id
    ) as IVideo;
    const now = new Date();
    const updateVideo: IVideo = {
      ...currentVideo,
      ...data,
      updatedAt: now,
    };
    const index = videoDatabase.findIndex((video) => video.id === id);

    videoDatabase.splice(index, 1, updateVideo);

    return updateVideo;
  }

  remove(id: number) {
    const index = videoDatabase.findIndex((video) => video.id === id);

    videoDatabase.splice(index, 1);
  }
}
