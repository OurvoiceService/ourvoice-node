import { Base } from "../base";
import { StepList, Step } from "./type";

const resource = "steps"
export class Steps extends Base {


    getSteps(): Promise<StepList> {
        return this.invoke(`/${resource}`, {
            method: 'GET'
        })
    }

    getStepById(id: string): Promise<StepList> {
        return this.invoke(`/${resource}`, {
        })
    }

}