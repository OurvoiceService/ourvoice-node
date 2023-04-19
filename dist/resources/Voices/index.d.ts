import { Base } from "../base";
import { NewVoice, Voice } from "./type";
export declare class Voices extends Base {
    getVoiceById(id: string): Promise<Voice>;
    getVoices(): Promise<any>;
    sendVoice(newVoice: NewVoice): Promise<Voice>;
    deleteVoice(id: string): Promise<Voice>;
}
