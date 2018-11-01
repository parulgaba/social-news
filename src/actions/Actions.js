import axios from "axios";

import AppDispatcher from "../dispatcher/AppDispatcher";
import ActionTypes from "../constants/AppConstants";

const Actions = {
  loadNews(activePage, receiveOnly) {
    if (receiveOnly) {
      AppDispatcher.dispatch({
        type: ActionTypes.CHANGE_PAGE,
        activePage
      });
    } else {
      AppDispatcher.dispatch({ type: ActionTypes.FETCH_NEWS, activePage });
      const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=b0d412a4584d4627a5b852e0bcbb3b9d&q=singapore&page=${activePage}`;
      axios
        .get(url)
        .then(response => {
          AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_NEWS,
            response: response.data.results,
            activePage
          });
        })
        .catch(error => window.console.log(error));
    }
  }
};

export default Actions;
