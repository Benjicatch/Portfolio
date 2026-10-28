export default {
  nav: {
    home: "Accueil",
    about: "À propos",
    project: "Projets",
    studies: "Études",
    downloadCV: "Télécharger le CV",
  },
  contact: {
    header: "Contactez-moi",
    description: "Si vous avez des questions ou souhaitez entrer en contact, n'hésitez pas à me contacter par les moyens suivants :",
    email: "Email📧:",
    phone: "Téléphone☎️:",
    linkedIn: "LinkedIn:",
    github: "GitHub:",
  },
  home: {
    title: "Bienvenue sur mon Portfolio !",
    subtitle: "Ingénieur Backend & DevOps {'|'} Ouvert aux opportunités",
    downloadCV: "Télécharger mon CV (PDF)",
    whoAmI: {
      title: "Qui suis-je ?",
      content: [
        "Je m'appelle <strong>Benjamin Colimard</strong>, développeur et étudiant en 5ᵉ année à <strong>Epitech Nantes</strong>, diplômé en 2026.",
        "J'ai récemment terminé un <strong>stage DevOps chez Groupe SII</strong> à Nantes, où j'ai conçu une plateforme automatisée de contrôle de flux pour valider la disponibilité des VMs avant déploiement en production, et automatisé le déploiement et la montée de version de <strong>Squash</strong> et <strong>Nexus</strong> en environnements standalone et HA.",
        "Je suis désormais <strong>activement à la recherche d'opportunités</strong>, où j'aimerais contribuer à des projets backend et DevOps au sein d'une équipe internationale.",
      ],
    },
    skills: "Compétences et outils",
    skillsDevelopment: "Langages & frameworks",
    skillsDevops: "DevOps",
    skillsTools: "Bases de données & outils",
    whyWorkWithMe: "Pourquoi travailler avec moi ?",
    whyItems: [
      "4 projets complets livrés couvrant backend, frontend, mobile et DevOps (Area, R-Type, Snake, E-commerce).",
      "Expérience polyglotte rare : C/C++, TypeScript, Python, Lisp et Elixir — capable de choisir le bon outil pour chaque problème.",
      "Travail concret sur CI/CD et infrastructure chez Groupe SII : pipelines Jenkins, gestion de configuration Ansible, gestion de sources avec GitLab, et montées de version automatisées sans interruption de service de Squash et Nexus.",
      "Expérience internationale : deux semestres d'échange à l'Université Chung Cheng, Taïwan — déjà familier avec l'environnement local.",
    ],
    projects: "Vous voulez en savoir plus ?",
    projectsButton: "Voir mes projets",
  },
  projects: {
    title: "Projets",
    description: "Voici quelques-uns des projets sur lesquels j'ai travaillé :",
    learnMore: "En savoir plus",
    labels: {
      year: "Année",
      role: "Rôle",
      team: "Équipe",
      stack: "Stack",
    },
    area: {
      title: "Area",
      description:
        "Une application web & mobile permettant de connecter ses réseaux sociaux via OAuth2 et d'automatiser des actions entre eux (ex. publier une photo sur Instagram → un mail est envoyé aux amis). Architecture microservices : front-end React, mobile React Native, back-end NestJS, base PostgreSQL.",
        link: "https://github.com/AlexGuillard/Area",
    },
    rType: {
      title: "R-Type",
      description:
        "Un jeu multijoueur en C++ inspiré de R-Type. Plusieurs niveaux avec ennemis et boss distincts, jouable sur plusieurs machines avec trois modes : multi, PvP et multi friendly-fire. Développé avec la bibliothèque Raylib.",
        link: "https://github.com/AlexGuillard/R-Type",
    },
    snake: {
      title: "Snake",
      description:
        "Un jeu de serpent en C++ multi-plateforme (Linux & Windows) avec Raylib. Menu principal, pause, game-over et victoire, menu de paramètres, carte / nombre d'obstacles / mode miroir configurables.",
        link: "https://github.com/Benjicatch/Snake",
    },
    Ecommerce: {
      title: "Système de commerce électronique",
      description:
        "Projet universitaire : une plateforme e-commerce permettant aux utilisateurs de créer et référencer leurs propres produits, ainsi que de parcourir et acheter les articles d'autres utilisateurs.",
        link: "https://github.com/Benjicatch/Electronic-commerce-system",
    },
  },
  studies: {
    taiwan: {
      title: "Université Chung Cheng, Taïwan",
      description: "Étudiant d'échange pendant 2 semestres — cours internationaux en informatique.",
    },
    internship_sii: {
    title: "Développeur DevOps — Groupe SII, Nantes",
    description: "Développement d'une plateforme automatisée de validation des VMs avant production, automatisation des montées de version sans interruption de Squash et Nexus, et travail avec Jenkins, Ansible et GitLab.",
    },
    internship_simul: {
      title: "Développeur Elixir — Simul'Impact, Nantes",
      description: "Contribution à l'outil de simulation de l'entreprise, optimisation de l'expérience utilisateur et des algorithmes sous-jacents en Elixir.",
    },
    internship_bordeaux: {
      title: "Développeur Lisp — Institut de Technologie, Bordeaux",
      description: "Automatisation de la création de machines virtuelles pour l'institut, en Lisp.",
    },
    internship_chouic: {
      title: "Développeur mobile — Chouic, Nantes",
      description: "Développement et maintenance d'applications mobiles React Native pour les produits de l'entreprise.",
    },
    epitech: {
      title: "Epitech, Nantes",
      description: "Diplôme d'ingénieur en développement logiciel — 5ᵉ année, diplômé en 2026.",
    },
    highschool_saint_dominique: {
      title: "Lycée Saint Dominique, Nantes",
      description: "Diplômé avec mention. Spécialités programmation et mathématiques.",
    },
    highschool_alfred_kastler: {
      title: "Lycée Alfred Kastler, Talence",
      description: "Section sportive baseball et initiation à la programmation. Spécialités : programmation, physique-chimie, mathématiques.",
    },
    college_victor_louis: {
      title: "Collège Victor Louis, Talence",
      description: "Section sportive baseball pendant les années collège.",
    },
  },
  about: {
    title: "👋 Salut, je m'appelle Benjamin !",
    description_me: [
      "J'ai 22 ans, je suis Français et je suis né à Bordeaux 🍷.",
      "Je suis actuellement en 5ᵉ année à Epitech Nantes, une école d'informatique 🏫.",
      "Je suis passionné par la programmation et toujours à la recherche de nouveaux défis 🚀.",
    ],
    tech: "🚀 Pourquoi j'aime la tech",
    description_tech: [
      "Pour moi, programmer, c'est comme résoudre un puzzle — trouver les bonnes pièces pour que tout fonctionne ensemble 🧩.",
      "Cela me permet de créer des projets utiles et d'avoir un impact réel sur les autres 🌍.",
      "C'est pour ces raisons que je veux travailler dans la tech et continuer à créer des choses innovantes et passionnantes 🌟.",
    ],
    hobbies: "✈️ Mes passions et loisirs",
    description_hobbies: [
      "J'adore les jeux vidéo. Je joue à beaucoup de styles différents, mais mon préféré est Hollow Knight 🖤.",
      "Je suis aussi passionné de sport — je pratique le baseball ⚾ et un peu de callisthénie.",
      "J'aime voyager, découvrir de nouveaux pays et explorer différentes cultures 🌍.",
      "J'aime aussi tester de nouvelles passions comme les échecs ou Blender, juste pour voir où cela me mène 🎨.",
    ],
    randomFacts: "🎲 Fun facts",
    description_randomFacts: [
      "Ma couleur préférée est le rouge et mon nombre préféré est le 10 🔟.",
      "Je sais jouer au mahjong 🀄 et j'en suis un grand fan.",
      "J'adore jouer au laser game 🔫 — c'est l'une de mes activités préférées entre amis.",
      "J'ai du mal à retenir les prénoms, mais je n'oublie jamais un visage 🤔.",
    ],
  },
};
