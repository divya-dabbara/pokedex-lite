type Props = {
    pokemon: any;
    onClose: () => void;
};

export default function PokemonModal({ pokemon, onClose }: Props) {
    if (!pokemon) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fadeIn ">
            <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md relative animate-scaleIn text-gray-800">
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black"
                >
                    ✖
                </button>

                {/* Image */}
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="mx-auto w-24 h-24"
                />

                {/* Name */}
                <h2 className="text-xl font-bold text-center capitalize mt-2">
                    {pokemon.name}
                </h2>

                {/* Types */}
                <div className="flex justify-center gap-2 mt-3">
                    {pokemon.types.map((t: any) => (
                        <span
                            key={t.type.name}
                            className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full text-sm capitalize"
                        >
                            {t.type.name}
                        </span>
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-4">
                    {pokemon.stats.map((s: any) => (
                        <div
                            key={s.stat.name}
                            className="flex justify-between text-sm text-gray-700 py-1"
                        >
                            <span className="capitalize">{s.stat.name}</span>
                            <span>{s.base_stat}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}