import { ProductModel } from "@/interfaces/product.interface";
import { SortEnum } from "../../components/Sort/Sort.props";
export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating } | {type: 'reset', initialState: ProductModel[]};

export interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortReducer = (
  state: SortReducerState,
  action: SortActions
): SortReducerState => {
  switch (action.type) {
    case SortEnum.Rating:
      return {
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating ? 1 : -1
        ),
        sort: SortEnum.Rating,
      };
    case SortEnum.Price:
      return {
        products: state.products.sort((a, b) => (a.price > b.price ? -1 : 1)),
        sort: SortEnum.Price,
      };
    case 'reset': 
      return {
        sort: SortEnum.Rating,
        products: action.initialState
      }
    default:
      throw new Error("Неверный тип сортировки");
  }
};
