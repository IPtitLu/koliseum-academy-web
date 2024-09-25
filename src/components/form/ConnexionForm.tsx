import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { validateConnexionForm } from "../../utils/formErrorUtils";
import ButtonLoader from "../common/ButtonLoader";

interface ConnexionFormProps {
    onSubmit: (email: string, password: string) => void;
    error?: { message: string } | null;
}

const ConnexionForm: React.FC<ConnexionFormProps> = ({ onSubmit, error }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errors, setErrors] = useState<{
        email?: string;
        password?: string;
        sqlInjection?: string;
    }>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [forgotEmail, setForgotEmail] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formValues = { email, password };
        const validationErrors = validateConnexionForm(formValues);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            try {
                await onSubmit(email, password);
            } finally {
                setIsSubmitting(false);
            }
        } else {
            setErrors(validationErrors);
        }
    };

    const handleForgotPasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Action pour la récupération de mot de passe via forgotEmail
        setIsModalOpen(false);
    };

    return (
        <div className="w-full flex flex-col md:m-auto m-0">
            <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="mb-4">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="rounded-lg bg-[#2c3540b5] px-4 py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isSubmitting}
                    />
                    {errors.email && (
                        <span className="text-red-500 mt-2">
                            {errors.email}
                        </span>
                    )}
                </div>

                <div className="flex flex-col mb-8">
                    <label htmlFor="password" className="mb-4">
                        Mot de passe *
                    </label>
                    <div className="flex relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="rounded-lg bg-[#2c3540b5] px-4 py-2 w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={isSubmitting}
                        />
                        <div
                            className="absolute right-5 top-2.5 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <FaEyeSlash size={20} />
                            ) : (
                                <FaEye size={20} />
                            )}
                        </div>
                    </div>
                    {errors.password && (
                        <span className="text-red-500 mt-2">
                            {errors.password}
                        </span>
                    )}
                </div>

                {errors.sqlInjection && (
                    <div className="text-red-500 mb-4 mt-2">
                        {errors.sqlInjection}
                    </div>
                )}

                {error && (
                    <div className="text-red-500 mb-4">{error.message}</div>
                )}

                <div className="text-xs font-thin mb-6">
                    (*) Champs obligatoires
                </div>

                <div className="flex flex-col mb-4">
                    <span
                        className="text-white underline cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Mot de passe oublié ?
                    </span>
                </div>

                <div className="w-full flex flex-row justify-between">
                    
                    {!isSubmitting && (
                        <NavLink
                            to={`/inscription`}
                            rel="s'inscrire"
                            className="rounded-lg bg-[#2c3540b5] px-4 py-2 hover:bg-[#2c35405a]"
                        >
                            S'inscrire
                        </NavLink>
                    )}
                    <button
                        className="rounded-lg bg-[#2c3540b5] px-4 py-2 hover:bg-[#2c35405a]"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <div className="flex flex-row flex-nowrap">
                                <ButtonLoader />
                                <span className="ml-2">
                                    Connexion en cours...
                                </span>
                            </div>
                        ) : (
                            "Se connecter"
                        )}
                    </button>
                </div>
            </form>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-[#2c3540b5] rounded-lg shadow-lg w-full max-w-lg mx-4 p-6 relative">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">
                                Récupérer votre mot de passe
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-white text-xl"
                            >
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleForgotPasswordSubmit}>
                            <div className="flex flex-col mb-4">
                                <label htmlFor="forgotEmail" className="mb-2">
                                    Adresse email
                                </label>
                                <input
                                    type="email"
                                    id="forgotEmail"
                                    className="rounded-lg bg-[#2c3540b5] px-4 py-2"
                                    value={forgotEmail}
                                    onChange={(e) =>
                                        setForgotEmail(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="flex justify-between ">
                                <button
                                    className="rounded-lg bg-gray-400 px-4 py-2 hover:bg-gray-500"
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Annuler
                                </button>
                                <button
                                    className="rounded-lg bg-[#2c3540b5] px-4 py-2 hover:bg-[#2c35405a]"
                                    type="submit"
                                >
                                    Valider
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConnexionForm;
