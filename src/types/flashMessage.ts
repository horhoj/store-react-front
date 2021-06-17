export interface FlashMessageType extends FlashMessageBody {
  id: number;
}

export interface FlashMessageBody {
  type: 'alert-info' | 'alert-danger' | 'alert-success' | 'alert-warning';
  message: string;
}
