import { Base } from "../base";
import { Voice, NewVoice } from "./type";
export declare class Voices extends Base {
    getVoices(): Promise<any>;
    sendVoiceCall(newVoice: NewVoice): Promise<Voice>;
    getCalls(): Promise<any>;
    deleteCall(id: string): Promise<any>;
}
