import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PlayerDetalle from "../pages/players/PlayerDetalle";
import PlayerEditar from "../pages/players/PlayerEditar";
import PlayersList from "../pages/players/PlayersList";
import PlayersGame from "../pages/players/PlayersGame";
import PlayersAdd from "../pages/players/PlayersAdd";

export default createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "players",
                element: <PlayersList />,
            },
            {
                path: "players/game",
                element: <PlayersGame />,
            },
            {
                path: "players/new",
                element: <PlayersAdd />,
            },
            {
                path: "players/:id",
                element: <PlayerDetalle />,
            },
            {
                path: "players/:id/editar",
                element: <PlayerEditar />,
            },
        ],
    },
]);
