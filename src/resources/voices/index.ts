import { Base } from "../base";
import { Voice,  NewVoice, VoiceList, VoiceIds } from "./type";

const resources = "calls"

export class Voices extends Base{

    getAccountVoices(): Promise<VoiceList>{
        return this.invoke(`/${resources}`, {
            method: "GET"
        })
    }
    
    sendVoiceCall(newVoice: NewVoice): Promise<Voice>{
 
        return this.invoke(`/${resources}`, {
            method: "POST", 
            body: JSON.stringify(newVoice)
        })
    }


    deleteOneVoice(id: string): Promise<any>{
 
        return this.invoke(`/${resources}/${id}`, {
            method: "DELETE", 
            body: JSON.stringify(id)
        })
    }

    deleteManyVoice(voicesIds: VoiceIds): Promise<any>{
        return this.invoke(`/${resources}/bulk`, {
            method: "DELETE", 
            body: JSON.stringify(voicesIds)
        })
    }

}