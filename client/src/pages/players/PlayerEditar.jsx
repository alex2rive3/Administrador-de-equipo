import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PlayerForm from "../../components/PlayerForm";
import axios from "axios";
import Swal from "sweetalert2";

const PlayerEditar = () => {
    const navigate = useNavigate();

    const initialValues = {
        nombre: "",
        apellido: "",
    };

    const { id } = useParams();
    const [player, setPlayer] = useState(initialValues);

    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(
                `${process.env.REACT_APP_API_URL}/players/${id}`
            );
            setPlayer(respuesta.data);
        };

        getData();
    }, [id]);

    const actualizarPlayer = async (values, actions) => {
        try {
            const respuesta = await axios.put(
                `${process.env.REACT_APP_API_URL}/players/${id}`,
                values
            );
            console.log(respuesta);
            if (respuesta.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "GENIAL!!!",
                    text: `Se ha actualizado ${respuesta.data.name} perfectamente!`,
                });

                navigate("/players");
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Ops que mal!!!",
                text: `Error: ${
                    error?.response?.data?.message || error.message
                }`,
            });
        }
    };

    return (
        <>
            <h1>Editar Player</h1>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6">
                    <PlayerForm
                        initialValues={player}
                        botonTexto="Update"
                        onSubmit={actualizarPlayer}
                    />
                </div>
            </div>
        </>
    );
};

export default PlayerEditar;
