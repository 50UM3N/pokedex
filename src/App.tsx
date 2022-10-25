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
        <div className="container mx-auto lg:px-4 px-3 py-4">
            {data && (
                <div className="grid grid-cols-4 gap-4">
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
