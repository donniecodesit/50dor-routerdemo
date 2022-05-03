import React from "react";

export default function Homepage() {
    return (
        <div className="container">
            <div className="row my-3">
                <h5 className="display-4">Homepage</h5>
            </div>
            <div className="row">
                <div className="col">
                    <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjUwNTZ8MHwxfHNlYXJjaHwxfHxqYXZhc2NyaXB0fGVufDB8fHx8MTY1MTYxNDI4OA&ixlib=rb-1.2.1&q=80&w=1080" alt="home" className="w-100" />
                </div>
                <div className="col">
                    <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="lead">
                    Dignissim sodales ut eu sem integer vitae justo. Et egestas quis ipsum suspendisse ultrices. Nunc sed id semper risus in hendrerit. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Ac tincidunt vitae semper quis. Sit amet cursus sit amet. Velit sed ullamcorper morbi tincidunt ornare. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Quisque egestas diam in arcu cursus. Non diam phasellus vestibulum lorem.
                    </p>
                </div>
            </div>
        </div>
    )
}