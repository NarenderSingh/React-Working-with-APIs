import React, { Component } from "react";
import NewsComponent from "../news/news-component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news1: {
        type: "top-headlines",
        query: "sources=bbc-news"
      },
      news2: {
        type: "everything",
        query: "domains=techcrunch.com&language=en"
      }
    };
  }

  render() {
    return (
      <div className="App">
        <NewsComponent news={this.state.news1} />
        <NewsComponent news={this.state.news2} />
      </div>
    );
  }
}

export default App;
