import React from "react";

const NewsSingleComponent = ({ item }) => (
  <div className="col s4">
    <div className="card">
      <div className="card-image">
        <img src={item.urlToImage} alt={item.title}></img>
        <span className="card-title">{item.source.name}</span>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
      <div className="card-action">
        <a rel="noopener noreferrer" href={item.url} target="_blank">
          Full article
        </a>
      </div>
    </div>
  </div>
);

export default NewsSingleComponent;
