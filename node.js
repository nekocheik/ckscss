// // FONTSIZE GENERATOR //
// const fs = require('fs');
// const {createWriteStream, createReadStream} = require('fs')
// const path = require('path');
// let t = createWriteStream('./test.scss')

// const createClass = function  ( className , classStyleName , propertyType, occurence = true, by = 2 , go = 10 , to = 60 ) {
//   let array = [ ]
//   for (let i = go; i < to; i+= by) {
//     let classStyle = `.${className}-${i}`; //
//     let style = classStyleName+':';
//     let property = `${i}${propertyType}`;
//     array.push(`${classStyle}{${style} ${property}}`)
//     if(occurence){
//       let callback = [ ]
//       for (let o = go; o < to ; o+= by) {
//         callback.push(createClass( `${className}-${o}` , classStyleName , propertyType, false, by , go , to))
//       }
//       callback.forEach((e, o) => {
//         e.forEach((t,n) => {
//           if( n + go + by > i ){
//             console.log(t)
//             array[i] += t + '\n'
//           }
//         })
//       });
//     }
//   }
//   return array
// }



// let fontSize = createClass ( 'fs' ,`font-size`, 'px' , true , 4 , 12, 22 )
// // let pad = createClass ( 'pad' ,`padding `, 'px' , true, 5 , 10,  200 )

// fontSize = fontSize.toString()
// fontSize = fontSize.split(',')



// fontSize.forEach( e => {
//   t.write(e)
// });


// pad.forEach( e => {
//   t.write(e)
// });

// console.log(fontSize)

