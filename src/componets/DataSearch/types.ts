export interface DataSearchProps {
  findStr: string;
  searchCb: DataSearchCb;
  isLoading: boolean;
}

export interface DataSearchCb {
  (findStr: string): void;
}

export interface DataSearchUpdateBtnClkCb {
  (): void;
}
