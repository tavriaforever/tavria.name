({
    block: 'page',
    title: 'Title of the page',
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
                    elem: 'switch-hidden',
                    attrs: { id: 'vcard-ru' }
                },
                {
                    elem: 'switch-hidden',
                    attrs: { id: 'vcard-en' }
                },
                {
                    elem: 'switch',
                    content: [
                        {
                            elem: 'switch-link',
                            url: '#vcard-ru',
                            content: 'ru'
                        },
                        {
                            elem: 'switch-link',
                            url: '#vcard-en',
                            content: 'en'
                        }
                    ]
                },
                {
                    elem: 'content',
                    elemMods: { lang: 'ru' },
                    content: [
                        {
                           elem: 'text',
                           content: [
                                {
                                    elem: 'logo'
                                },
                                {
                                    elem: 'info',
                                    content: [
                                        {
                                            elem: 'name',
                                            content: 'Николай Ильченко'
                                        }
                                    ]
                                }
                           ]
                        },
                        {
                            elem: 'arrow'
                        }
                    ]
                },
                {
                    elem: 'content',
                    elemMods: { lang: 'en' },
                    content: [
                        {
                           elem: 'info',
                           content: 'some text in en'
                        },
                        {
                            elem: 'arrow'
                        }
                    ]
                }
            ]
        }
    ]
});
