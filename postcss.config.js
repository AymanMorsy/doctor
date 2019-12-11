// module.exports ={
//     plugins:{
//         // postcss مبني على البلاجنز اللى من ضمنها اوتوبريفكسرsw
//         "autoprefixer":{}
//     }
// }

 // 👉 you can add this config in webpack config file directly :
//  {
//     loader: 'postcss-loader',
//     options: {
//         sourceMap: true,
//         plugins: function () { 
//             return [
//               require('autoprefixer')
//             ];
//           }
//     }
// }