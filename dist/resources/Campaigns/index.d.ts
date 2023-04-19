import { Base } from "../base";
import { NewCampaign, Campaign } from "./type";
export declare class Campaigns extends Base {
    getCampaignById(id: string): Promise<Campaign>;
    getCampaigns(): Promise<any>;
    createCampaign(newCampagne: Partial<NewCampaign>): Promise<Campaign>;
    updateCampaign(id: string, newCampagne: Partial<NewCampaign>): Promise<Campaign>;
    deleteCampaign(id: string): Promise<Campaign>;
}
