
export declare type Step = {

    id: string
    label: string
    position?: string
    type: string
    start_date: Date,
    end_date: Date,
}


export declare type StepList ={

    data: Step[]
    links:object
    meta: object
}