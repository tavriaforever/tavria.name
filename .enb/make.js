module.exports = function(config) {
    config.node('bundles/index', function(nodeConfig) {
        nodeConfig.addTechs([
            use('levels', { levels: getLevels(config) }),
            use('files'),
            use('provider', { target: '?.bemjson.js' }),
            use('bemdecl'),
            use('deps'),
            use('roole', { target: '?.noprefix.css' }),
            use('autoprefixer', {
                browserSupport: ['last 2 versions', 'last 3 Chrome versions'],
                sourceTarget: '?.noprefix.css'
            }),
            use('js', { target: '?.pre.js' } ),
            use('modules', { target: '?.js', source: '?.pre.js' }),
            use('bemhtml'),
            use('html')
        ]);

        nodeConfig.addTargets(['?.min.js', '?.min.css', '?.html']);
    });

    // Псевдообработка финальных файлов, получившихся в результате сборки:
    // копируем файлы, добавляя префикс `min`
    config.mode('development', function() {
        config.nodes('bundles/index', function(nodeConfig) {
            nodeConfig.addTechs([
                use('copy', { sourceTarget: '?.css', destTarget: '?.min.css' }),
                use('copy', { sourceTarget: '?.js', destTarget: '?.min.js' })
            ]);
        });
    });

    config.mode('production', function() {
        config.nodes('bundles/index', function(nodeConfig) {
            nodeConfig.addTechs([
                use('borschik', { sourceTarget: '?.css', destTarget: '?.min.css', minify: true, freeze: true }),
                use('borschik', { sourceTarget: '?.js', destTarget: '?.min.js', minify: true, freeze: true })
            ]);
        });
    });
};

// Хэш технологий
var techs = {
    levels          : require('enb/techs/levels'),
    files           : require('enb/techs/files'),
    provider        : require('enb/techs/file-provider'),
    copy            : require('enb/techs/file-copy'),
    bemdecl         : require('enb/techs/bemdecl-from-bemjson'),
    deps            : require('enb/techs/deps'),
    roole           : require('enb-roole/techs/css-roole'),
    autoprefixer    : require('enb-autoprefixer/techs/css-autoprefixer'),
    js              : require('enb-diverse-js/techs/browser-js'),
    modules         : require('enb-modules/techs/prepend-modules'),
    bemhtml         : require('enb-bemxjst/techs/bemhtml-old'),
    html			: require('enb/techs/html-from-bemjson'),
    borschik        : require('enb/techs/borschik')
};

/**
 * Возвращает объект-технологию для `nodeConfig`
 *
 * @param {String} tech название технологии
 * @param {Object} params параметры для технологии
 * @returns {*[]}
 */
function use(tech, params) {
    return [
        techs[tech],
        params || {}
    ];
}


function getLevels(config) {
  return [
	{ path: 'libs/bem-core/common.blocks', check: false },
	{ path: 'libs/bem-core/desktop.blocks', check: false },
	'blocks'
  ].map(function(levelPath) { return config.resolvePath(levelPath); });
}
