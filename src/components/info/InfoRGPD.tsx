const InfoRGPD: React.FC = () => {
    return (
        <div className="max-w-4xl py-6 shadow-md rounded-lg mt-6 bg-[#2c3540b5] text-white px-6">
            <h1 className="text-2xl font-bold mb-4">
                Politique de confidentialité et traitement des documents
                administratifs
            </h1>

            <p className="mb-4">
                Dans le cadre de votre inscription à notre application, nous
                collectons des{" "}
                <strong>documents administratifs sensibles</strong> (tels que
                des justificatifs d’identité ou de domicile) afin de valider
                votre éligibilité à nos services. Nous tenons à vous informer de
                la manière dont ces documents sont traités et protégés
                conformément au Règlement Général sur la Protection des Données
                (RGPD).
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Base légale du traitement
            </h2>
            <p className="mb-4">
                Le traitement de vos données est basé sur le{" "}
                <strong>consentement</strong> que vous avez donné lors de votre
                inscription, ainsi que sur la{" "}
                <strong>nécessité de traiter vos données</strong> pour
                l'exécution de nos services (validation de votre inscription).
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Stockage des documents
            </h2>
            <p className="mb-4">
                Vos documents administratifs sont stockés de manière sécurisée
                sur notre plateforme partenaire, <strong>Cloudinary</strong>.
                Cloudinary respecte les normes de protection des données
                imposées par la RGPD :
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <strong>Chiffrement :</strong> Les fichiers sont chiffrés
                    lorsqu’ils sont transférés et lorsqu’ils sont stockés sur
                    les serveurs de Cloudinary.
                </li>
                <li>
                    <strong>Accès limité :</strong> Seuls les utilisateurs
                    autorisés, tels que vous et les coachs de notre application,
                    peuvent accéder à ces documents.
                </li>
                <li>
                    <strong>Sécurité des serveurs :</strong> Cloudinary applique
                    des politiques de sécurité strictes pour protéger vos
                    données.
                </li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">
                Durée de conservation des données
            </h2>
            <p className="mb-4">
                Vos documents seront conservés pendant toute la durée de votre
                utilisation de notre service. Une fois que vous décidez de
                supprimer votre compte ou que vos documents ne sont plus
                nécessaires, ils seront définitivement supprimés de nos serveurs
                dans un délai de 30 jours.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Utilisation des documents dans notre application
            </h2>
            <p className="mb-4">
                L’utilisation des documents administratifs est strictement
                limitée :
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <strong>Objectif unique :</strong> Vos documents sont
                    utilisés uniquement pour permettre aux coachs de valider
                    votre inscription. Ils ne sont en aucun cas exploités à
                    d’autres fins.
                </li>
                <li>
                    <strong>Visualisation temporaire :</strong> Les coachs
                    accèdent à vos documents uniquement pour vérifier les
                    informations. Une fois la vérification effectuée, les
                    documents ne sont plus accessibles.
                </li>
                <li>
                    <strong>Protection de votre vie privée :</strong> Vos
                    documents ne seront ni partagés ni utilisés à des fins
                    commerciales ou publicitaires.
                </li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">
                Partage des données avec des tiers
            </h2>
            <p className="mb-4">
                Vos données ne seront jamais partagées avec des tiers, à
                l'exception des services nécessaires au fonctionnement de notre
                application (comme Cloudinary pour l'hébergement des documents).
                En dehors de ces services, aucune donnée personnelle ne sera
                transmise sans votre consentement.
            </p>

            <h2 className="text-xl font-semibold mb-2">Vos droits</h2>
            <p className="mb-4">
                Conformément à la RGPD, vous disposez des droits suivants sur
                vos données personnelles :
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <strong>Droit d’accès :</strong> Vous pouvez à tout moment
                    demander à accéder à vos documents stockés.
                </li>
                <li>
                    <strong>Droit de rectification :</strong> Si les documents
                    fournis contiennent des erreurs, vous pouvez les corriger.
                </li>
                <li>
                    <strong>Droit à l’effacement :</strong> Vous pouvez demander
                    la suppression de vos documents lorsqu’ils ne sont plus
                    nécessaires.
                </li>
                <li>
                    <strong>Droit à la portabilité :</strong> Vous pouvez
                    demander une copie de vos données dans un format structuré
                    et lisible par machine.
                </li>
                <li>
                    <strong>Droit à la limitation :</strong> Vous pouvez
                    demander la suspension temporaire du traitement de vos
                    données dans certains cas.
                </li>
                <li>
                    <strong>Droit d'opposition :</strong> Vous pouvez vous
                    opposer au traitement de vos données dans certains cas.
                </li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">Recours et contact</h2>
            <p className="mb-4">
                Si vous avez des questions sur la gestion de vos documents ou
                sur vos droits en matière de protection des données, n’hésitez
                pas à nous contacter à{" "}
                <a
                    href="mailto:contact.koliseum@gmail.com"
                    className="text-blue-500 hover:underline"
                >
                    contact.koliseum@gmail.com
                </a>
                . Vous pouvez également déposer une réclamation auprès de la{" "}
                <strong>CNIL</strong> (Commission Nationale de l'Informatique et
                des Libertés) si vous estimez que vos droits n'ont pas été
                respectés.
            </p>
        </div>
    );
};

export default InfoRGPD;
