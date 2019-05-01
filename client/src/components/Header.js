import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <GoogleAuth />
        <Link to="/" className="item">
          All Streams
        </Link>
        <Link to="/streams/new" className="item">
          Create Stream
        </Link>
      </div>
    </div>
  );
};

export default Header;
