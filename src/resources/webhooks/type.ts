export declare type Webhook = {
  id: string;
  url: string;
  secret_hash: string;
  event_types: EventType[];
  created_at: Date;
  updated_at: Date;
};

export declare type NewWebhook = {
  url: string;
  secret_hash?: string;
  event_types?: EventType[];
};

export declare type EventType =
  | "sms.sent"
  | "sms.delivered"
  | "sms.failed"
  | "sms.received"
  | "voice.busy"
  | "voice.completed"
  | "voice.cancelled"
  | "voice.answered";

export declare type WebhookList = {
  data: Webhook[];
  links: object;
  meta: object;
};
export declare type UpdateWebhook = {
  url?: string;
  secret_hash?: string;
  event_types?: EventType[];
};
