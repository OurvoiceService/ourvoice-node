import { Base } from "../base";

import {Media, MediaList, NewMedia, UpdateMedia } from './type';

const resource = "medias"
export class Medias extends Base {

    getMediaById(id: string): Promise<Media> {
        return this.invoke(`/${resource}/${id}`)
    }

    getMedias(): Promise<MediaList> {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        })
    }

    saveMedia(newMedia: NewMedia): Promise<Media>{
 
        return this.invoke(`/${resource}`, {
            method: "POST", 
            body: JSON.stringify(newMedia)
        })
    }

    updateMedia(id: string, updateMedia: Partial<UpdateMedia>): Promise<Media>{
 
        return this.invoke(`/${resource}/${id}`, {
            method: "PUT", 
            body: JSON.stringify(updateMedia)
        })
    }

    deleteMedia(id: string): Promise<any>{
 
        return this.invoke(`/${resource}/${id}`, {
            method: "DELETE"
        })
    }
}