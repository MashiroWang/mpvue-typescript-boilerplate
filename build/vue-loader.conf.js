var utils = require('./utils')
var config = require('../config')
// var isProduction = process.env.NODE_ENV === 'production'
// for mp
var isProduction = true

// module.exports = {
//   loaders: utils.cssLoaders({
//     sourceMap: isProduction
//       ? config.build.productionSourceMap
//       : config.dev.cssSourceMap,
//     extract: isProduction
//   }),
//   transformToRequire: {
//     video: 'src',
//     source: 'src',
//     img: 'src',
//     image: 'xlink:href'
//   }
// }


module.exports = {
  loaders: Object.assign(utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }), {
    ts: [
      'babel-loader',
      {
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true
        }
      }
    ]
    }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
