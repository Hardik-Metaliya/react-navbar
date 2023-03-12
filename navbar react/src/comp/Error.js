import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
        <h1>not found 404</h1>
        <p>no such page found</p>
      <Link to="/">home</Link>
    </div>
  );
}

export default Error;
