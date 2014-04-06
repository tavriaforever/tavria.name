({
    block: 'page',
    title: 'Николай Ильченко — yndx.tavria@yandex.ru',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    styles: [
        { elem: 'css', url: 'index.min.css', ie: false }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'vcard',
            content: [
                {
                    elem: 'layout',
                    attrs: { 'data-lang': 'ru' },
                    info: {
                        name: 'Николай Ильченко',
                        about: 'Фронтэнд-разработчик. С 2013 года работаю в Яндексе. Нравится выбранная профессия, люди с юмором и всевозможные «rocket science» штуки.',
                        company: 'www.yandex.ru',
                        person: {
                            email: 'yndx.tavria@yandex.ru',
                            github: 'tavriaforever',
                            twitter: 'tavriaforever',
                            habr: 'tavriaforever',
                            linkedin: 'nickolay-ilchenko/92/692/743'
                        }
                    }
                },
                {
                    elem: 'layout',
                    attrs: { 'data-lang': 'ru' },
                    info: {
                        name: 'Nikolay Ilchenko',
                        about: 'Frontend developer. Since 2013 I work in Yandex. The chosen profession, people with humour and various "rocket science" of piece is pleasant.',
                        company: 'www.yandex.ru',
                        person: {
                            email: 'yndx.tavria@yandex.ru',
                            github: 'tavriaforever'
                        }
                    }
                }
            ]
        }
    ]
});
