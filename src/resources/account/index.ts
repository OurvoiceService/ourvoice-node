import { Base } from "../base";

import { Account, AccountList, Balance } from "./type";

const resource = "accounts";
export class Accounts extends Base {
  read(id: string): Promise<Account> {
    return this.invoke(`/${resource}/${id}`);
  }

  getList(): Promise<AccountList> {
    return this.invoke(`/${resource}`, {
      method: "GET",
    });
  }

  balance(): Promise<Balance> {
    return this.invoke("/current/balance", {
      method: "GET",
    });
  }
}
