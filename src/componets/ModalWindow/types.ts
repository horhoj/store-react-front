export interface ModalWindowProps {
  isShow: boolean;
  hideCb: ModalWindowHideCb;
}

export interface ModalWindowHideCb {
  (): void;
}
