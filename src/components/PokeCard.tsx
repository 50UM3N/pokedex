import React from "react";
import PokeBall from "./PokeBall";

interface props {
    data: { id: number; name: string; url: string };
}

const PokeCard: React.FC<props> = ({ data }) => {
    return (
        <div className="col-span-1 bg-slate-100 rounded-md border-[1px] border-slate-200 p-4 relative">
            <div className="flex relative z-10 justify-between">
                <p className="capitalize text-lg font-bold text-slate-700">
                    {data.name}
                </p>
                <img
                    className="max-h-[100px] mt-7"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                    alt={data.name}
                />
            </div>
            <PokeBall
                color="fill-slate-200"
                className="absolute right-4 bottom-1/2 translate-y-1/2 h-4/5"
            />
        </div>
    );
};

export default PokeCard;
