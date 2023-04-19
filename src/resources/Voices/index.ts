import { Base } from "../base";
import { NewVoice, Voice, } from "./type";

const resource = "voices"

export class Voices extends Base {

    getVoiceById(id: string): Promise<Voice> {
        return this.invoke(`/${resource}/${id}`)
    }

    getVoices(): Promise<any> {
        return this.invoke(`/voices`, {
            method: 'GET'
        })
    }

    sendVoice(newVoice: NewVoice): Promise<Voice> {
        return this.invoke(`/${resource}`, {
            method: "POST",
            body: JSON.stringify(newVoice)
        })
    }


    deleteVoice(id: string): Promise<Voice> {
        return this.invoke(`/${resource}/${id}`,{
            method: "DELETE",
        })
    }
}