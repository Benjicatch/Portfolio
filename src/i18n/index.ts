import { createI18n } from "vue-i18n";

const messages = {
    ENG: {
      nav: {
        home: "Home",
        about: "About Me",
        project: "Projects",
        studies: "Studies"
      },
      contact: {
        header: "Contact Me",
        description: "If you have any questions or would like to get in touch, feel free to contact me through the following methods:",
        email: "Email📧:",
        phone: "Phone☎️:",
        linkedIn: "LinkedIn:",
        github: "GitHub:"
      },
      home: {
        title: "Welcome to my Portfolio!",
        subtitle: "Experienced Developer {'|'} Backend & Fullstack {'|'} Based in Nantes",
        whoAmI: {
          title: "Who am I?",
          content: [
            "My name is <strong>Benjamin Colimard</strong>, I am a French person born in Bordeaux and I am 21 years old.",
            "Currently a 4th-year student at <strong>Epitech Nantes</strong>, my diverse experiences have allowed me to gain expertise in various fields of computer science.",
            "I am currently seeking an <strong>internship, fixed-term contract (CDD), or permanent position (CDI)</strong> with availability from Monday to Wednesday, starting 15 September 2025 until 28 February 2026."
          ]
        },
        skills: "Skills & Tools",
        whyWorkWithMe: "Why work with me?",
        whyItem1: "Passionate about clean, efficient code.",
        whyItem2: "Strong problem-solving and debugging skills.",
        whyItem3: "Collaborative team player with good communication.",
        projects: "Want to know more?",
        projectsButton: "See my projects"
      },
      projects: {
        title: "Projects",
        description: "Here are some of the projects I've worked on:",
        area: {
          title: "Area",
          description:
            "The goal was to create a web application that allows users to connect their social networks via OAuth2 and automate actions between them. For example, when a user posts a picture on Instagram, a mail is sent to his friends. The project was developed using a microservices architecture, with a front-end in React, a mobile in React-Native, a back-end in Nestjs, and a database in PostgreSQL.",
          link: "https://github.com/AlexGuillard/Area"
        },
        rType: {
          title: "RType",
          description:
            "A C++ game inspired by the R-Type game. You can play different levels, with different enemies and bosses. The game is multiplayer. You can play with your friends on different computers. There are 3 modes: multi, pvp, and multi friendly fire. The game was developed using the Raylib library.",
          link: "https://github.com/AlexGuillard/R-Type"
        },
        snake: {
          title: "Snake",
          description:
            "A C++ snake game that can be played on Linux and Windows using the Raylib library. The game features a main menu, a game over, pause, and win screen, and a settings menu. The game allows you to configure the map, the number of obstacles, and the mirror mode.",
          link: "https://github.com/Benjicatch/Snake"
        },
        Ecommerce: {
          title: "Electronic commerce system",
          description:
            "University project involving the development of an e-commerce platform that allows users to create and list their own products, as well as browse and purchase items from other users.",
          link: "https://github.com/Benjicatch/Electronic-commerce-system"
        }
      },
      studies: {
        taiwan: {
          title: "Chung Cheng University, Taiwan",
          description: "Studied at Chung Cheng University as an exchange student for 2 semesters."
        },
        internship_bordeaux: {
          title: "Internship at the Institute of Technology, Bordeaux",
          description: "Worked as a Lisp developer on a project automating the creation of virtual machines for the institute."
        },
        internship_chouic: {
          title: "Internship at Chouic, Nantes",
          description: "Developed and maintained mobile applications using React Native for the company’s products."
        },
        epitech: {
          title: "Epitech, Nantes",
          description: "Started my studies at Epitech Nantes, specializing in software development."
        },
        highschool_saint_dominique: {
          title: "High School Saint Dominique, Nantes",
          description: "Graduated with honors. Specialized in programming and mathematics as final subjects."
        },
        highschool_alfred_kastler: {
          title: "High School Alfred Kastler, Talence",
          description: "Pursued baseball sports studies while beginning programming. Focused on programming, physics-chemistry, and mathematics."
        },
        college_victor_louis: {
          title: "College Victor Louis, Talence",
          description: "Participated in baseball sports studies during my college years."
        }
      },
      about: {
        title: "👋 Hey, I'm Benjamin Colimard !",
        description_me: [
          "I am French 🇫🇷, born in Bordeaux 🍷, and I am 21 years old.",
          "I am currently in my 4th year at Epitech Nantes, a computer science school 🏫.",
          "I love programming and I'm always looking for new challenges 🚀."
        ],
        tech: "🚀 Why I Love Tech",
        description_tech: [
          "For me, programming is like a puzzle, where I have to find the right pieces to make everything work together 🧩.",
          "It allows me to build projects that can help people, and I love seeing the impact of my work on others 🌍.",
          "For these reasons, I want to work in the tech industry to continue to help people and create amazing things 🌟."
        ],
        hobbies: "✈️ My Passions and Hobbies",
        description_hobbies: [
          "I love playing video games 🎮. I play a lot of different games, but my favorite is Hollow Knight 🖤.",
          "I am also passionate about sports. I practice baseball ⚾ and a little bit of calisthenics 🏋️.",
          "I also love traveling. I have already visited several countries and am always looking for new destinations 🌍.",
          "Sometimes, I enjoy exploring new passions like chess or Blender, and see where they take me 🎨."
        ],
        randomFacts: "🎲 Random Facts",
        description_randomFacts: [
          "My favorite color is red 🔴, and my favorite number is 🔟.",
          "I know how to play mahjong 🀄 and I am a big fan of the game.",
          "I love playing laser tag 🔫, I think it's a great way to have fun with friends.",
          "I have trouble remembering names, but I never forget a face 🤔."
        ]
      }
    },
    FRA: {
      nav: {
        home: "Accueil",
        about: "À propos",
        project: "Projets",
        studies: "Études"
      },
      contact: {
        header: "Contactez-moi",
        description: "Si vous avez des questions ou souhaitez entrer en contact, n'hésitez pas à me contacter par les moyens suivants :",
        email: "Email📧:",
        phone: "Téléphone☎️:",
        linkedIn: "LinkedIn:",
        github: "GitHub:"
      },
      home: {
        title: "Bienvenue sur mon Portfolio!",
        subtitle: "Développeur expérimenté {'|'} Backend & Fullstack {'|'} Basé à Nantes",
        whoAmI: {
          title: "Qui suis-je?",
          content: [
            "Je m'appelle <strong>Benjamin Colimard</strong>, je suis un Français né à Bordeaux et j'ai 21 ans.",
            "Actuellement étudiant en 4ème année à <strong>Epitech Nantes</strong>, mes diverses expériences m'ont permis d'acquérir des compétences dans différents domaines de l'informatique.",
            "Je suis actuellement à la recherche d'un <strong>stage, contrat à durée déterminée (CDD) ou contrat à durée indéterminée (CDI)</strong> avec une disponibilité du lundi au mercredi, du 15 septembre 2025 au 28 février 2026."
          ]
        },
        skills: "Compétences et outils",
        whyWorkWithMe: "Pourquoi travailler avec moi?",
        whyItem1: "Passionné par le code propre et efficace.",
        whyItem2: "Solides compétences en résolution de problèmes et en débogage.",
        whyItem3: "Travailleur d'équipe collaboratif avec une bonne communication.",
        projects: "Vous voulez en savoir plus ?",
        projectsButton: "Voir mes projets"
      },
      projects: {
        title: "Projets",
        description: "Voici quelques-uns des projets sur lesquels j'ai travaillé :",
        area: {
          title: "Area",
          description:
            "L'objectif était de créer une application web permettant aux utilisateurs de connecter leurs réseaux sociaux via OAuth2 et d'automatiser des actions entre eux. Par exemple, lorsqu'un utilisateur publie une photo sur Instagram, un mail est envoyé à ses amis. Le projet a été développé en utilisant une architecture microservices, avec un front-end en React, une application mobile en React-Native, un back-end en Nestjs et une base de données PostgreSQL.",
          link: "https://github.com/AlexGuillard/Area"
        },
        rType: {
          title: "RType",
          description:
            "Un jeu C++ inspiré du jeu R-Type. Vous pouvez jouer à différents niveaux, avec différents ennemis et boss. Le jeu est multijoueur. Vous pouvez jouer avec vos amis sur différents ordinateurs. Il y a 3 modes : multi, pvp, et multi friendly fire. Le jeu a été développé en utilisant la bibliothèque Raylib.",
          link: "https://github.com/AlexGuillard/R-Type"
        },
        snake: {
          title: "Snake",
          description:
            "Un jeu de serpent en C++ jouable sur Linux et Windows à l'aide de la bibliothèque Raylib. Le jeu propose un menu principal, un écran de fin de partie, de pause et de victoire, ainsi qu'un menu de paramètres. Le jeu permet de configurer la carte, le nombre d'obstacles et le mode miroir.",
          link: "https://github.com/Benjicatch/Snake"
        },
        Ecommerce: {
          title: "Electronic commerce system",
          description:
            "Projet universitaire impliquant le développement d'une plateforme de commerce électronique qui permet aux utilisateurs de créer et de référencer leurs propres produits, ainsi que de naviguer et d'acheter des articles auprès d'autres utilisateurs.",
          link: "https://github.com/Benjicatch/Electronic-commerce-system"
        }
      },
      studies: {
        taiwan: {
          title: "Université Chung Cheng, Taïwan",
          description: "Étudié à l'Université Chung Cheng en tant qu'étudiant d'échange pendant 2 semestres."
        },
        internship_bordeaux: {
          title: "Stage à l'Institut de Technologie, Bordeaux",
          description: "Travaillé en tant que développeur Lisp sur un projet automatisant la création de machines virtuelles pour l'institut."
        },
        internship_chouic: {
          title: "Stage chez Chouic, Nantes",
          description: "Développé et maintenu des applications mobiles en utilisant React Native pour les produits de l'entreprise."
        },
        epitech: {
          title: "Epitech, Nantes",
          description: "J'ai commencé mes études à Epitech Nantes, en me spécialisant dans le développement logiciel."
        },
        highschool_saint_dominique: {
          title: "Lycée Saint Dominique, Nantes",
          description: "Diplômé avec mention. Spécialisé en programmation et mathématiques comme spécialités."
        },
        highschool_alfred_kastler: {
          title: "Lycée Alfred Kastler, Talence",
          description: "A suivi des études sportives en baseball tout en commençant la programmation. Axé sur la programmation, la physique-chimie et les mathématiques."
        },
        college_victor_louis: {
          title: "Collège Victor Louis, Talence",
          description: "A participé à des études sportives en baseball pendant mes années de collège."
        }
      },
        about: {
            title: "👋 Salut, je m'appelle Benjamin Colimard !",
            description_me: [
            "Je suis Français 🇫🇷, né à Bordeaux 🍷, et j'ai 21 ans.",
            "Je suis actuellement en 4ème année à Epitech Nantes, une école d'informatique 🏫.",
            "J'adore programmer et je suis toujours à la recherche de nouveaux défis 🚀."
            ],
            tech: "🚀 Pourquoi j'aime la Tech",
            description_tech: [
            "Pour moi, la programmation est comme un puzzle, où je dois trouver les bonnes pièces pour que tout fonctionne ensemble 🧩.",
            "Cela me permet de construire des projets qui peuvent aider les gens, et j'adore voir l'impact de mon travail sur les autres 🌍.",
            "Pour ces raisons, je veux travailler dans l'industrie de la tech pour continuer à aider les gens et créer des choses incroyables 🌟."
            ],
            hobbies: "✈️ Mes Passions et Loisirs",
            description_hobbies: [
            "J'adore jouer aux jeux vidéo 🎮. Je joue à beaucoup de jeux différents, mais mon préféré est Hollow Knight 🖤.",
            "Je suis aussi passionné par le sport. Je pratique le baseball ⚾ et un peu de calisthénie 🏋️.",
            "J'aime aussi voyager. J'ai déjà visité plusieurs pays et je suis toujours à la recherche de nouvelles destinations 🌍.",
            "Parfois, j'aime explorer de nouvelles passions comme les échecs ou Blender, et voir où elles me mènent 🎨."
            ],
            randomFacts: "🎲 Faits Aléatoires",
            description_randomFacts: [
            "Ma couleur préférée est le rouge 🔴, et mon chiffre préféré est 🔟.",
            "Je sais jouer au mahjong 🀄 et je suis un grand fan du jeu.",
            "J'adore jouer au laser tag 🔫, je pense que c'est un excellent moyen de s'amuser avec des amis.",
            "J'ai du mal à me souvenir des noms, mais je n'oublie jamais un visage 🤔."
            ]
        }
    }
};

export default createI18n({
    locale: localStorage.getItem('lang') || 'FRA', // <--- 1
    fallbackLocale: 'ENG', // <--- 2
    legacy: false, // <--- 3
    messages, // <--- 4
});
