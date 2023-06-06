import { Base } from "../base";
import { NewCampaign, Campaign, CampaignList } from "./type";

const resource = "campaigns";
export class Campaigns extends Base {
  read(id: string): Promise<Campaign> {
    return this.invoke(`/${resource}/${id}`);
  }

  getList(): Promise<CampaignList> {
    return this.invoke(`/${resource}`, {
      method: "GET",
    });
  }

  create(newCampagne: Partial<NewCampaign>): Promise<Campaign> {
    return this.invoke(`/${resource}`, {
      method: "POST",
      body: JSON.stringify(newCampagne),
    });
  }

  update(id: string, newCampagne: Partial<NewCampaign>): Promise<Campaign> {
    return this.invoke(`/${resource}`, {
      method: "POST",
      body: JSON.stringify(newCampagne),
    });
  }

  delete(id: string): Promise<Campaign> {
    return this.invoke(`/${resource}/${id}`, {
      method: "DELETE",
    });
  }
}
