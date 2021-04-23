export interface DataSearchProps {
  findStr: string;
  searchCb: DataSearchCb;
  isLoading: boolean;
  updateBtnClkCb: DataSearchUpdateBtnClkCb;
}

export interface DataSearchCb {
  (findStr: string): void;
}

export interface DataSearchUpdateBtnClkCb {
  (): void;
}
