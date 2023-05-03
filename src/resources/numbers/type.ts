
export declare type Number = {

  id: string,
  account_id: string,
  phone_number: string,
  created_at?: Date,
  updated_at?: Date,

}

export declare type NumberList = {
  data: Number[]
  links: object
  meta: object
}