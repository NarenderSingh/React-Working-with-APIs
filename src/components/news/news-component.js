import React, { Component } from "react";
import NewSingleComponent from "../news/news-single-component";

class NewsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=70e429653f6c48b5a41e264f29c9c07c`;

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({ news: data.articles });
      })
      .catch(e => console.log(e));
  }

  renderItems() {
    return this.state.news.map((item, i) => (
      <NewSingleComponent key={i} item={item}></NewSingleComponent>
    ));
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default NewsComponent;
