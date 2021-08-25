import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';

const config = {
    input: 'src/Form.js',
    output: {
        dir: 'dist',
        format: 'es'
    },
    external: ['lodash'],
    plugins: [
        babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'}),
        getBabelOutputPlugin({
            presets: ['@babel/preset-env']
        })

    ]
};

export default config;