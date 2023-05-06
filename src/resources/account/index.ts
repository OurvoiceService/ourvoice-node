import { Base } from "../base";

import { Account, AccountList, Balance } from "./type";

const resource = "accounts";
export class Accounts extends Base {
  getAccountById(id: string): Promise<Account> {
    return this.invoke(`/${resource}/${id}`);
  }

  getAccounts(): Promise<AccountList> {
    return this.invoke(`/${resource}`, {
      method: "GET",
    });
  }

  getCurrentAccountBalance(): Promise<Balance> {
    return this.invoke("/current/balance", {
      method: "GET",
    });
  }
}
