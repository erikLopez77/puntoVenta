import path from 'path';
export default {
    mode: 'development',
    entry: {
        eliminaItem: './src/js/eliminaItem.js',
        agregaItem: './src/js/agregaItem.js'
    }, output: {
        filename: '[name].js',
        path: path.resolve('public/js')
    }
}