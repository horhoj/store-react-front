export interface GetEntitiesRequestConfig {
  page: number;
  per_page: number;
  search: string;
  sort_field: string;
  sort_asc: 0 | 1;
}
