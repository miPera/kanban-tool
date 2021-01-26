import React, { Component } from "react";
import {
  faEdit,
  faFlagCheckered,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProjectItem extends Component {
  render() {
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">REACT</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>Spring / React Project</h3>
              <p>Project to create a Kanban Board with Spring Boot and React</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <a href="#">
                  <li className="list-group-item board">
                    <FontAwesomeIcon icon={faFlagCheckered} /> Project Board
                  </li>
                </a>
                <a href="#">
                  <li className="list-group-item update">
                    <span className="fa fa-edit">
                      <FontAwesomeIcon icon={faEdit} /> UpdateProject Info
                    </span>
                  </li>
                </a>
                <a href="">
                  <li className="list-group-item delete">
                    <span className="fa fa-minus-circle">
                      <FontAwesomeIcon icon={faMinusCircle} /> Delete Project
                    </span>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
