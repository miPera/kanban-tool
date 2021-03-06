import React, { Component } from "react";
import {
  faEdit,
  faFlagCheckered,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class ProjectItem extends Component {
  render() {
    const { project } = this.props;

    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{project.projectIdentifier}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{project.projectName}</h3>
              <p>{project.projectDescription}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <a href="#">
                  <li className="list-group-item board">
                    <FontAwesomeIcon icon={faFlagCheckered} /> Project Board
                  </li>
                </a>
                <Link to={`/updateProject/${project.projectIdentifier}`}>
                  <li className="list-group-item update">
                    <span className="fa fa-edit">
                      <FontAwesomeIcon icon={faEdit} /> UpdateProject Info
                    </span>
                  </li>
                </Link>
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
