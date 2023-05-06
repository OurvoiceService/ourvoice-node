import { Base } from "../base";
import { NewCampaign, Campaign, CampaignList } from "./type";

const resource = "campaigns";
export class Campaigns extends Base {
  getCampaignById(id: string): Promise<Campaign> {
    return this.invoke(`/${resource}/${id}`);
  }

  getCampaigns(): Promise<CampaignList> {
    return this.invoke(`/${resource}`, {
      method: "GET",
    });
  }

  createCampaign(newCampagne: Partial<NewCampaign>): Promise<Campaign> {
    return this.invoke(`/${resource}`, {
      method: "POST",
      body: JSON.stringify(newCampagne),
    });
  }

  updateCampaign(
    id: string,
    newCampagne: Partial<NewCampaign>
  ): Promise<Campaign> {
    return this.invoke(`/${resource}`, {
      method: "POST",
      body: JSON.stringify(newCampagne),
    });
  }

  deleteCampaign(id: string): Promise<Campaign> {
    return this.invoke(`/${resource}/${id}`, {
      method: "DELETE",
    });
  }
}
