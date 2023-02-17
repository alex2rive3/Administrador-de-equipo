import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "../../components/DeleteButton";

const PlayersList = () => {
    const [players, setPlayers] = useState([]);
    const [estado, setEstado] = useState(3);
    const updateState = async (id, estado) => {
        const res = await axios.put(
            `${process.env.REACT_APP_API_URL}/players/state/${id}`,
            { estado: estado }
        );
        setEstado(estado);
        console.log(res);
    };

    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(
                `${process.env.REACT_APP_API_URL}/players`
            );
            setPlayers(respuesta.data);
        };

        getData();
    }, [estado]);

    const quitarPlayer = (autorID) => {
        setPlayers(players.filter((player) => player._id !== autorID));
    };

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
                                <DeleteButton
                                    id_player={player._id}
                                    successCallback={quitarPlayer}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default PlayersList;
