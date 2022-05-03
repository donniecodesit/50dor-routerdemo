import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="container">
            <h1 className="display-4">Oops! That page doesn't exist!</h1>
            <Link to="/">Go Home</Link>
        </div>
    );
}