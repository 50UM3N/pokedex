import { useQuery } from "@tanstack/react-query";
import React from "react";
import PokeCard from "./components/PokeCard";
import { fetchPokemon } from "./utils";
function App() {
    const { data, isError, error, isFetching } = useQuery(["pokemon"], () =>
        fetchPokemon("/pokemon")
    );
    console.log(data);
    return (
        <div className="w-full max-w-7xl mx-auto">
            {data && (
                <div className="flex flex-wrap">
                    {data.results.map((item: any, index: number) => (
                        <PokeCard
                            data={{ ...item, id: index + 1 }}
                            key={item.name}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
