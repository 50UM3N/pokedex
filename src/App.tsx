import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchPokemon } from "./utils";
function App() {
    const { data, isError, error, isFetching } = useQuery(["pokemon"], () =>
        fetchPokemon("/pokemon")
    );
    console.log(data);
    return <></>;
}

export default App;
