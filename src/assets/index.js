import videoTableauDeBord from "../videos/videoTableauDeBord.mp4"
import videoKasa from "../videos/videoKasa.mp4"
import videoMonVieuxGrimoire from "../videos/videomonvieuxgrimoire.mp4"

import jsLogo from "../images/JavaScript-logo.png"
import reactLogo from "../images/reactLogo.webp"
import nodeLogo from "../images/nodeLogo.webp"
import pythonLogo from "../images/pythonLogo.webp"
import mongoLogo from "../images/mongoLogo.webp"
import sassLogo from "../images/sassLogo.webp"
import gitLogo from "../images/git.webp"
import github from "../images/githubLogo.webp"

export const projets = [
    // {
    //     titre:"Site d'hébergement",
    //     description:"Dans ce projet, j'ai eu l'opportunité de créer la page d'accueil d'une agence de voyage en utilisant uniquement HTML et CSS. Mon objectif principal était d'intégrer une interface responsive pour le site, en suivant les maquettes fournies via Figma pour les versions mobile, tablette, et desktop. L'un des défis était d'écrire mon propre code HTML et CSS sans recourir aux outils d'exportation automatique de Figma. Cela m'a permis de mieux comprendre la structure du code et la manière d'adapter les styles pour respecter les exigences du design tout en garantissant une flexibilité sur différentes tailles d'écran. Ce projet m'a aidé à renforcer mes compétences en design responsive et m'a permis d'assurer une expérience utilisateur cohérente, peu importe le type d'appareil utilisé.",
    //     image: photoAccueil,
    //     competences: "HTML, CSS",
    //     formation: true,
    //     id: "0",
    //     lien: "https://sachaa38.github.io/siteaccueil/"
    // },
    // {
    //     titre:"Site Architecte d'interieur",
    //     description:"Dans ce projet, j'ai eu pour mission de créer une page web dynamique pour le site d'une architecte d'intérieur, en utilisant JavaScript et en interagissant avec une API. Mon rôle s'est concentré sur le développement du Front-End, en partant du HTML fourni pour construire une page de présentation des travaux de l'architecte. L'une des tâches principales était de gérer les événements utilisateurs et de manipuler les éléments du DOM grâce à JavaScript. J'ai également conçu une page de connexion dédiée à l'administrateur du site, ainsi qu'une modale permettant d'uploader de nouveaux médias. Ces fonctionnalités ont été entièrement développées from scratch, ce qui m'a permis d'approfondir mes compétences en JavaScript. Ce projet m'a offert la première opportunité d'interagir avec un code back-end pour tester les fonctionnalités, et surtout d'apprendre à communiquer avec une API, une compétence essentielle pour les applications web modernes. J'ai utilisé Figma pour accéder aux maquettes, Visual Studio Code pour le développement, et GitHub pour la gestion de version du projet, ce qui m'a permis de travailler de manière structurée et professionnelle.",
    //     image: photoSophie,
    //     competences: "HTML, JavaScript",
    //     formation: true,
    //     id: "1"
    // },

    // {
    //     titre:"Optimisation SEO du site",
    //     description:"Dans ce projet, j'ai agi en tant que développeur freelance pour optimiser le référencement, la performance et l'accessibilité d'un site web. Mon travail a commencé par l'identification des problèmes de chargement et de référencement en utilisant des outils comme Lighthouse et Wave pour évaluer les performances et l'accessibilité du site. J'ai ensuite élaboré des recommandations pour améliorer la vitesse de chargement, la structure du code, et le référencement. Ces recommandations ont été appliquées en modifiant le code du site, dans le but d'améliorer ses performances et son accessibilité, ce qui a contribué à un meilleur classement dans les moteurs de recherche. Pour clôturer le projet, j'ai créé un rapport détaillant les résultats avant et après les modifications. Ce rapport incluait des captures d'écran des audits, ainsi que des explications sur les changements apportés et leur impact sur le référencement et l'accessibilité du site.",
    //     image: photoSeo,
    //     competences: "SEO",
    //     formation: true,
    //     id: "2"
    // },
    {
        titre:"Site de location immobilière",
        description: (
          <>
            Dans ce projet, j'ai implémenté le <span style={{ color: '#2081d8', fontWeight: 'bold' }}>front-end</span> d'une <span style={{ color: '#2081d8', fontWeight: 'bold' }}>application</span> en utilisant <span style={{ color: '#2081d8', fontWeight: 'bold' }}>React</span>. Mon rôle a consisté à développer la <span style={{ color: '#2081d8', fontWeight: 'bold' }}>logique de présentation des données</span> et à concevoir les <span style={{ color: '#2081d8', fontWeight: 'bold' }}>composants React</span> pour la création d'<span style={{ color: '#2081d8', fontWeight: 'bold' }}>interfaces utilisateur dynamiques</span>. J'ai utilisé <span style={{ color: '#2081d8', fontWeight: 'bold' }}>React Router</span> pour configurer la <span style={{ color: '#2081d8', fontWeight: 'bold' }}>navigation</span> entre les différentes pages de l'application. Le projet s'est concentré exclusivement sur le développement <span style={{ color: '#2081d8', fontWeight: 'bold' }}>front-end</span>, en me basant sur les <span style={{ color: '#2081d8', fontWeight: 'bold' }}>maquettes fournies</span> et en utilisant des <span style={{ color: '#2081d8', fontWeight: 'bold' }}>données simulées</span> extraites d'un <span style={{ color: '#2081d8', fontWeight: 'bold' }}>fichier JSON</span>. J'ai démarré le projet avec <span style={{ color: '#2081d8', fontWeight: 'bold' }}>Create React App</span> pour simplifier la configuration initiale de l'application React, et j'ai utilisé <span style={{ color: '#2081d8', fontWeight: 'bold' }}>Node.js</span> pour exécuter du code JavaScript en dehors du <span style={{ color: '#2081d8', fontWeight: 'bold' }}>navigateur</span>.
          </>
        ),
        video: videoKasa,
        competences: "React, SASS, JavaScript",
        formation: true,
        desc: "Développement d'une application front-end en React avec une navigation fluide via React Router et des composants dynamiques pour une interface utilisateur moderne.",
        id: "3",
        logoComp: [reactLogo, sassLogo, gitLogo, github]

    },
    {
        titre:"Site de notation de livres",
        description: (
          <>
            Dans ce projet, j'ai développé le back-end d'un <span style={{ color: '#2081d8', fontWeight: 'bold' }}>site de notation de livres</span> en utilisant <span style={{ color: '#2081d8', fontWeight: 'bold' }}>Express</span> pour créer le serveur et en le connectant à une base de données <span style={{ color: '#2081d8', fontWeight: 'bold' }}>MongoDB</span>. Mon rôle a impliqué la mise en place de la <span style={{ color: '#2081d8', fontWeight: 'bold' }}>structure du serveur</span> et la gestion de la communication entre le serveur et la base de données. J'ai conçu les <span style={{ color: '#2081d8', fontWeight: 'bold' }}>modèles de données</span> et implémenté des opérations <span style={{ color: '#2081d8', fontWeight: 'bold' }}>CRUD</span> (Créer, Lire, Mettre à jour, Supprimer) pour la gestion des livres et des notations, en accordant une attention particulière à la <span style={{ color: '#2081d8', fontWeight: 'bold' }}>sécurité des données</span> et à leur stockage sécurisé. J'ai également mis en place un <span style={{ color: '#2081d8', fontWeight: 'bold' }}>système d'authentification sécurisé</span> pour les utilisateurs du site notamment grâce à <span style={{ color: '#2081d8', fontWeight: 'bold' }}>bcrypt</span> et <span style={{ color: '#2081d8', fontWeight: 'bold' }}>JWT</span>. Le projet a inclus la gestion du <span style={{ color: '#2081d8', fontWeight: 'bold' }}>téléchargement et de l'optimisation des images</span>, ainsi que l'ajout de fonctionnalités pour noter les livres et calculer la <span style={{ color: '#2081d8', fontWeight: 'bold' }}>note moyenne</span>. Pour compléter le projet, j'ai utilisé <span style={{ color: '#2081d8', fontWeight: 'bold' }}>Mongoose</span> pour modéliser les données MongoDB et j'ai suivi une <span style={{ color: '#2081d8', fontWeight: 'bold' }}>architecture MVC</span> (Modèle-Vue-Contrôleur) pour structurer l'application de manière efficace et maintenable.
          </>
        ),
        video: videoMonVieuxGrimoire,
        competences: "JavaScript, MongoDB",
        formation: true,
        desc: "Développement du back-end d'un site de notation de livres avec Express et MongoDB, intégrant opérations CRUD, authentification sécurisée et gestion d'images, tout en adoptant une approche Green Code et une architecture MVC.",
        id: "4",
        logoComp: [jsLogo, nodeLogo, mongoLogo, gitLogo, github]
    },
    {
      titre:"ClassTrack",
      description: (
        <>
          Dans ce projet, j'ai développé une <span style={{ color: '#2081d8', fontWeight: 'bold' }}>application web</span> pour aider une professeure de français à gérer ses <span style={{ color: '#2081d8', fontWeight: 'bold' }}>cours</span> et ses <span style={{ color: '#2081d8', fontWeight: 'bold' }}>élèves</span>. L'application, construite avec <span style={{ color: '#2081d8', fontWeight: 'bold' }}>Vite</span> et <span style={{ color: '#2081d8', fontWeight: 'bold' }}>React</span> pour le <span style={{ color: '#2081d8', fontWeight: 'bold' }}>frontend</span> et <span style={{ color: '#2081d8', fontWeight: 'bold' }}>Node.js</span> pour le <span style={{ color: '#2081d8', fontWeight: 'bold' }}>backend</span>, utilise <span style={{ color: '#2081d8', fontWeight: 'bold' }}>MongoDB</span> comme base de données. J'ai utilisé <span style={{ color: '#2081d8', fontWeight: 'bold' }}>JWT</span> pour assurer des <span style={{ color: '#2081d8', fontWeight: 'bold' }}>sessions sécurisées</span> et <span style={{ color: '#2081d8', fontWeight: 'bold' }}>bcrypt</span> pour hacher les mots de passe des utilisateurs, garantissant ainsi la <span style={{ color: '#2081d8', fontWeight: 'bold' }}>sécurité des données</span>. Le backend, construit avec <span style={{ color: '#2081d8', fontWeight: 'bold' }}>Express</span> et <span style={{ color: '#2081d8', fontWeight: 'bold' }}>Mongoose</span>, gère les opérations <span style={{ color: '#2081d8', fontWeight: 'bold' }}>CRUD</span> pour les cours et les élèves, facilitant la gestion des <span style={{ color: '#2081d8', fontWeight: 'bold' }}>relations</span> entre les entités. J'ai intégré <span style={{ color: '#2081d8', fontWeight: 'bold' }}>CORS</span> pour autoriser uniquement les requêtes sécurisées entre le frontend et le backend, protégeant l'application contre les <span style={{ color: '#2081d8', fontWeight: 'bold' }}>requêtes malveillantes</span> d'autres domaines. L'application permet l'ajout d'élèves, le suivi du nombre de cours achetés par chaque élève, ainsi que l'accès à diverses <span style={{ color: '#2081d8', fontWeight: 'bold' }}>statistiques</span> spécifiques à chaque élève. L'application inclut également des <span style={{ color: '#2081d8', fontWeight: 'bold' }}>fonctionnalités</span> pour planifier des cours et prendre des notes. L'écran d'accueil offre une vue d'ensemble de tous les élèves et des cours planifiés, avec des <span style={{ color: '#2081d8', fontWeight: 'bold' }}>liens directs</span> vers la page individuelle de chaque élève lorsqu'on clique dessus. Des statistiques générales sont également disponibles, ainsi qu'un <span style={{ color: '#2081d8', fontWeight: 'bold' }}>mode nuit</span> dans la barre supérieure de l'application pour une meilleure expérience utilisateur.
        </>
      ),
      video: videoTableauDeBord,
      competences: "React, Node.js, sass, MongoDB",
      formation: false,
      desc: "Développement d'une application web de gestion de cours pour une professeure de français, avec suivi des élèves, statistiques personnalisées et fonctionnalités de planification.",
      id: "5",
      logoComp: [reactLogo, nodeLogo, sassLogo, mongoLogo, gitLogo, github]
    }
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


export const competencesData = [
    {
      nom: "React",
      image: reactLogo,
      lieu: "Openclassroom"
    },
    {
      nom: "Node.js",
      image: nodeLogo,
      lieu: "Openclassroom"
    },
    {
      nom: "JavaScript",
      image: jsLogo,
      lieu: "Openclassroom"
    },
    {
      nom: "Python",
      image: pythonLogo,
      lieu: "Projet perso"
    },
    {
      nom: "MongoDB",
      image: mongoLogo,
      lieu: "Openclassroom"
    },
  ];