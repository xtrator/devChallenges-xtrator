import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex h-vh justify-center items-center h-screen">
      <div className="text-xl text-center">
        <h2>Pages:</h2>
        <ul>
          <Link to="/">404 Not Found</Link>
        </ul>
      </div>
    </div>
  );
}
