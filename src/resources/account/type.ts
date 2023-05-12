import { Subscription } from "../subscriptions/type";

export declare type Account = {
  id: string;
  name: string;
  status: string;
  balance: number;
  subscriptions: Subscription[];
  currency?: string;
  default_credit?: number;
  timezone: string;
  country: string;
  region?: string;
  city?: string;
  settings?: string;
  sms_available?: number;
  voices_available?: number;
  created_at?: Date;
  updated_at?: Date;
};

export declare type AccountList = {
  data: Account[];
  links: object;
  meta: object;
};

export declare type Balance = {
  data: {
    balance: number;
  };
  success: boolean;
  message: string;
};
