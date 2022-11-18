import React from "react";
import { Link } from "react-router-dom";
export default function Intro() {
  return (
    <div className="jumbotron container">
      <h1>Welcome to our Brand</h1>
      <p>
        We are a NGO located in the northern Nigeria, over the last few years
        have helped thousands of students attend school
      </p>
      <button type="button" class="btn btn-success">
        <Link className="link" to="/donations">
          Donate
        </Link>
      </button>
    </div>
  );
}
