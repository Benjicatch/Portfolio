import { createI18n } from "vue-i18n";

const messages = {
    ENG: {
        nav: {
            home: "Home",
            about: "About Me"
        },
        home: {
            header: "Welcome to the Vue 3 I18n tutorial!",
            created_by: "This tutorial was brought to you by Lokalise."
        },
        about: {
            header: "About us"
        }
    },
    FRA: {
        nav: {
            home: "Accueil",
            about: "À propos"
        },
        home: {
            header: "Bienvenue dans le tutoriel Vue 3 I18n!",
            created_by: "Ce tutoriel vous est offert par Lokalise."
        },
        about: {
            header: "À propos de nous"
        }
    }
}

export default createI18n({
    locale:  localStorage.getItem('lang') || 'ENG', // <--- 1
    fallbackLocale: 'FRA', // <--- 2
    legacy: false, // <--- 3
    messages, // <--- 4
})
