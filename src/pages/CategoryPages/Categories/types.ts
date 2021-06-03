export interface CategoryListProps {
  isModal: boolean;
  selectActionCb: CategoryListSelectActionCb;
}

export interface CategoryListSelectActionCb {
  (item: any): void;
}
