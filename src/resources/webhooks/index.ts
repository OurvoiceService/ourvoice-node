import { Base } from "../base";

import { NewWebhook, Webhook, WebhookList, UpdateWebhook } from "./type";

const resource = "Webhooks";
export class Webhooks extends Base {
  read(id: string): Promise<Webhook> {
    return this.invoke(`/${resource}/${id}`);
  }

  getList(): Promise<WebhookList> {
    return this.invoke(`/${resource}`, {
      method: "GET",
    });
  }

  create(newWebhook: NewWebhook): Promise<Webhook> {
    return this.invoke(`/${resource}`, {
      method: "POST",
      body: JSON.stringify(newWebhook),
    });
  }

  update(
    id: string,
    updateWebhook: Partial<UpdateWebhook>
  ): Promise<Webhook> {
    return this.invoke(`/${resource}/${id}`, {
      method: "PUT",
      body: JSON.stringify(updateWebhook),
    });
  }

  delete(id: string): Promise<any> {
    return this.invoke(`/${resource}/${id}`, {
      method: "DELETE",
    });
  }
}
