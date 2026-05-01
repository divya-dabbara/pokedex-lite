import { useEffect, useState } from "react";
import { fetchPokemonList, fetchPokemonDetails } from "@/services/api";

export const usePokemon = (page: number) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const load = async () => {
            setLoading(true);

            const res = await fetchPokemonList(20, page * 20);

            const detailed = await Promise.all(
                res.results.map((p: any) => fetchPokemonDetails(p.url))
            );

            setData(detailed);
            setLoading(false);
        };

        load();
    }, [page]);

    return { data, loading };
};