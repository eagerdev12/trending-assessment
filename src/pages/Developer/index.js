import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dev from "../../data/dev.json";
import "./index.css";

export default function Developer() {
  const [devList, setDevList] = useState([]);
  const repoAcitve = "active";
  const devActive = "none";
  useEffect(() => {
    // Get data from API using axios at here. (for now, get from json file)
    setDevList(dev);
  }, []);
  return (
    <div className="dev">
      <div className="header">
        <div className="sort">
          <Link to="/">Repositories</Link>
          <Link to="/developer" className="active">
            Developers
          </Link>
        </div>
        <div className="option">
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
        {devList.map((item, index) => (
          <div className="item">
            <div>
              <p>{index + 1}</p>
              <img src={item["img"]} />
              <div className="dev-name">
                <p>{item["first"]}</p>
                <p>{item["last"]}</p>
              </div>
            </div>
            <div className="att">
              <div>
                <img src="/img/1.jpg" />
                <p>POPULAR REPO</p>
              </div>
              <div>
                <img src="/img/2.jpg" />
                <p>{item["kind"]}</p>
              </div>
              <p>A template engine for Rust based on Jinja2/Django</p>
            </div>
            <div>
              <div>
                <i class="far fa-heart"></i>
                <p>Sponsor</p>
              </div>
              <div>Follow</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
