({
    block: 'b-page',
    title: 'Николай Ильченко — yndx.tavria@yandex.ru',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'index.css' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'index.js' }
    ],
    i18n: { langs: ['ru', 'en'], lang: 'ru' },
    content: {
        block: 'b-card',
        mods: { lang: 'ru' },
        content: [
            {
                block: 'b-card-layout',
                lang: 'ru',
                info: {
                    name: 'Николай Ильченко',
                    about: 'Фронтэнд-разработчик. С 2013 года работаю в Яндексе. Нравится выбранная профессия, люди с юмором и всевозможные «rocket science» штуки.',
                    company: {
                        site: 'www.yandex.ru'
                    },
                    person: {
                        email: 'yndx.tavria@yandex.ru',
                        github: 'tavriaforever',
                        twitter: 'tavriaforever',
                        habr: 'tavriaforever'
                    }
                }
            },
            {
                block: 'b-card-layout',
                lang: 'en',
                info: {
                    name: 'Nikolay Ilchenko',
                    about: 'Frontend developer. Since 2013 I work in Yandex. The chosen profession, people with humour and various "rocket science" of piece is pleasant.',
                    company: {
                        site: 'www.yandex.com'
                    },
                    person: {
                        email: 'yndx.tavria@yandex.ru',
                        github: 'tavriaforever',
                        twitter: 'tavriaforever',
                        habr: 'tavriaforever'
                    }
                }
            },
            {
                block: 'b-powered',
                tag: 'a',
                attrs: { href: 'http://bem.info' },
                content: 'Built with BEM'
            }
        ]
    }
})
