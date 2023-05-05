import { Base } from "../base";

import { Flow, FlowList, UpdateFlowStatus } from './type';

const resource = "flows"

export class Flows extends Base {

    getFlowById(id: string): Promise<Flow> {
        return this.invoke(`/${resource}/${id}`,  {
            method: 'GET'
        })
    }

    getFlows(): Promise<FlowList> {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        })
    }
    
    updateFlowStatus(id: string, updateAccount: UpdateFlowStatus): Promise<Flow> {
        return this.invoke(`/${resource}`, {
            method: "PATCH",
            body: JSON.stringify(updateAccount)
        })
    }

    startFlow(id: string): Promise<any> {
        return this.invoke(`/${resource}/${id}/start`, {
            method: "post",
        })
    }
}