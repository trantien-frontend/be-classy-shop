export interface Store {
  id: number | string;
  storeName: string;
  storeAddress: string;
  quantity?: number;
}

export interface Stores {
  data: Store[];
}
