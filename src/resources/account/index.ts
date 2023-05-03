import { Base } from "../base";

import { Account, AccountList, Balance } from './type';

const resource = "accounts"
export class Accounts extends Base {

    retrieveAccount(id: string): Promise<Account> {
        return this.invoke(`/${resource}/${id}`)
    }

    retrieveAccounts(): Promise<AccountList> {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        })
    }

    retrieveCurrentAccountBalance(): Promise<Balance> {
        return this.invoke('/current/balance', {
            method: 'GET'
        })
    }


}