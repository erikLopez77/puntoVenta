import path from 'path';
export default {
    mode: 'development',
    entry: {
        eliminaItem: './src/js/eliminaItem.js',
        agregaItem: './src/js/agregaItem.js',
        deletePl: './src/js/deletePl.js',
        updtPl: './src/js/updtPl.js',
        cerrarSesion: './src/js/cerrarSesion.js'
    }, output: {
        filename: '[name].js',
        path: path.resolve('public/js')
    }
}