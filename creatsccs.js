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



let string = `  
(regular)={
  m=16;
  r=1000px;
  d=18;
};`


let stringTest = `
(regular-text)
{
  r: { min-width: 1000 }
  fs :{
    v-min: 16
    mw: 333
    v-max: 18
  },
  fw: {
    v-min: 16 
    mw: 600
    v-max: 18
  }
}
`


//16-1000-18

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
  constructor (string, className) {
    if (!className) {
      this.className = setArg(string, '(', ')')
      string = string.replace(`(${this.className})`, '')
    }else{
      this.className = className
    }
    console.log( JSON.parse(RJSON.toJson(string)) )
    this.params = JSON.parse(RJSON.toJson(string))
    this.scss;
    this.childClass = []
    this.lookingStyle()
  }
  
  getAllStyle(){
    let allStyle = {
      'screen': '@media screen and','r': '@media screen and',
      'fs': 'font-size',
      'fw': 'font-weigth',
      'minWidth': 'min-width','mw': 'min-width','min-w': 'min-width',
    }
    return allStyle
  }
  clearPropertyName(params, allStyle){
    for (const key in params) {
      this.clearPropertyName(key, allStyle)
      if (typeof(params) === 'object') {
        if (allStyle[key]) {
          let newKey = this.getAllStyle()[key];
          params[newKey] = params[key];
          delete params[key]
        }
      }
    }
  }
  recursiveCreatClass(){
    for (const key in this.params) {
      if (key !== '@media screen and') {
        let stringProperty = JSON.stringify(this.params[key])
        //this.childClass.push(new createClass(stringProperty, this.className))
      }
    }
  }
  lookingStyle(){
    this.clearPropertyName(this.params,  this.getAllStyle())
    this.recursiveCreatClass()
  }
}
let className = new createClass(stringTest)