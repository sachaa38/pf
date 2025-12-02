import videoTableauDeBord from "../videos/videoTableauDeBord.mp4"
import videoRusse from "../videos/videoRusse.mp4"
import videoMonVieuxGrimoire from "../videos/videomonvieuxgrimoire.mp4"
import videoCoinCalculator from "../videos/coinCalculator.mp4"
import videoJusticeBalance from "../videos/justiceBalance.mp4"
import jsLogo from "../images/JavaScript-logo.png"
import reactLogo from "../images/reactLogo.webp"
import nodeLogo from "../images/nodeLogo.webp"
import pythonLogo from "../images/pythonLogo.webp"
import mongoLogo from "../images/mongoLogo.webp"
import sassLogo from "../images/sassLogo.webp"
import gitLogo from "../images/git.webp"
import github from "../images/githubLogo.webp"
import rnLogo from "../images/reactN-logo.svg"
import tsLogo from "../images/tsLogo.webp"
import expoLogo from "../images/expoLogo.png"

export const projets = [
  {
    titre: "Application mobile d'apprentissage du russe",
    description:
        "J'ai développé une application mobile d'apprentissage du russe en utilisant React Native avec Expo. Cette application multilingue (français et anglais) propose un parcours structuré autour de leçons de vocabulaire, de grammaire, et d'exercices pratiques. Une section dédiée au vocabulaire permet de revoir l'essentiel, tandis qu'une page de paramètres permet de réinitialiser sa progression. J'ai utilisé la bibliothèque React Native Paper pour un design cohérent et accessible. L'application intègre également de la monétisation via des publicités, et exploite le stockage local pour sauvegarder les données de progression de l'utilisateur.",
    video: videoRusse, // à remplacer par le bon lien vidéo si tu en as un
    competences: "React Native, Expo, TypeScript, React Native Paper, AsyncStorage",
    formation: false,
    desc: "Application mobile éducative pour l'apprentissage du russe, avec gestion de la progression utilisateur, interface multilingue et intégration publicitaire.",
    id: "4",
    obj: ["Projet personnel", "Créer une application éducative mobile complète"],
    tache: [
        "Développement des interfaces avec React Native Paper",
        "Organisation des leçons en modules (vocabulaire, grammaire, exercices)",
        "Mise en place d’une navigation fluide avec React Navigation",
        "Stockage local de la progression via AsyncStorage",
        "Ajout de la monétisation avec AdMob"
    ],
    fonction: [
        "Consulter et apprendre du vocabulaire russe",
        "Suivre des leçons structurées avec exercices intégrés",
        "Basculer entre le français et l’anglais",
        "Réinitialiser sa progression à tout moment"
    ],
    logoComp: [reactLogo, expoLogo, tsLogo], // mets les bons logos ici
    lien: "https://play.google.com/store/apps/details?id=com.pipou38.testPub"
}
,
    {
        titre:"Site de notation de livres",
        description:
            "Dans ce projet, j'ai développé le back-end d'un site de notation de livres en utilisant Express pour créer le serveur et en le connectant à une base de données MongoDB. Mon rôle a impliqué la mise en place de la structure du serveur et la gestion de la communication entre le serveur et la base de données. J'ai conçu les modèles de données et implémenté des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour la gestion des livres et des notations, en accordant une attention particulière à la sécurité des données et à leur stockage sécurisé. J'ai également mis en place un système d'authentification sécurisé pour les utilisateurs du site notamment grâce à bcrypt et JWT. Le projet a inclus la gestion du téléchargement et de l'optimisation des images, ainsi que l'ajout de fonctionnalités pour noter les livres et calculer la note moyenne. Pour compléter le projet, j'ai utilisé Mongoose pour modéliser les données MongoDB et j'ai suivi une architecture MVC (Modèle-Vue-Contrôleur) pour structurer l'application de manière efficace et maintenable.",
        video: videoMonVieuxGrimoire,
        competences: "JavaScript, MongoDB",
        formation: true,
        desc: "Développement du back-end d'un site de notation de livres avec Express et MongoDB, intégrant opérations CRUD, authentification sécurisée et gestion d'images, tout en adoptant une approche Green Code et une architecture MVC.",
        id: "4",
        obj: ["Projet Openclassroom", "Développement du backend d'un site de notation de livre"],
        tache : ["Création d'un serveur avec Express et connexion à MongoDB","Gestion de la communication entre le serveur et la base de données","Conception des modèles de données avec Mongoose","Implémentation des opérations CRUD","Sécurisation des données et stockage sécurisé","Mise en place d’un système d'authentification avec bcrypt et JWT","Gestion du téléchargement et optimisation des images","Ajout des fonctionnalités pour noter les livres et calculer la note moyenne"],
        fonction: ["Ajouter, modifier et supprimer des livres","Afficher les informations détaillées de chaque livres", "Noter les livres", "Consulter les trois livres les mieux notés"],
        logoComp: [jsLogo, nodeLogo, mongoLogo, gitLogo, github],
        lien: "https://github.com/sachaa38/backend.git"
    },
    {
      titre:"ClassTrack",
      description: 
        "Dans ce projet, j'ai développé une application web pour aider une professeure de français à gérer ses cours et ses élèves. L'application, construite avec Vite et React pour le frontend et Node.js pour le backend, utilise MongoDB comme base de données. J'ai utilisé JWT pour assurer des sessions sécurisées et bcrypt pour hacher les mots de passe des utilisateurs, garantissant ainsi la sécurité des données. Le backend, construit avec Express et Mongoose, gère les opérations CRUD pour les cours et les élèves, facilitant la gestion des relations entre les entités. J'ai intégré CORS pour autoriser uniquement les requêtes sécurisées entre le frontend et le backend, protégeant l'application contre les requêtes malveillantes d'autres domaines. L'application permet l'ajout d'élèves, le suivi du nombre de cours achetés par chaque élève, ainsi que l'accès à diverses statistiques spécifiques à chaque élève. L'application inclut également des fonctionnalités pour planifier des cours et prendre des notes. L'écran d'accueil offre une vue d'ensemble de tous les élèves et des cours planifiés, avec des liens directs vers la page individuelle de chaque élève lorsqu'on clique dessus. Des statistiques générales sont également disponibles, ainsi qu'un mode nuit dans la barre supérieure de l'application pour une meilleure expérience utilisateur."
      ,
      video: videoTableauDeBord,
      competences: "React, Node.js, sass, MongoDB",
      formation: false,
      desc: "Développement d'une application web de gestion de cours pour une professeure de français, avec suivi des élèves, statistiques personnalisées et fonctionnalités de planification.",
      id: "5",
      obj: ["Projet perso", "Développement d'une application web de gestion de cours"],
      tache: ["Création du frontend avec Vite et React", "Création du backend avec Node.js, Express et Mongoose","Mise en place d’un système d'authentification avec bcrypt et JWT","Gestion des opérations CRUD","Intégration de CORS"],
      fonction: ["Ajouter des élèves et gérer leurs informations","Suivre le nombre de cours achetés par chaque élève","Accéder à des statistiques spécifiques pour chaque élève","Planifier des cours et prendre des notes","Afficher les statistiques générales","Implémentation d'un mode nuit"],
      logoComp: [reactLogo, nodeLogo, sassLogo, mongoLogo, gitLogo, github],
        lien: "https://github.com/sachaa38/appliElevefront.git et https://github.com/sachaa38/appliEleve.git"
    },
    {
      titre:"EcoApp",
      description:
          "",
      video:videoCoinCalculator,
      competences: "React Native, Expo, TypeScript",
      formation: true,
      desc: "Création d'une application mobile pour la gestion des finances personnelles avec suivi des revenus et des dépenses, sauvegarde locale, et interface utilisateur ergonomique.",
      id: "6",
      obj: ["Projet perso", "Développement d'une application mobile pour la gestion financière"],
      tache : ["Création de l'interface utilisateur avec React Native et Expo",
  "Mise en place de la navigation avec Expo Router",
  "Sauvegarde des données avec AsyncStorage",
  "Gestion des revenus et des dépenses via des modales interactives",
  "Affichage des statistiques financières et des graphiques"],
      fonction: ["Ajouter les prévisions de dépenses","Ajouter et modifier des revenus",
  "Enregistrer et catégoriser des dépenses",
  "Afficher le solde restant et les totaux",
  "Visualiser la répartition des dépenses sous forme de graphiques",
  "Naviguer entre les différentes fonctionnalités via un menu ergonomique"],
      logoComp: [rnLogo, expoLogo, tsLogo],
      lien: "https://github.com/sachaa38/ecoApp.git"
  },
  {
    titre:"Justice Balance",
    description:
        "",
    video:videoJusticeBalance,
    competences: "React Native, Expo, TypeScript",
    formation: true,
    desc: "Création d'un jeu mobile dans lequel le joueur incarne un juge. Le but est de juger les accusés et de devenir soit un tyran, soit un bienfaiteur.",
    id: "7",
    obj: ["Projet perso", "Développement d'un jeu mobile."],
    tache : ["Création de l'interface utilisateur avec React Native et Expo",
"Mise en place des différentes modales",
"Gestion du fonctionnement du jeu",
"Influence des différentes statistiques sur les autres statistiques",
"Prise en compte des boutons et sliders et leurs effets dans le jeu",
"Sauvegarde des données avec AsyncStorage",
"Affichage dynamique des statistiques",
"Affichage des personnages"],
    fonction: ["Juger les accusés",
"Influencer les différentes sphères du jeu",
"Modifier les lois",
"Construire des bâtiments",
"Devenir tyran ou bienfaiteur qui offre 2 fins différentes"],
    logoComp: [rnLogo, expoLogo, tsLogo],
    lien: "Lien privé"
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
    { nom: "React Native",
      image: rnLogo,
      lieu: "Perso"
    },
    { nom: "Typescript",
      image: tsLogo,
      lieu: "Perso"
    },
    { nom: "Expo",
      image: expoLogo,
      lieu: "Perso"
    },
  ];
