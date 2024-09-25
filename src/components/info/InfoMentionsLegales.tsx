const InfoMentionsLegales: React.FC = () => {
    return (
        <div className="max-w-4xl py-6 shadow-md rounded-lg mt-6 bg-[#2c3540b5] text-white px-6">
            <h1 className="text-2xl font-bold mb-4">Mentions Légales</h1>

            <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
            <p className="mb-4">
                <strong>Nom de l'entreprise :</strong> Koliseum Academy
                <br />
                <strong>Siège social :</strong> Nantes Ynov Campus, 20 Bd
                Général de Gaulle, 44200 Nantes
                <br />
                <strong>Téléphone :</strong> 01 23 45 67 89
                <br />
                <strong>Adresse e-mail :</strong>{" "}
                <a
                    href="mailto:contact.koliseum@gmail.com"
                    className="text-blue-500 hover:underline"
                >
                    contact.koliseum@gmail.com
                </a>
                <br />
                <strong>Forme juridique :</strong> Startup (3 personnes)
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Directeur de la publication
            </h2>
            <p className="mb-4">Lucas Coach</p>

            <h2 className="text-xl font-semibold mb-2">Hébergement</h2>
            <p className="mb-4">
                <strong>Front-end :</strong> Hébergé par Vercel
                <br />
                <strong>Back-end et Base de données :</strong> Hébergé par
                Render
                <br />
                <strong>Hébergement des documents et images :</strong>{" "}
                Cloudinary
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Propriété intellectuelle
            </h2>
            <p className="mb-4">
                Le contenu du site Koliseum Academy (textes, images, vidéos,
                design, architecture du site) est la propriété exclusive de
                Koliseum Academy. Toute reproduction, représentation,
                modification, publication, ou adaptation de tout ou partie des
                éléments du site, quel que soit le moyen ou le procédé utilisé,
                est interdite, sauf autorisation écrite préalable de Koliseum
                Academy. Toute exploitation non autorisée sera considérée comme
                une contrefaçon et poursuivie conformément au Code de la
                Propriété Intellectuelle.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Protection des données personnelles
            </h2>
            <p className="mb-4">
                La gestion des données personnelles est assurée conformément au
                Règlement Général sur la Protection des Données (RGPD). Veuillez
                consulter notre{" "}
                <a href="#rgpd" className="text-blue-500 hover:underline">
                    Politique de Confidentialité
                </a>{" "}
                pour plus de détails.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Limitation de responsabilité
            </h2>
            <p className="mb-4">
                Koliseum Academy se limite à la mise en relation entre coachs et
                participants. Nous ne saurions être tenus responsables des
                blessures ou dommages survenus pendant la pratique des sports de
                combat. Chaque participant est responsable de son état de santé
                et doit s’assurer de sa capacité à pratiquer.
            </p>

            <h2 className="text-xl font-semibold mb-2">Médiation</h2>
            <p className="mb-4">
                En cas de litige, Koliseum Academy s'efforcera de trouver une
                solution amiable. Si aucun accord n’est trouvé, vous pouvez
                faire appel à un médiateur de la consommation, conformément au
                Code de la consommation. Pour toute demande de médiation,
                contactez-nous via{" "}
                <a
                    href="mailto:contact.koliseum@gmail.com"
                    className="text-blue-500 hover:underline"
                >
                    contact.koliseum@gmail.com
                </a>
                .
            </p>
            <h2 className="text-xl font-semibold mb-2">
                Conditions d'utilisation
            </h2>
            <p className="mb-4">
                L'utilisation du site implique l'acceptation pleine et entière
                des conditions générales d'utilisation décrites dans notre
                section dédiée. Koliseum Academy se réserve le droit de modifier
                ou d'actualiser ces conditions à tout moment. .
            </p>
        </div>
    );
};

export default InfoMentionsLegales;
