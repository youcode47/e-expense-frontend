import {CategoryResponse} from "./category.response";

export interface PurchaseResponse {
  name: string;
  description: string;
  price: number;
  quantity: number;
  total: number;
  categoryResponse: CategoryResponse;
}
