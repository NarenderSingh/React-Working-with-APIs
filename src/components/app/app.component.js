import React, { Component } from "react";
import NewsComponent from "../news/news.component";
import SideNewsComponent from "../news/side-news.component";

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
      },
      news3: {
        type: "everything",
        query: "domains=comicbookmovie.com&language=en"
      }
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighen-4">
              <a href="/" className="bran-logo center">
                My Feed
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <NewsComponent news={this.state.news1} />
            <NewsComponent news={this.state.news2} />
          </div>
          <div className="col s4">
            <SideNewsComponent news={this.state.news3}></SideNewsComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
