import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const PlayersErrores = Yup.object().shape({
    name: Yup.string()
        .min(5, "El name debe tener como minimo 5 caracteres")
        .max(15, "El name no puede superar los 15 caracteres.")
        .required("Requerido"),
    position: Yup.string()
        .min(5, "Se necesita como minumo 5 caracteres.")
        .max(15, "No puede superar los 15 caracteres"),
});

const PlayerForm = ({ initialValues, botonTexto, onSubmit }) => {
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={PlayersErrores}
        >
            {({ errors, touched, isValid, dirty }) => (
                <Form>
                    <Field
                        name="name"
                        className="form-control"
                        placeholder="Name"
                    />
                    {touched.name && errors.name && (
                        <div className="ms-3 mt-1 text-danger">
                            {errors.name}
                        </div>
                    )}
                    <Field
                        name="position"
                        className="form-control mt-2"
                        placeholder="Position"
                    />
                    {touched.position && errors.position && (
                        <div className="ms-3 mt-1 text-danger">
                            {errors.position}
                        </div>
                    )}
                    <Link className="btn btn-primary m-2 " to="/players">
                        Volver
                    </Link>

                    <button
                        type="submit"
                        className="btn btn-primary m-2"
                        disabled={!(isValid && dirty)}
                    >
                        {botonTexto} Player
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default PlayerForm;
