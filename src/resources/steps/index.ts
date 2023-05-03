import { Base } from "../base";
import { StepList, Step } from "./type";

const resource = "steps"
export class Steps extends Base {


    retrieveSteps(): Promise<StepList> {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        })
    }

    retrieveStep(id: string): Promise<StepList> {
        return this.invoke(`/${resource}`, {
        })
    }

    deleteSender(id: string): Promise<any> {
        return this.invoke(`/${resource}/${id}`,{
            method: "DELETE",
        })
    }
}