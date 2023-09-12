const numero = document.getElementById("numero")

function numeroAleatorio(){
         primerPromesa()
         .then((resolve)=>{
          console.log("Resultado de la primera promesa " + resolve);
          return segundaPromesa(resolve);
         }).then((resolve)=>{
          console.log("Resultado de la segunda promesa " + resolve)
          return terceraPromesa(resolve);
         }).then((resolve)=>{
          console.log("Resultado de la tercera promesa es " + resolve)
         })
          
}

function primerPromesa() {
   return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(numero.value = Math.floor(Math.random() * (100 - 10 + 1) + 10));
    },2000);
  })
}
function segundaPromesa(valor){
 return  new Promise((resolve) => {
    setTimeout(()=>{
      resolve( numero.value = numero.value * numero.value);
    },3000);
  })
}
function terceraPromesa(valor){
  return new Promise((resolve) => {
    setTimeout(()=>{
      resolve(numero.value = Math.sqrt(numero.value));

    }, 1000);
  })
}