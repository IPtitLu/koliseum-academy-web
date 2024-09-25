const InfoCGU: React.FC = () => {
    return (
        <div className="max-w-4xl py-6 shadow-md rounded-lg mt-6 bg-[#2c3540b5] text-white px-6">
            <h1 className="text-2xl font-bold mb-4">
                Conditions Générales d'Utilisation (CGU)
            </h1>

            <h2 className="text-xl font-semibold mb-2">Article 1 - Objet</h2>
            <p className="mb-4">
                Les présentes Conditions Générales d'Utilisation (CGU) ont pour
                objet de définir les modalités et conditions dans lesquelles les
                utilisateurs peuvent accéder et utiliser l'application Koliseum
                Academy.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Article 2 - Inscription et Accès au Service
            </h2>
            <p className="mb-4">
                L'inscription à l'application Koliseum Academy est réservée aux
                personnes âgées de 18 ans ou plus. En créant un compte,
                l'utilisateur s'engage à fournir des informations exactes et à
                jour. Tout accès au service est soumis à l'acceptation préalable
                des présentes CGU.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Article 3 - Droits et Obligations des Utilisateurs
            </h2>
            <p className="mb-4">
                Les utilisateurs s'engagent à utiliser l'application
                conformément à son objet et à ne pas violer les lois en vigueur.
                Ils doivent respecter les délais d'annulation pour les sessions
                et se comporter de manière respectueuse envers les coachs et
                autres utilisateurs. En cas de manquement répété, des sanctions
                pourront être appliquées, incluant la suspension du compte.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Article 4 - Paiements
            </h2>
            <p className="mb-4">
                Le paiement des sessions de coaching se fait directement entre
                le coach et l'utilisateur, avant le début du cours. Koliseum
                Academy n'intervient pas dans les transactions financières et
                n'est pas responsable des litiges éventuels liés aux paiements.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Article 5 - Annulation et Politique de Désistement
            </h2>
            <p className="mb-4">
                Les utilisateurs peuvent annuler une session jusqu'à 24 heures
                avant son début. En cas de non-respect de ce délai ou d'absences
                répétées sans motif valable, Koliseum Academy se réserve le
                droit de suspendre le compte de l'utilisateur.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Article 6 - Limitation de Responsabilité
            </h2>
            <p className="mb-4">
                Koliseum Academy agit uniquement en tant qu'intermédiaire pour
                la mise en relation entre les coachs et les utilisateurs. Nous
                ne sommes pas responsables des blessures, accidents ou dommages
                survenus pendant les cours. Chaque utilisateur est responsable
                de son propre état de santé et de ses capacités physiques avant
                de participer aux sessions.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Article 7 - Propriété Intellectuelle
            </h2>
            <p className="mb-4">
                Tout le contenu de l'application, y compris les textes, images,
                vidéos, logos, et éléments de design, est protégé par les droits
                de propriété intellectuelle de Koliseum Academy. Toute
                reproduction ou utilisation non autorisée est strictement
                interdite.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Article 8 - Données Personnelles
            </h2>
            <p className="mb-4">
                Les données personnelles des utilisateurs sont collectées et
                traitées conformément au Règlement Général sur la Protection des
                Données (RGPD). Pour plus de détails, veuillez consulter notre{" "}
                <a href="#rgpd" className="text-blue-500 hover:underline">
                    Politique de Confidentialité
                </a>
                .
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Article 9 - Modification des CGU
            </h2>
            <p className="mb-4">
                Koliseum Academy se réserve le droit de modifier à tout moment
                les présentes CGU. Les utilisateurs seront informés des
                modifications et devront accepter les nouvelles conditions pour
                continuer à utiliser le service.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Article 10 - Droit applicable et Juridiction compétente
            </h2>
            <p className="mb-4">
                Les présentes CGU sont soumises à la loi française. En cas de
                litige, et après tentative de recherche d'une solution amiable,
                les tribunaux français seront seuls compétents.
            </p>
        </div>
    );
};

export default InfoCGU;
