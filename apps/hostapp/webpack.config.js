const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
    /* mapped paths to share */
    '@kict/mf/mfe-shared'
]);

module.exports = {
    output: {
        uniqueName: 'hostapp',
        publicPath: 'auto',
    },
    optimization: {
        runtimeChunk: false,
        minimize: false,
    },
    resolve: {
        alias: {
            ...sharedMappings.getAliases(),
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            remotes: {
                // panel2: 'panel2@http://localhost:4202/remoteEntry.js',
                // panel1: 'panel1@http://localhost:4201/remoteEntry.js',
            },
            shared: {
                '@angular/core': { singleton: true, strictVersion: true },
                '@angular/common': { singleton: true, strictVersion: true },
                '@angular/common/http': {
                    singleton: true,
                    strictVersion: true,
                },
                '@angular/forms': {
                  singleton: true,
                  strictVersion: true,
                },
                '@angular/router': { singleton: true, strictVersion: true },
                ...sharedMappings.getDescriptors(),
            },
        }),
        sharedMappings.getPlugin(),
    ],

};
