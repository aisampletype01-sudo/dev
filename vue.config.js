// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/dev/'
//     : '/'
// }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
    ? './' 
    : './'
};