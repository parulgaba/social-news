import React from "react";
import PropTypes from "prop-types";

import "../App.css";

class NewsItem extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    if (!this.state.open) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { article } = this.props;
    const { open } = this.state;
    const publishedDate = new Date(article.published_date);

    return (
      <div className="column">
        <div className="news-card">
          <h4
            className="title"
            style={{ cursor: "pointer" }}
            onClick={this.handleToggle}
          >
            {article.title}
          </h4>
          {open ? (
            <div>
              <div className="excerpt">{article.abstract}</div>
              <div className="excerpt">
                {article.byline ? article.byline : "The NYT"}
              </div>
              <div className="excerpt">{publishedDate.toLocaleString()}</div>
            </div>
          ) : null}
          <a
            className="link"
            href={article.short_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            NYT Full Article
          </a>
        </div>
      </div>
    );
  }
}

NewsItem.propTypes = {
  article: PropTypes.object.isRequired
};

export default NewsItem;
