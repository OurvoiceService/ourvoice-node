import { Base } from "../base";

import { Number, NumberList } from './type';

const resource = "numbers"
export class Numbers extends Base {

    retrieveNumber(id: string): Promise<Number> {
        return this.invoke(`/${resource}/${id}`)
    }

    retrieveNumbers(): Promise<NumberList> {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        })
    }

}