import browserSync from 'browser-sync';


browserSync({
    'files': [
        'app/**/*'
    ],
    'watchOptions': {
        'ignoreInitial': true
    },
    'server': {
        'baseDir': 'app',
    },
    'port': 9000,
    'middleware': [],
    'reloadOnRestart': false,
    'notify': false,
    'open': false
    //'open': 'local',
    //'browser': 'chrome',
});
