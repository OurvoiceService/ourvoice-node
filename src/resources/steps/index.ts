import { Base } from "../base";
import { StepList, Step } from "./type";

const resource = "steps";
export class Steps extends Base {
  getList(): Promise<StepList> {
    return this.invoke(`/${resource}`, {
      method: "GET",
    });
  }

  read(id: string): Promise<StepList> {
    return this.invoke(`/${resource}`, {});
  }
}
