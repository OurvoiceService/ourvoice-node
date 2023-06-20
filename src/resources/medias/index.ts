import { Base } from "../base";

import { Media, MediaList, NewMedia, UpdateMedia } from "./type";

const resource = "medias";
export class Medias extends Base {
  read(id: string): Promise<Media> {
    return this.invoke(`/${resource}/${id}`);
  }

  getList(): Promise<MediaList> {
    return this.invoke(`/${resource}`, {
      method: "GET",
    });
  }

  create(newMedia: NewMedia): Promise<Media> {
    return this.invoke(`/${resource}`, {
      method: "POST",
      body: JSON.stringify(newMedia),
    });
  }

  update(id: string, updateMedia: Partial<UpdateMedia>): Promise<Media> {
    return this.invoke(`/${resource}/${id}`, {
      method: "PUT",
      body: JSON.stringify(updateMedia),
    });
  }

  delete(id: string): Promise<any> {
    return this.invoke(`/${resource}/${id}`, {
      method: "DELETE",
    });
  }
}
