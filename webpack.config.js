const webpack = require ('webpack')

//exporta o objeto de configuracao do webpack
//__dirname e uma constante do nodejs que se refere ao diretorio atual
module.exports = {
  entry: './ex/index.js',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  devServer: {
    port: 8080,
    contentBase: './public'
  }
}
