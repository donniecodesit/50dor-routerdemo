import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useTheme } from "../../Context";

export default function User() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const {theme} = useTheme();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                setUser(response.data);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [id])

    return (
        <div className="container row">
            <h1>User Details</h1>
            {
                loading
                ? <div>Loading...</div>
                : (
                    <div className="container row">
                        <div className="col-md-6 my-2">
                            <div className={`card bg-${theme}`}>
                                <div className="card-body">
                                    <h5 className="pl-2 card-title">{user.name}</h5>
                                    <ul className="list-group my-3">
                                        <li className="list-group-user">
                                            <strong>Username: </strong>{user.username}
                                        </li>
                                        <li className="list-group">
                                            <strong>Email: </strong>{user.email}
                                        </li>
                                    </ul>
                                    <ul className="list-group my-3">
                                        <strong>Address: </strong>
                                        <li className="mx-2">
                                            <strong>Street: </strong>{user.address.street}
                                        </li>
                                        <li className="mx-2">
                                            <strong>Suite: </strong>{user.address.suite}
                                        </li>
                                        <li className="mx-2">
                                            <strong>Zipcode: </strong>{user.address.zipcode}
                                        </li>
                                    </ul>
                                    <li className="list-group-user">
                                        <strong>Phone: </strong>{user.phone}
                                    </li>
                                    <li className="list-group-user">
                                        <strong>Website: </strong>{user.website}
                                    </li>
                                    <ul className="list-group mt-2">
                                        <strong>Company Details: </strong>
                                        <li className="mx-2"><strong>Name: </strong>{user.company.name}</li>
                                        <li className="mx-2"><strong>Catchphrase: </strong>{user.company.catchPhrase}</li>
                                        <li className="mx-2"><strong>BS: </strong>{user.company.bs}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 my-2">
                            <div className={`img-thumbnail bg-${theme}`}>
                                <img src="https://storage.needpix.com/rsynced_images/blank-profile-picture-973460_1280.png" alt="User" className="card-img-top" />
                                <p className="text-center lead mt-2">{user.name}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}