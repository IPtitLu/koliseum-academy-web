import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userAtom, isLoadingUserAtom } from "../../utils/atom/userAtom";
import Loader from "../../components/common/Loader";
import { MyProfilPicture } from "../../components/profile/ProfilPicture";
import { NotConnectedBloc } from "../../components/access/BlocNoAccessRights";
import InfoRGPD from "../../components/info/InfoRGPD";
import { levelTraduction } from "../../utils/userUtils";
import defaultPP from "../../assets/user/default-pp.jpg";
import InfoCoaching from "../../components/info/InfoCoaching";
import InfoMentionsLegales from "../../components/info/InfoMentionsLegales";
import { FaCircleInfo } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import InfoReglesSession from "../../components/info/InfoReglesSession";
import InfoCGU from "../../components/info/InfoCGU";

const Profil: React.FC = () => {
    const user = useRecoilValue(userAtom);
    const setUser = useSetRecoilState(userAtom);
    const isLoadingUser = useRecoilValue(isLoadingUserAtom);

    // Fonction pour se déconnecter
    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    const [activeTab, setActiveTab] = useState<
        | "privacyPolicy"
        | "beCoach"
        | "legalNotices"
        | "sessionRules"
        | "cgu"
        | null
    >(null);

    if (isLoadingUser) {
        return <Loader />; // Afficher le loader si en chargement
    }

    const dateOfBirth = user?.dateOfBirth
        ? typeof user.dateOfBirth === "string"
            ? new Date(user.dateOfBirth)
            : user.dateOfBirth
        : null;

    const renderDateOfBirth = () => {
        if (dateOfBirth) {
            // Convertir la date en chaîne lisible pour l'affichage
            return dateOfBirth.toLocaleDateString(); // Utilise un format de date local
        }
        return "Date of birth is not available.";
    };

    const nonEmptySports = user?.Sports?.filter(
        (sport) => sport.name.trim() !== ""
    );

    if (!user && !localStorage.getItem("token"))
        return (
            <>
                <NotConnectedBloc />
                <div className="w-full flex flex-col items-center mt-10 text-white">
                    <h3 className="flex flex-row justify-center items-center mb-6">
                        Ressources et Informations Légales
                        <FaCircleInfo className="ml-2" />
                    </h3>
                    {/* Tabs */}
                    <div className="flex w-full flex-wrap">
                        <button
                            onClick={() =>
                                setActiveTab(
                                    activeTab === "privacyPolicy"
                                        ? null
                                        : "privacyPolicy"
                                )
                            }
                            className={`flex items-center justify-center px-4 py-2 text-xs ${
                                activeTab === "privacyPolicy"
                                    ? "border-b-[1px] font-bold"
                                    : ""
                            }`}
                        >
                            RGPD
                            {activeTab === "privacyPolicy" ? (
                                <FaChevronUp className="ml-2" /> // Flèche vers le haut si ouvert
                            ) : (
                                <FaChevronDown className="ml-2" /> // Flèche vers le bas si fermé
                            )}
                        </button>

                        <button
                            onClick={() =>
                                setActiveTab(
                                    activeTab === "beCoach" ? null : "beCoach"
                                )
                            }
                            className={`flex items-center justify-between px-4 py-2 text-xs ${
                                activeTab === "beCoach"
                                    ? "border-b-[1px] font-bold"
                                    : ""
                            }`}
                        >
                            Devenir Coach
                            {activeTab === "beCoach" ? (
                                <FaChevronUp className="ml-2" /> // Flèche vers le haut si ouvert
                            ) : (
                                <FaChevronDown className="ml-2" /> // Flèche vers le bas si fermé
                            )}
                        </button>

                        <button
                            onClick={() =>
                                setActiveTab(
                                    activeTab === "legalNotices"
                                        ? null
                                        : "legalNotices"
                                )
                            }
                            className={`flex items-center justify-between px-4 py-2 text-xs ${
                                activeTab === "legalNotices"
                                    ? "border-b-[1px] font-bold"
                                    : ""
                            }`}
                        >
                            Mentions Légales
                            {activeTab === "legalNotices" ? (
                                <FaChevronUp className="ml-2" /> // Flèche vers le haut si ouvert
                            ) : (
                                <FaChevronDown className="ml-2" /> // Flèche vers le bas si fermé
                            )}
                        </button>

                        <button
                            onClick={() =>
                                setActiveTab(activeTab === "cgu" ? null : "cgu")
                            }
                            className={`flex items-center justify-between px-4 py-2 text-xs ${
                                activeTab === "cgu"
                                    ? "border-b-[1px] font-bold"
                                    : ""
                            }`}
                        >
                            CGU
                            {activeTab === "cgu" ? (
                                <FaChevronUp className="ml-2" /> // Flèche vers le haut si ouvert
                            ) : (
                                <FaChevronDown className="ml-2" /> // Flèche vers le bas si fermé
                            )}
                        </button>

                        <button
                            onClick={() =>
                                setActiveTab(
                                    activeTab === "sessionRules"
                                        ? null
                                        : "sessionRules"
                                )
                            }
                            className={`flex items-center justify-between px-4 py-2 text-xs ${
                                activeTab === "sessionRules"
                                    ? "border-b-[1px] font-bold"
                                    : ""
                            }`}
                        >
                            Règles de fonctionnement des cours
                            {activeTab === "sessionRules" ? (
                                <FaChevronUp className="ml-2" /> // Flèche vers le haut si ouvert
                            ) : (
                                <FaChevronDown className="ml-2" /> // Flèche vers le bas si fermé
                            )}
                        </button>
                    </div>

                    {/* Content */}
                    <div className="mt-4 w-full">
                        {activeTab === "privacyPolicy" && <InfoRGPD />}
                        {activeTab === "sessionRules" && <InfoReglesSession />}
                        {activeTab === "beCoach" && <InfoCoaching />}
                        {activeTab === "legalNotices" && (
                            <InfoMentionsLegales />
                        )}
                        {activeTab === "cgu" && <InfoCGU />}
                    </div>
                </div>
            </>
        );
    if (!user && localStorage.getItem("token")) return <Loader />;

    return (
        <div className="text-white flex flex-col items-center justify-center px-4">
            {user ? (
                <>
                    <div className="w-full flex justify-center mb-4">
                        <MyProfilPicture
                            src={user.profilePicture || defaultPP}
                            user={user}
                            alt={`Photo de profil de ${user.firstName} ${user.lastName}`}
                        />
                    </div>
                    <h2 className=" flex-1 mb-4 text-2xl">
                        {user?.firstName + " " + user?.lastName}
                    </h2>
                    {dateOfBirth != null ? (
                        <p className="mb-3">{renderDateOfBirth()}</p>
                    ) : (
                        ""
                    )}
                    <div className="w-full flex items-stretch flex-row mt-4 mb-10">
                        <NavLink
                            to={`/profil-modification`}
                            className="flex-1 text-center rounded-lg bg-[#2c3540b5] px-4 py-2 hover:bg-[#2c35405a] mr-4 text-sm md:text-lg"
                        >
                            Modifier le profil
                        </NavLink>
                        <button
                            onClick={handleLogout}
                            className="flex-1 text-center rounded-lg bg-[#2c3540b5] px-4 py-2 hover:bg-[#2c35405a] text-sm md:text-lg"
                        >
                            Se déconnecter
                        </button>
                    </div>
                    <p className="font-light text-xl mb-4">Sports</p>
                    <div className="w-full flex justify-center flex-row mb-4 flex-wrap">
                        {nonEmptySports && nonEmptySports?.length > 0 ? (
                            nonEmptySports.map((sport, index) => (
                                <p
                                    key={index}
                                    className="w-full mr-2 p-2 border-[2px] border-[#2c3540b5] rounded-lg mb-2 text-center"
                                >
                                    {sport.name} :{" "}
                                    {levelTraduction(sport.UserSport.level)}
                                </p>
                            ))
                        ) : (
                            <p>Aucun sport sélectionné</p> // Optionnel : afficher un message si le tableau est vide
                        )}
                    </div>
                    <div className="w-full flex flex-col items-center mt-6">
                        <h3 className="flex flex-row justify-center items-center mb-6">
                            Ressources et Informations Légales
                            <FaCircleInfo className="ml-2" />
                        </h3>
                        {/* Tabs */}
                        <div className="flex w-full flex-wrap">
                            <button
                                onClick={() =>
                                    setActiveTab(
                                        activeTab === "privacyPolicy"
                                            ? null
                                            : "privacyPolicy"
                                    )
                                }
                                className={`flex items-center justify-center px-4 py-2 text-xs ${
                                    activeTab === "privacyPolicy"
                                        ? "border-b-[1px] font-bold"
                                        : ""
                                }`}
                            >
                                RGPD
                                {activeTab === "privacyPolicy" ? (
                                    <FaChevronUp className="ml-2" /> // Flèche vers le haut si ouvert
                                ) : (
                                    <FaChevronDown className="ml-2" /> // Flèche vers le bas si fermé
                                )}
                            </button>

                            <button
                                onClick={() =>
                                    setActiveTab(
                                        activeTab === "beCoach"
                                            ? null
                                            : "beCoach"
                                    )
                                }
                                className={`flex items-center justify-between px-4 py-2 text-xs ${
                                    activeTab === "beCoach"
                                        ? "border-b-[1px] font-bold"
                                        : ""
                                }`}
                            >
                                Devenir Coach
                                {activeTab === "beCoach" ? (
                                    <FaChevronUp className="ml-2" /> // Flèche vers le haut si ouvert
                                ) : (
                                    <FaChevronDown className="ml-2" /> // Flèche vers le bas si fermé
                                )}
                            </button>

                            <button
                                onClick={() =>
                                    setActiveTab(
                                        activeTab === "legalNotices"
                                            ? null
                                            : "legalNotices"
                                    )
                                }
                                className={`flex items-center justify-between px-4 py-2 text-xs ${
                                    activeTab === "legalNotices"
                                        ? "border-b-[1px] font-bold"
                                        : ""
                                }`}
                            >
                                Mentions Légales
                                {activeTab === "legalNotices" ? (
                                    <FaChevronUp className="ml-2" /> // Flèche vers le haut si ouvert
                                ) : (
                                    <FaChevronDown className="ml-2" /> // Flèche vers le bas si fermé
                                )}
                            </button>

                            <button
                                onClick={() =>
                                    setActiveTab(
                                        activeTab === "cgu" ? null : "cgu"
                                    )
                                }
                                className={`flex items-center justify-between px-4 py-2 text-xs ${
                                    activeTab === "cgu"
                                        ? "border-b-[1px] font-bold"
                                        : ""
                                }`}
                            >
                                CGU
                                {activeTab === "cgu" ? (
                                    <FaChevronUp className="ml-2" /> // Flèche vers le haut si ouvert
                                ) : (
                                    <FaChevronDown className="ml-2" /> // Flèche vers le bas si fermé
                                )}
                            </button>

                            <button
                                onClick={() =>
                                    setActiveTab(
                                        activeTab === "sessionRules"
                                            ? null
                                            : "sessionRules"
                                    )
                                }
                                className={`flex items-center justify-between px-4 py-2 text-xs ${
                                    activeTab === "sessionRules"
                                        ? "border-b-[1px] font-bold"
                                        : ""
                                }`}
                            >
                                Règles de fonctionnement des cours
                                {activeTab === "sessionRules" ? (
                                    <FaChevronUp className="ml-2" /> // Flèche vers le haut si ouvert
                                ) : (
                                    <FaChevronDown className="ml-2" /> // Flèche vers le bas si fermé
                                )}
                            </button>
                        </div>

                        {/* Content */}
                        <div className="mt-4 w-full mb-10">
                            {activeTab === "privacyPolicy" && <InfoRGPD />}
                            {activeTab === "sessionRules" && (
                                <InfoReglesSession />
                            )}
                            {activeTab === "beCoach" && <InfoCoaching />}
                            {activeTab === "legalNotices" && (
                                <InfoMentionsLegales />
                            )}
                            {activeTab === "cgu" && <InfoCGU />}
                        </div>
                    </div>
                </>
            ) : (
                <NotConnectedBloc />
            )}
        </div>
    );
};

export default Profil;
