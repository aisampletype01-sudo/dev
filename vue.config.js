module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dev/'
    : '/'
}

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production' 
//     ? './' 
//     : '/'
//   //publicPath: process.env.NODE_ENV === 'production' ? '/이곳에 경로를 적으시오./' : '/'
// };