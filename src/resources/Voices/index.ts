import { Base } from "../base";
import { Voice,  NewVoice } from "./type";

const resources = "calls"
const resource = "call"
const voice = "voices"
export class Voices extends Base{

    getVoices(): Promise<any>{
        return this.invoke(`/${voice}`, {
            method: "GET"
        })
    }
    
    sendVoiceCall(newVoice: NewVoice): Promise<Voice>{
 
        return this.invoke(`/${resource}`, {
            method: "POST", 
            body: JSON.stringify(newVoice)
        })
    }

    getCalls(): Promise<any>{
 
        return this.invoke(`/${resources}`, {
            method: "GET", 
        })
    }

    deleteCall(id: string): Promise<any>{
 
        return this.invoke(`/${resources}/${id}`, {
            method: "DELETE", 
            body: JSON.stringify(id)
        })
    }

}