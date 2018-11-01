import React, { Component } from "react";
import { Container } from "flux/utils";
import Store from "../../stores/Store";
import Actions from "../../actions/Actions";
import Pagination from "react-js-pagination";
import { ITEMS_PER_PAGE } from "../../constants/AppConstants";

import NewsItem from "./NewsItem";
import "../App.css";

class TopContainer extends Component {
  static getStores() {
    return [Store];
  }

  static calculateState() {
    return {
      ...Store.getState()
    };
  }

  componentDidMount() {
    Actions.loadNews(this.state.activePage);
  }

  handlePageChange = pageNumber => {
    Actions.loadNews(pageNumber, Boolean(this.state.totalItemsCount));
  };

  renderItems() {
    const { news } = this.state;
    return news.map(item => <NewsItem key={item.url} article={item} />);
  }

  /**
   * Renders paginated news articles.
   */
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <div>
          {!isLoading ? this.renderItems() : "Loading"}
          <Pagination
            firstPageText={<i className="glyphicon glyphicon-chevron-left" />}
            lastPageText={<i className="glyphicon glyphicon-chevron-right" />}
            prevPageText={<i className="glyphicon glyphicon-menu-left" />}
            nextPageText={<i className="glyphicon glyphicon-menu-right" />}
            activePage={this.state.activePage}
            itemsCountPerPage={ITEMS_PER_PAGE}
            totalItemsCount={this.state.totalItemsCount}
            onChange={this.handlePageChange}
            pageRangeDisplayed={Math.ceil(
              this.state.totalItemsCount / ITEMS_PER_PAGE
            )}
          />
        </div>
      </div>
    );
  }
}

export default Container.create(TopContainer);
