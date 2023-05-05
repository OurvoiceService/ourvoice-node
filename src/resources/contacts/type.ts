export declare type Contact = {

    id: string
    first_name: string
    last_name: string
    phone_number: string
    language: string
    custom_fields?: CustomFields
    created_at: Date
    updated_at: Date
}

export declare type NewContact= {
    first_name: string
    last_name: string
    phone_number: string
    language: string
    custom_fields?: CustomFields

}

export declare type UpdateContact= {
    first_name?: string
    last_name?: string
    phone_number?: string
    language?: string
    custom_fields?: CustomFields

}

export interface CustomFields {
    /** Custom fields of the contact. */
    custom1: string;
    /** Custom fields of the contact. */
    custom2: string;
  }


export declare type NewContactGroup= {
    id: string
}

export declare type ContactList ={

    data: Contact[]
    links:object
    meta: object
}