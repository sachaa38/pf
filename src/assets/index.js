import photoAccueil from "../images/site-accueil.webp";
import photoSophie from "../images/site-sophie.webp";
import photoSeo from "../images/site-seo.webp";
import photoKasa from "../images/site-kasa.webp";
import photoGrimoire from "../images/site-grimoire.webp"


export const projets = [
    {
        titre:"Site d'hébergement",
        description:"Dans ce projet, j'ai eu l'opportunité de créer la page d'accueil d'une agence de voyage en utilisant uniquement HTML et CSS. Mon objectif principal était d'intégrer une interface responsive pour le site, en suivant les maquettes fournies via Figma pour les versions mobile, tablette, et desktop. L'un des défis était d'écrire mon propre code HTML et CSS sans recourir aux outils d'exportation automatique de Figma. Cela m'a permis de mieux comprendre la structure du code et la manière d'adapter les styles pour respecter les exigences du design tout en garantissant une flexibilité sur différentes tailles d'écran. Ce projet m'a aidé à renforcer mes compétences en design responsive et m'a permis d'assurer une expérience utilisateur cohérente, peu importe le type d'appareil utilisé.",
        image: photoAccueil,
        competences: "HTML, CSS",
        formation: true,
        id: "0",
        lien: "https://sachaa38.github.io/siteaccueil/"
    },
    {
        titre:"Site Architecte d'interieur",
        description:"Dans ce projet, j'ai eu pour mission de créer une page web dynamique pour le site d'une architecte d'intérieur, en utilisant JavaScript et en interagissant avec une API. Mon rôle s'est concentré sur le développement du Front-End, en partant du HTML fourni pour construire une page de présentation des travaux de l'architecte. L'une des tâches principales était de gérer les événements utilisateurs et de manipuler les éléments du DOM grâce à JavaScript. J'ai également conçu une page de connexion dédiée à l'administrateur du site, ainsi qu'une modale permettant d'uploader de nouveaux médias. Ces fonctionnalités ont été entièrement développées from scratch, ce qui m'a permis d'approfondir mes compétences en JavaScript. Ce projet m'a offert la première opportunité d'interagir avec un code back-end pour tester les fonctionnalités, et surtout d'apprendre à communiquer avec une API, une compétence essentielle pour les applications web modernes. J'ai utilisé Figma pour accéder aux maquettes, Visual Studio Code pour le développement, et GitHub pour la gestion de version du projet, ce qui m'a permis de travailler de manière structurée et professionnelle.",
        image: photoSophie,
        competences: "HTML, JavaScript",
        formation: true,
        id: "1"
    },

    {
        titre:"Optimisation SEO du site",
        description:"Dans ce projet, j'ai agi en tant que développeur freelance pour optimiser le référencement, la performance et l'accessibilité d'un site web. Mon travail a commencé par l'identification des problèmes de chargement et de référencement en utilisant des outils comme Lighthouse et Wave pour évaluer les performances et l'accessibilité du site. J'ai ensuite élaboré des recommandations pour améliorer la vitesse de chargement, la structure du code, et le référencement. Ces recommandations ont été appliquées en modifiant le code du site, dans le but d'améliorer ses performances et son accessibilité, ce qui a contribué à un meilleur classement dans les moteurs de recherche. Pour clôturer le projet, j'ai créé un rapport détaillant les résultats avant et après les modifications. Ce rapport incluait des captures d'écran des audits, ainsi que des explications sur les changements apportés et leur impact sur le référencement et l'accessibilité du site.",
        image: photoSeo,
        competences: "SEO",
        formation: true,
        id: "2"
    },
    {
        titre:"Site de location immobilière",
        description:"Dans ce projet, j'ai implémenté le front-end d'une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive. Mon rôle a consisté à développer la logique de présentation des données et à concevoir les composants React, en exploitant cette bibliothèque JavaScript populaire pour la création d'interfaces utilisateur dynamiques. J'ai utilisé React Router pour configurer la navigation entre les différentes pages de l'application, ce qui m'a permis de maîtriser le routage dans une application web moderne et de gérer efficacement la navigation entre les vues. Le projet s'est concentré exclusivement sur le développement front-end, en me basant sur les maquettes fournies et en utilisant des données simulées extraites d'un fichier JSON. J'ai démarré le projet avec Create React App pour simplifier la configuration initiale de l'application React, et j'ai utilisé Node.js pour exécuter du code JavaScript en dehors du navigateur.",
        image: photoKasa,
        competences: "React, SASS, Node.js, JavaScript",
        formation: true,
        id: "3"
    },
    {
        titre:"Site de notation de livres",
        description:"Dans ce projet, j'ai développé le back-end d'un site de notation de livres en utilisant Express pour créer le serveur et en le connectant à une base de données MongoDB. Mon rôle a impliqué la mise en place de la structure du serveur et la gestion de la communication entre le serveur et la base de données. J'ai conçu les modèles de données et implémenté des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour la gestion des livres et des notations, en accordant une attention particulière à la sécurité des données et à leur stockage sécurisé. J'ai également mis en place un système d'authentification sécurisé pour les utilisateurs du site. Le projet a inclus la gestion du téléchargement et de l'optimisation des images, ainsi que l'ajout de fonctionnalités pour noter les livres et calculer la note moyenne. J'ai veillé à respecter les bonnes pratiques du Green Code pour minimiser l'empreinte écologique du site. Pour compléter le projet, j'ai utilisé Mongoose pour modéliser les données MongoDB et j'ai suivi une architecture MVC (Modèle-Vue-Contrôleur) pour structurer l'application de manière efficace et maintenable.",
        image: photoGrimoire,
        competences: "JavaScript, MongoDB",
        formation: true,
        id: "4"
    },
]

export default projets

export const competencesAcquises = [
    "Intégrer du contenu conformément à une maquette avec HTML et CSS",
    "Implémenter une interface responsive avec HTML et CSS",
    "Récupérer les données utilisateurs dans le JavaScript via des formulaires",
    "Manipuler les éléments du DOM avec JavaScript",
    "Gérer les événements utilisateurs avec JavaScript",
    "Optimiser les performances d’un site web",
    "Débugger un site web grâce aux Chrome DevTools",
    "Rédiger un cahier de recette pour tester un site",
    "Configurer la navigation entre les pages de l'application avec React Router",
    "Initialiser une application avec Create React App",
    "Développer des éléments de l'interface d'un site web grâce à des composants React",
    "Implémenter un modèle logique de données conformément à la réglementation",
    "Mettre en œuvre des opérations CRUD de manière sécurisée",
    "Stocker des données de manière sécurisée",
    "Suivre le déroulement du projet grâce à un outil de gestion de projet",
    "Rédiger les spécifications techniques d'un projet web à partir de besoins fonctionnels",
    "Découper une fonctionnalités en tâches pour préparer le développement",
    "Présenter la solution technique",
    "Mettre en place une méthode de veille technologique",
    "Versionner son projet avec Git et Github",
    "Installer un environnement de développement front-end",
    "Déployer un site statique en ligne",
    
]