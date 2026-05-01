"use client";

import { useState, useEffect } from "react";
import { usePokemon } from "@/hooks/usePokemon";
import PokemonCard from "@/components/PokemonCard";
import PokemonModal from "@/components/PokemonModal";

export default function Home() {
  const [page, setPage] = useState(0);
  const { data, loading } = usePokemon(page);

  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<any>(null);

  // Load favorites
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Toggle favorite
  const toggleFavorite = (id: number) => {
    let updated;

    if (favorites.includes(id)) {
      updated = favorites.filter((f) => f !== id);
    } else {
      updated = [...favorites, id];
    }

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <main className="p-6 pb-20 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Pokedex Lite</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search Pokémon"
        className="border p-3 mb-6 w-full rounded-lg shadow-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Grid */}
      {loading ? (
        <p className="text-center text-gray-600 text-xl">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data
            .filter((p) =>
              p.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
                isFavorite={favorites.includes(pokemon.id)}
                onToggleFavorite={toggleFavorite}
                onClick={() => setSelectedPokemon(pokemon)} // ✅ FIX HERE
              />
            ))}
        </div>
      )}

      {/* Modal */}
      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}

      {/* Pagination */}

      <div className="flex justify-between mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          className="px-5 py-2 bg-white text-gray-800 font-medium rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          ← Prev
        </button>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-5 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Next →
        </button>
      </div>
    </main>
  );
}