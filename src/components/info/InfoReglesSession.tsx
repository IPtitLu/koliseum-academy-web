const InfoReglesSession: React.FC = () => {
    return (
        <div className="max-w-4xl py-6 shadow-md rounded-lg mt-6 bg-[#2c3540b5] text-white px-6">
            <h1 className="text-2xl font-bold mb-4">
                Règles de Fonctionnement des Sessions
            </h1>

            <h2 className="text-xl font-semibold mb-2">Paiement des Cours</h2>
            <p className="mb-4">
                Le paiement des cours doit être effectué directement sur place,
                à l'issue de chaque session. Le montant du cours est précisé
                lors de la réservation et doit être réglé avant le début du
                cours avec le coach.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Certifications des Coachs
            </h2>
            <p className="mb-4">
                Tous les coachs disponibles sur notre application sont certifiés
                et possèdent les diplômes nécessaires pour encadrer des
                activités de sport de combat, conformément à la réglementation
                en vigueur.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Politique de Modération
            </h2>
            <p className="mb-4">
                Les participants sont tenus de respecter un délai de désistement
                de 24h avant le début du cours. Tout désistement après ce délai
                ou toute absence non justifiée pourra entraîner des sanctions,
                telles que des avertissements ou la suspension du compte.
            </p>
            <p className="mb-4">
                Si un participant est signalé à plusieurs reprises par les
                coachs pour non-respect des règles ou comportements
                inappropriés, il pourra être suspendu de l'application de
                manière temporaire ou définitive.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Limitation de Responsabilité
            </h2>
            <p className="mb-4">
                Notre application se limite à mettre en relation des coachs et
                des participants. Une fois le cours commencé, nous ne sommes pas
                responsables des blessures ou des dommages physiques qui
                pourraient survenir lors de la pratique des sports de combat.
                Chaque participant est responsable de s'assurer qu'il est en
                bonne condition physique pour pratiquer l'activité et doit se
                conformer aux consignes de sécurité données par le coach.
            </p>

            <p className="mb-4">
                Pour toute question ou demande d'information, vous pouvez nous
                contacter à{" "}
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

export default InfoReglesSession;
