import React from "react";
import PlayerForm from "../../components/PlayerForm";
import axios from "axios";
import Swal from "sweetalert2";

const PlayersAdd = () => {
    const initialValues = {
        name: "",
        position: "",
    };

    const crearPlayer = async (values, actions) => {
        try {
            const respuesta = await axios.post(
                `${process.env.REACT_APP_API_URL}/players/new`,
                values
            );
            console.log(respuesta);
            if (respuesta.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "GENIAL!!!",
                    text: `Se ha agregado ${respuesta.data.name} perfectamente!`,
                });

                actions.resetForm(initialValues);
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
            <h1>Add Player</h1>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6">
                    <PlayerForm
                        initialValues={initialValues}
                        botonTexto="Add"
                        onSubmit={crearPlayer}
                    />
                </div>
            </div>
        </>
    );
};

export default PlayersAdd;
