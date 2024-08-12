import { useState } from "react";
import CardSport from "../components/CardSport";
import sports from "../data/sports.json";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Sports: React.FC = () => {
    // État pour la valeur de la recherche
    const [searchTerm, setSearchTerm] = useState("");

    // Fonction pour gérer la mise à jour de la recherche
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    // Fonction pour réinitialiser la recherche
    const handleClearSearch = () => {
        setSearchTerm("");
    };

    // Filtrer les sports en fonction du terme de recherche
    const filteredSports = sports.filter((sport) =>
        sport.label.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="text-white flex flex-col items-center justify-center h-full">
            {/* Barre de recherche */}
            <div className="relative w-full max-w-md mt-2 mb-6">
                <input
                    type="text"
                    placeholder="Rechercher un sport..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="rounded-lg bg-[#2c3540b5] px-4 py-2 w-full pr-10"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {searchTerm ? (
                        <button
                            onClick={handleClearSearch}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <RxCross2 className="fill-white" />
                        </button>
                    ) : (
                        <FaSearch />
                    )}
                </span>
            </div>

            <div className="flex flex-wrap justify-center">
                {filteredSports.map((sport) => (
                    <CardSport
                        key={sport.id}
                        id={sport.id}
                        label={sport.label}
                        image={sport.image}
                        description={sport.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sports;
