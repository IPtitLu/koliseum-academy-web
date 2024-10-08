import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CardCours from "../components/card/CardCours";
import SearchBarWithModal from "../components/modal/SearchBarWithModal";
import { useApiCourse } from "../hooks/useApiCours";
import Loader from "../components/common/Loader";
import { Course } from "../utils/types/types";
import { useRecoilValue } from "recoil";
import { userAtom } from "../utils/atom/userAtom";
import LandingPage from "./LandingPage";
import sportDetail from "../data/sports.json";

interface SearchFilters {
    coachName: string | null;
    locations: string[];
    sports: number[];
    minDate: Date | null;
    maxDate: Date | null;
    minPlaces: number | null;
    maxPlaces: number | null;
    minRemainingPlaces: number | null;
    maxRemainingPlaces: number | null;
    levels: string[];
}

const Home: React.FC = () => {
    const user = useRecoilValue(userAtom);
    const { searchCoursesByCriteria } = useApiCourse();
    const [showAllCours, setShowAllCours] = useState(false);
    const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(false);
    const [hasFetchedCourses, setHasFetchedCourses] = useState(false);
    const [searchFilters, setSearchFilters] = useState<SearchFilters>({
        coachName: null,
        locations: [],
        sports: [],
        minDate: null,
        maxDate: null,
        minPlaces: null,
        maxPlaces: null,
        minRemainingPlaces: null,
        maxRemainingPlaces: null,
        levels: [],
    });

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            setFetchError(false); // Réinitialiser l'erreur avant de tenter la récupération
            try {
                const allCourses = await searchCoursesByCriteria(searchFilters);

                if (!allCourses) {
                    throw new Error("La récupération des cours a échoué");
                }

                setFilteredCourses(allCourses);
                setHasFetchedCourses(true);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des cours:",
                    error
                );
                setFetchError(true);
                setFilteredCourses([]);
            } finally {
                setLoading(false);
            }
        };

        if (user && !loading && !fetchError && !hasFetchedCourses) {
            fetchCourses();
        }
    }, [searchFilters, searchCoursesByCriteria]);

    const toggleShowAllCours = () => {
        setShowAllCours(!showAllCours);
    };

    const parseDate = (dateString: string | null): Date | null => {
        return dateString ? new Date(dateString) : null;
    };

    const handleSearch = async (filters: any) => {
        const updatedFilters: SearchFilters = {
            ...filters,
            minDate: parseDate(filters.minDate),
            maxDate: parseDate(filters.maxDate),
        };
        setSearchFilters(updatedFilters);

        try {
            const searchedCourses = await searchCoursesByCriteria(filters);
            setFilteredCourses(searchedCourses);
        } catch (error) {
            console.error("Erreur lors de la recherche des cours:", error);
        }
    };

    const handleClearFilters = async () => {
        const defaultFilters = {
            coachName: null,
            locations: [],
            sports: [],
            minDate: null,
            maxDate: null,
            minPlaces: null,
            maxPlaces: null,
            minRemainingPlaces: null,
            maxRemainingPlaces: null,
            levels: [],
        };
        setSearchFilters(defaultFilters);

        try {
            const allCourses = await searchCoursesByCriteria(defaultFilters);
            setFilteredCourses(allCourses);
        } catch (error) {
            console.error(
                "Erreur lors de la réinitialisation des filtres:",
                error
            );
        }
    };

    const formatFilters = () => {
        const filters = [];

        if (searchFilters.coachName) filters.push(`${searchFilters.coachName}`);
        if (searchFilters.locations && searchFilters.locations.length > 0) {
            filters.push(`${searchFilters.locations.join(", ")}`);
        }
        if (searchFilters.sports && searchFilters.sports.length > 0) {
            // Récupérer les labels des sports à partir des IDs
            const sportLabels = searchFilters.sports
                .map((id) => {
                    const sport = sportDetail.find((sport) => sport.id === id);
                    return sport ? sport.label : null; // Récupère le label ou retourne null si non trouvé
                })
                .filter((label) => label !== null); // Filtrer les sports non trouvés

            if (sportLabels.length > 0) {
                filters.push(`${sportLabels.join(", ")}`);
            }
        }
        if (searchFilters.minDate) {
            filters.push(`${searchFilters.minDate.toLocaleDateString()}`);
        }
        if (searchFilters.minPlaces)
            filters.push(`Places min: ${searchFilters.minPlaces}`);
        if (searchFilters.maxPlaces)
            filters.push(`Places max: ${searchFilters.maxPlaces}`);
        if (searchFilters.levels && searchFilters.levels.length > 0) {
            filters.push(`${searchFilters.levels.join(", ")}`);
        }

        return filters;
    };

    const activeFilters = formatFilters();

    if (!user && !localStorage.getItem("token")) return <LandingPage />;
    if (!user && localStorage.getItem("token")) return <Loader />;

    return (
        <>
            <div className="text-white flex md:flex-row flex-col items-center justify-between h-full md:flex-wrap flex-nowrap pb-10">
                <div className="w-full flex flex-col items-center">
                    <SearchBarWithModal
                        onSearch={handleSearch}
                        initialFilters={searchFilters}
                        onClear={handleClearFilters}
                    />

                    {activeFilters.length > 0 && (
                        <div className="w-full flex flex-wrap gap-2 text-sm mt-4">
                            {activeFilters.map((filter, index) => (
                                <span key={index} className="underline">
                                    {filter}
                                </span>
                            ))}
                        </div>
                    )}

                    <h2 className="w-full text-left font-light pb-2 mb-6 mt-4 border-b-[0.5px]">
                        Cours disponibles
                    </h2>
                    <div className="w-full flex justify-center items-center">
                        <div className="w-full flex justify-start flex-wrap">
                            {loading ? (
                                <Loader /> // Afficher le Loader pendant le chargement
                            ) : filteredCourses !== null &&
                              filteredCourses.length > 0 ? (
                                filteredCourses
                                    .filter((cours) => {
                                        const currentDate = new Date(); // Date actuelle
                                        const courseStartDate = new Date(
                                            cours.startDate
                                        ); // Date de début du cours

                                        // On compare uniquement l'année, le mois et le jour
                                        const currentDateOnly = new Date(
                                            currentDate.getFullYear(),
                                            currentDate.getMonth(),
                                            currentDate.getDate()
                                        );

                                        const courseStartDateOnly = new Date(
                                            courseStartDate.getFullYear(),
                                            courseStartDate.getMonth(),
                                            courseStartDate.getDate()
                                        );

                                        return (
                                            courseStartDateOnly >=
                                            currentDateOnly
                                        );
                                    })
                                    .slice(
                                        0,
                                        showAllCours
                                            ? filteredCourses.length
                                            : 3
                                    )
                                    .map((cours, index) => (
                                        <CardCours
                                            key={index}
                                            id={cours.id}
                                            nom={cours?.owner?.lastName}
                                            prenom={cours?.owner?.firstName}
                                            sport={cours?.Sports}
                                            position={cours.locations[0]}
                                            dateHoraire={cours.startDate}
                                            places={cours.places}
                                            remainingPlaces={
                                                cours.remainingPlaces
                                            }
                                            level={cours.levels}
                                        />
                                    ))
                            ) : (
                                <p>Aucun cours disponible</p>
                            )}
                        </div>
                    </div>
                    {filteredCourses !== null && filteredCourses.length > 3 ? (
                        <button
                            onClick={toggleShowAllCours}
                            className="mt-4 rounded-lg bg-[#2c3540b5] px-4 py-2 text-white flex items-center"
                        >
                            {showAllCours ? "Voir moins" : "Voir plus"}
                            {showAllCours ? (
                                <FaChevronUp className="ml-2" />
                            ) : (
                                <FaChevronDown className="ml-2" />
                            )}
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;
