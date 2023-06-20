import { Base } from "../base";

import { Subscription, SubscriptionList, NewSubscription } from "./type";

const resource = "subscriptions";
export class Subscriptions extends Base {
  read(id: string): Promise<Subscription> {
    return this.invoke(`/${resource}/${id}`);
  }

  getList(): Promise<SubscriptionList> {
    return this.invoke(`/${resource}`, {
      method: "GET",
    });
  }

  create(newSubscription: NewSubscription): Promise<Subscription> {
    return this.invoke(`/${resource}`, {
      method: "POST",
      body: JSON.stringify(newSubscription),
    });
  }

  delete(id: string): Promise<any> {
    return this.invoke(`/${resource}/${id}`, {
      method: "DELETE",
    });
  }
}
