type Props = {
    pokemon: any;
    isFavorite: boolean;
    onToggleFavorite: (id: number) => void;
    onClick: () => void;
};

export default function PokemonCard({
    pokemon,
    isFavorite,
    onToggleFavorite,
    onClick,
}: Props) {
    return (
        <div
            onClick={onClick}
            className={`bg-white rounded-xl shadow-md p-4 text-center transition duration-200 relative hover:scale-105 hover:shadow-lg cursor-pointer ${isFavorite ? "ring-1 ring-yellow-300" : ""
                }`}
        >
            {/* ⭐ Favorite */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(pokemon.id);
                }}
                className={`absolute top-2 right-2 text-xl ${isFavorite
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-yellow-400"
                    }`}
            >
                {isFavorite ? "★" : "☆"}
            </button>

            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="mx-auto w-20 h-20 object-contain"
            />

            <h2 className="capitalize font-semibold mt-2 text-gray-800 text-sm md:text-base">
                {pokemon.name}
            </h2>
        </div>
    );
}