fis.config.set('settings.optimizer.png-compressor.type', 'pngquant');

fis.config.set('settings.spriter.csssprites.layout', 'matrix');

fis.config.set('modules.parser.less', 'less');

fis.config.merge({
    roadmap : {
        ext : {
            jsx : 'js'
        }
    }
});

// es6 编译 npm install -g fis-parser-babel-5.x
fis.config.set('modules.parser.js', 'babel-5.x');
fis.config.set('modules.parser.jsx', 'babel-5.x');

fis.config.set('ettings.parser.babel-5.x', {
    blacklist: ['regenerator'],
    stage: 3
});

fis.config.get('roadmap.path').unshift({
    reg : /^\/static\/(html\/.*|swf\/.*|xml\/.*)$/i,
    useHash : true,
    useDomain : false,
    useBabel: false,
    release : '/static/${namespace}/$1'
});
fis.config.get('roadmap.path').unshift({
    reg : /^\/static\/item\/(js\/.*|css\/.*)$/i,
    useHash : false,
    useDomain : false,
    useBabel: false,
    release : '/static/${namespace}/item/$1'
});
fis.config.get('roadmap.path').unshift({
    reg: /^\/widget\/(.*)\.(js)$/i,
    isMod: true,
    useBabel: false,
    release: '${statics}/${namespace}/widget/$1.js'
});

fis.config.get('roadmap.path').unshift({
    reg: /^\/widget\/message\/(.*)\.(es6.js|jsx)$/i,
    isMod: true,
    useBabel: true,
    release: '${statics}/${namespace}/widget/$1.js'
});


fis.config.merge({
    namespace : 'y',
    project : { charset : 'utf8' },
    pack : {
        'static/pkg/module.css' : [
            'widget/**.less',
            'widget/**.css'
        ],
        'static/pkg/module.js' : [
            'widget/**.js'
        ]
    },
    settings: {
        spriter: {
            csssprites: {
                //图之间的边距
                margin: 5
            }
        }
    }
});

//使用project.exclude排除某些后缀
//svn、cvs不用管，默认就排除了的
fis.config.set('project.exclude', /\.(tar|rar|psd|jar)$/i);
