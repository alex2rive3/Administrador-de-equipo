import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [state, setState] = useState(3);
    const updateState = async (id, estado) => {
        const res = await axios.put(
            `${process.env.REACT_APP_API_URL}/players/state/${id}`,
            { estado: estado }
        );
        setState(estado);
        console.log(res);
    };

    useEffect(() => {
        console.log("caaaaaaaaaambioooooooo");
        const getData = async () => {
            const respuesta = await axios.get(
                `${process.env.REACT_APP_API_URL}/players`
            );
            setPlayers(respuesta.data);
        };
        getData();
    }, [state]);

    return (
        <>
            <h1>List Players </h1>
            <Link to="/players/new" className="btn btn-primary">
                Add Player
            </Link>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>
                                <button
                                    style={{
                                        minWidth: "40px",
                                        minHeight: "18px",
                                    }}
                                    onClick={(e) => {
                                        updateState(player._id, 1);
                                    }}
                                >
                                    {player.state[0] === 1 ? " Playing" : null}
                                </button>
                                <button
                                    style={{
                                        minWidth: "40px",
                                        minHeight: "18px",
                                    }}
                                    onClick={(e) => {
                                        updateState(player._id, 2);
                                    }}
                                >
                                    {player.state[0] === 2
                                        ? "No Playing"
                                        : null}
                                </button>
                                <button
                                    style={{
                                        minWidth: "40px",
                                        minHeight: "18px",
                                    }}
                                    onClick={(e) => {
                                        updateState(player._id, 3);
                                    }}
                                >
                                    {player.state[0] === 3 ? "Undecided" : null}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Players;
