import { Contact } from "../contacts/type"
import { Group } from "../groups/type"
import { Message } from "../messages/type"
import { Voice } from "../voices/type"


export  declare type FlowStatus = 'draft'| 'paused'| 'published'
export declare type Flow = {

    id: string,
    name: string,
    description: string,
    flow_executions_count: number,
    flow_url: string,
    flow_execution: FlowExecution,
    type:string,
    status: FlowStatus,
    metadata:object
    created_at?: Date,
    updated_at?: Date,

}

export declare type UpdateFlowStatus = {

    status: FlowStatus,

}

export declare type FlowExecution = {

    id: string,
    caller: string,
    callee?: string,
    start_time: Date,
    end_time: Date,
    status: string,
    channel_id: string,
    flow_step: FlowStep
    contact?: Contact,
    message?: Message,
    voice?: Voice,
    group: Group,
    data?: object,
    flow_id: string,
    created_at: Date,
    updated_at: Date

}

export declare type FlowStep = {
    id: string,
    label: string,
    position?: string,
    type?: string,
    created_at: Date,
    updated_at: Date
}

export declare type FlowList ={
    data: Flow[],
    links:object,
    meta: object
}