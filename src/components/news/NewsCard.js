import React from "react";
import PropTypes from "prop-types";

import "../App.css";

class NewsCard extends React.Component {
  state = {
    open: false
  };

  /**
   * Toggles details on clicking the article title/image.
   */
  handleToggle = () => {
    if (!this.state.open) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
  };

  /**
   * Returns a clickable news item which displays title and thumbnail of an article.
   */
  render() {
    const { article } = this.props;
    const { open } = this.state;
    const publishedDate = new Date(article.published_date);
    return (
      <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img
                src={article.multimedia.length ? article.multimedia[0].url : ""}
                alt=""
                class="circle responsive-img"
              />
            </div>
            <div class="col s10">
              <span class="black-text card-title flow-text h4">
                {article.title}
              </span>
              <div class="black-text flow-text">
                {publishedDate.toLocaleDateString()}
              </div>
              <div class="card-content flow-text">
                <p>{article.abstract}</p>
              </div>
            </div>
          </div>
          <div class="card-action right-align">
            <a href={article.short_url}>Read more...</a>
          </div>
        </div>
      </div>
    );
  }
}

NewsCard.propTypes = {
  article: PropTypes.object.isRequired
};

export default NewsCard;
