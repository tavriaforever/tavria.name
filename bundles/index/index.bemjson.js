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
            content: 'vcard'
        }
    ]
});
