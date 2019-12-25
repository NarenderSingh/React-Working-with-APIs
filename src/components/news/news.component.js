import React, { Component } from "react";
import NewSingleComponent from "./news-single.component";
import ErrorComponent from "../error/error.component";

class NewsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      error: false
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=70e429653f6c48b5a41e264f29c9c07c`;

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({ news: data.articles });
      })
      .catch(e => this.setState({ error: true }));
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.news.map((item, i) => (
        <NewSingleComponent key={i} item={item}></NewSingleComponent>
      ));
    } else {
      return <ErrorComponent />;
    }
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default NewsComponent;
