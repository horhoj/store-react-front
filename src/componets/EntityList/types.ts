export interface EntityListProps {
  items: Items;
  visibleFields: EntityListVisibleField[];
  setItems: EntityListSetItems;
  addItemCb: EntityListAddItemCb;
}

export type Items = any[];

export interface EntityListVisibleField {
  name: string;
  title: string;
}

export interface EntityListSetItems {
  (items: Items): void;
}

export interface EntityListAddItemCb {
  (): void;
}
