import path from 'path';
export default {
    mode: 'development',
    entry: {
        eliminaItem: './src/js/eliminaItem.js',
    }, output: {
        filename: '[name].js',
        path: path.resolve('public/js')
    }
}