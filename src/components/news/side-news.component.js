import React, { Component } from "react";
import axios from "axios";
import SideNewsSingleComponent from "./side-news-single.component";
import ErrorComponent from "../error/error.component";

class SideNewsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideNews: [],
      error: false
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=70e429653f6c48b5a41e264f29c9c07c`;

    axios
      .get(url)
      .then(response => {
        this.setState({ sideNews: response.data.articles });
      })
      .catch(e => {
        this.setState({ error: true });
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.sideNews.map((item, i) => (
        <SideNewsSingleComponent key={i} item={item}></SideNewsSingleComponent>
      ));
    } else {
      return <ErrorComponent />;
    }
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default SideNewsComponent;
