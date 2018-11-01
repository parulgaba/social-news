import { ReduceStore } from "flux/utils";
import ActionTypes, { ITEMS_PER_PAGE } from "../constants/AppConstants";
import AppDispatcher from "../dispatcher/AppDispatcher";

class Store extends ReduceStore {
  getInitialState() {
    return {
      news: [],
      isLoading: true,
      activePage: 1,
      totalItemsCount: 0
    };
  }

  reduce(state, action) {
    let result;

    switch (action.type) {
      case ActionTypes.FETCH_NEWS:
        result = { isLoading: true, activePage: action.activePage };
        return result;

      case ActionTypes.RECEIVE_NEWS:
        result = {
          isLoading: false,
          news: action.response.slice(
            (action.activePage - 1) * ITEMS_PER_PAGE,
            action.activePage * ITEMS_PER_PAGE
          ),
          allArticles: action.response,
          activePage: action.activePage,
          totalItemsCount: action.response.length
        };
        return result;

      case ActionTypes.CHANGE_PAGE:
        result = {
          isLoading: false,
          news: state.allArticles.slice(
            (action.activePage - 1) * ITEMS_PER_PAGE,
            action.activePage * ITEMS_PER_PAGE
          ),
          allArticles: state.allArticles,
          activePage: action.activePage,
          totalItemsCount: state.allArticles.length
        };
        return result;

      default:
        return this.state;
    }
  }
}

export default new Store(AppDispatcher);
