import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useMatch } from "react-router-dom";
import { useTheme } from "../../Context";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const getUrl = "https://jsonplaceholder.typicode.com/users";
    const { pathname } = useMatch("*");
    const { theme } = useTheme();

    useEffect(() => {
        axios
            .get(getUrl)
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
    }, [])

    return (
        <div className="container">
            <h1 className="display-4">Users</h1>
            <div className="row">
                {
                    loading
                    ? <div className="display-5">Loading...</div>
                    : users.map((user, index) => {
                        return (
                            <div className="col-md-3 my-2" key={index}>
                                <div className={`card bg-${theme}`}>
                                    <img src="https://storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png" alt="User photograph" className="w-100" />
                                </div>
                                <div className="card-body">
                                    <h5 className="pl-2 card-title">{user.name}</h5>
                                    <ul className="list-group my-3">
                                        <li className="list-group-user">
                                            <strong>Username: </strong>{user.username}
                                        </li>
                                    </ul>
                                    <Link className="btn btn-outline-danger" to={`${pathname}/${user.id}`}>
                                        Show more details
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default Users;