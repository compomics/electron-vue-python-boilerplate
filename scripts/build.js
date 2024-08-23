const Path = require('path');
const Chalk = require('chalk');
const FileSystem = require('fs');
const Vite = require('vite');
const fs = require('fs')

// const compileTs = require('./private/tsc');
const SRC_ROOT = Path.join(__dirname, '..', 'src')
if(fs.existsSync(Path.join(SRC_ROOT, 'frontend', 'vite.config.js'))) {
    console.log("yes")
} else {
    console.log("no")
}
// /Users/natalia/workspace/electron-vue-python-boilerplate/src/frontend/vite.config.js
// /Users/natalia/workspace/electron-vue-python-boilerplate/src/frontend/vite.config.js

function buildFrontend() {
    console.log(__dirname)
    console.log(SRC_ROOT)
    console.log(Path.join(SRC_ROOT, 'frontend', 'vite.config.js'))
    return Vite.build({
        configFile: '../frontend/vite.config.js',
        // configFile: Path.join(SRC_ROOT, 'frontend', 'vite.config.js'),
        mode: 'production'
    });
}

function buildBackend() {
    const backendPath = Path.join(SRC_ROOT, 'backend');
    process.chdir(backendPath)
    var exec = require('child_process').exec;

    exec('pyinstaller --onefile --path=..\/..\/electron-vue-python-boilerplate\/lib/python3.12/site-packages --distpath=..\/..\/build\/backend src\/main.py',
        function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
}


FileSystem.rmSync(Path.join(__dirname, '..', 'build'), {
    recursive: true,
    force: true,
})

Promise.allSettled([
    buildFrontend(),
    // buildElectron(),
    buildBackend()
]).then(() => {
    console.log(Chalk.greenBright('Frontend & Electron & Backend successfully transpiled! (ready to be built with electron-builder)'));
});