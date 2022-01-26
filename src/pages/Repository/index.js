import React, { useState, useEffect } from "react";
import repo from "../../data/repo.json";
import { Link } from "react-router-dom";
import "./index.css";

export default function Repository() {
  const [repoList, setRepoList] = useState([]);
  useEffect(() => {
    // Get data from API using axios at here. (for now, get from json file)
    setRepoList(repo);
  }, []);
  return (
    <div className="repo">
      <div className="header">
        <div className="sort">
          <Link to="/" className="active">
            Repositories
          </Link>
          <Link to="/developer">Developers</Link>
        </div>
        <div className="option">
          <div>
            <p>Spoken Language: Any</p>
            <i class="fas fa-caret-down"></i>
          </div>
          <div>
            <p>Language: Any</p>
            <i class="fas fa-caret-down"></i>
          </div>
          <div>
            <p>Date range: Today</p>
            <i class="fas fa-caret-down"></i>
          </div>
        </div>
      </div>
      <div className="content">
        {repoList.map((item, index) => (
          <div className="item" key={index}>
            <div className="detail">
              <div>
                <img src="/img/2.jpg" />
                <p className="title">{item["title"]}</p>
              </div>
              <p>{item["content"]}</p>
              <div>
                <div className="kind">
                  <p>{item["skill"]}</p>
                </div>
                <div className="kind">
                  <i class="far fa-star"></i>
                  <p>{item["star_cnt"]}</p>
                </div>
                <div className="kind">
                  <i class="fas fa-code-branch"></i>
                  <p>{item["client_cnt"]}</p>
                </div>
                <div className="kind">
                  <p>Built by</p>
                  {item["img"].map((img_list, index) => (
                    <img key={index} src={img_list} />
                  ))}
                </div>
              </div>
            </div>
            <div className="rating">
              <div>
                <div>
                  <i class="far fa-star"></i>
                  <p>Star</p>
                </div>
                <div>
                  <i class="fas fa-caret-down"></i>
                </div>
              </div>
              <div>
                <i class="far fa-star"></i>
                <p>{item["today"]} stars today</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
