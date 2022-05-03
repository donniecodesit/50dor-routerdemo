import React from "react"

export default function About() {
    return (
        <div className="container">
            <h1 className="display-4 text-left">About Page</h1>
            <div className="row my-4">
                <div className="col-md-6">
                    <img src="https://images.unsplash.com/photo-1632882765546-1ee75f53becb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjUwNTZ8MHwxfHNlYXJjaHw5fHxqYXZhc2NyaXB0fGVufDB8fHx8MTY1MTYxNDI4OA&ixlib=rb-1.2.1&q=80&w=1080" alt="about" className="rounded w-100" />
                </div>
                <div className="col-md-6">
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className="row my-4">
                    <div className="col-md-6">
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjUwNTZ8MHwxfHNlYXJjaHwyMHx8amF2YXNjcmlwdHxlbnwwfHx8fDE2NTE2MTQzMjI&ixlib=rb-1.2.1&q=80&w=1080"alt="about" className="rounded w-100" />
                    </div>
                </div>
        </div>

    )
}