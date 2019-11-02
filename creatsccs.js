let RJSON = require('really-relaxed-json')






// class Stylus {
  
//   constructor(){
//     this.allAAtributesCss = this.setAttributes()
//     // this.styleOfcss = new cssCreator
//   }
  
  
  
//   setAttributes()  {
//     let array = [];
//     let domElement =  document.all
//     for (const key in domElement) {
//       array.push(domElement[key])
//     }
//     let array2 = []
//     array.forEach((e)=>{
//       let attibut = this.setAttibute(e)
//       if (attibut) {
//         array2.push(attibut)
//       }
//     })
//     return array2
//   }
  
//   setAttibute (e) {
//     let t = e
//     if (e.attributes){
//       if (e.attributes[0]) {
//         if (e.attributes[0].nodeValue) {
//           t = e.attributes[0].nodeValue  
//           return t
//         }
//       }
//     }
//   }
// }

// class CssCreator extends Stylus{
//   constructor (){
//     super()
//     this.allClass = this.render()
//   }
//   render(){
//     // console.log(this)
//     let arrayAttribut = []
//     this.allAAtributesCss.forEach(element => {
//       // console.log(element)
//       arrayAttribut.push(this.setArg(element, '{', '}'))
//     });
//     return arrayAttribut
//   }
//   setArg (string,start, end) {
//     let iStart;
//     let iEnd;
//     for (let i = 0; i < string.length; i++) {
//       let letter = string[i]
//       if (letter === start && !iStart) {
//         iStart = i
//       }
//       if (letter === end && iStart)  {
//         iEnd = i
//         return string.slice(iStart+1, iEnd)
//       }
//     }
//     if (!end) {
//       if(string[iStart] === start){
//         return start
//       }else{
//         console.log('non')
//       }
//     }
//     return string.slice(iStart+1, iEnd)
//   }
// }


//16-1000-18

let string = `  
(regular)={
  m=16;
  r=1000px;
  d=18;
};`


let stringTest = `
(regular__text)
{
  media: { min-width: 1000 },
  fs :{
    v-min: 16,
    media: 600,
    v-max: 18,
  },
  fw: {
    v-min: 16,
    media: 600,
    v-max: 18,
  }
}
`



function setArg (string,start, end) {
  let iStart;
  let iEnd;
  for (let i = 0; i < string.length; i++) {
    let letter = string[i]
    if (letter === start && !iStart) {
      iStart = i
    }
    if (letter === end && iStart)  {
      iEnd = i
      return string.slice(iStart+1, iEnd)
    }
  }
  if (!end) {
    if(string[iStart] === start){
      return start
    }else{
      console.log('non')
    }
  }
  return string.slice(iStart+1, iEnd)
}


class createClass {
  constructor (string) {
    this.className = setArg(string, '(', ')')
    string = string.replace(`(${this.className})`, '')
    this.params = JSON.parse(RJSON.toJson(string))
    this.scss;
    this.lookingStyle()
  }
  clearPropertyName(){
    this.allStyle = {
      '[fs,]' : 'font-size'
    }
    
    for (const key in this.params) {
      key
    }
  }
  lookingStyle(){
    this.clearPropertyName()
  }
}
let className = new createClass(stringTest)
// console.log(className)