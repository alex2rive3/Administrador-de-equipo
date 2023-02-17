import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const AutorDetalle = () => {
    const { id } = useParams();
    const [player, setPlayer] = useState({});

    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(
                `${process.env.REACT_APP_API_URL}/players/${id}`
            );
            setPlayer(respuesta.data);
        };

        getData();
    }, [id]);

    return (
        <div className="card">
            <div className="card-header">Details of Player</div>
            <div className="card-body">
                <h5 className="card-title">Name: {player.nombre}</h5>
                <h5 className="card-title">Position: {player.apellido}</h5>
                <Link className="btn btn-primary" to="/players">
                    Volver
                </Link>
            </div>
        </div>
    );
};

export default AutorDetalle;
