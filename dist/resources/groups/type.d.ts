export declare type Group = {
    id: string;
    name: string;
    description: string;
    contacts: object;
    created_at?: string;
    updated_at?: string;
};
export declare type NewGroup = {
    name: string;
    description: string;
};
export declare type GroupList = {
    data: Group[];
    links: object;
    meta: object;
};
