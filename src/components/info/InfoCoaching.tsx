const InfoCoaching: React.FC = () => {
    return (
        <div className="w-full py-6 shadow-md rounded-lg mt-6 bg-[#2c3540b5] text-white px-6">
            <h1 className="text-2xl font-bold mb-4">
                Devenir Coach sur notre Application
            </h1>

            <p className="mb-4">
                Pour obtenir le statut de coach sur notre application et
                proposer des cours de sports de combat, nous vous invitons à
                nous contacter à l'adresse suivante :{" "}
                <a
                    href="mailto:contact.koliseum@gmail.com"
                    className="text-blue-500 hover:underline"
                >
                    contact.koliseum@gmail.com
                </a>
                . Veuillez inclure dans votre demande les documents nécessaires
                à l'exercice de cette activité.
            </p>

            <h2 className="text-xl font-semibold mb-2">Documents à fournir</h2>
            <p className="mb-4">
                Pour valider votre demande, vous devrez nous envoyer les
                documents suivants :
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>
                    Votre <strong>diplôme</strong> (ex. : BPJEPS, DEJEPS)
                    attestant de vos compétences dans le domaine des sports de
                    combat.
                </li>
                <li>
                    Un <strong>certificat médical</strong> récent prouvant votre
                    aptitude physique à encadrer des activités sportives.
                </li>
                <li>
                    Votre <strong>carte professionnelle</strong> d'éducateur
                    sportif.
                </li>
            </ul>

            <p className="mb-4">
                Une fois votre dossier soumis, nous examinerons vos informations
                et vous recevrez une réponse par email. Si votre dossier est
                validé, votre compte sera mis à jour avec le statut de coach,
                vous permettant de proposer des cours de sports de combat à nos
                apprenants.
            </p>

            <p className="mb-4">
                Pour toute question, n'hésitez pas à nous écrire à{" "}
                <a
                    href="mailto:contact.koliseum@gmail.com"
                    className="text-blue-500 hover:underline"
                >
                    contact.koliseum@gmail.com
                </a>
                .
            </p>
        </div>
    );
};

export default InfoCoaching;
