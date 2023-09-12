const respuesta =[];

const prom = document.getElementById("prom")
const promesa1 = ()=>{
    new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Promesa numero 1")
        },2000)
    })
};

const promesa2 =()=>{
    new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Promesa numero 2")
        },2000)
    })
}
const promesa3 =()=>{
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Promesa numero 3")
        },2000)
    })
}

const promesas = [promesa1,promesa2,promesa3]

function getPromesas(promesas) {
    console.log(promesas) 
    return Promise.all(promesas);
}


getPromesas(promesas)
.then((resultados) => {
    resultados.forEach(element => {
        prom.value += element.name +', '
    });
    console.log('Resultados de las promesas:', resultados);
  })
  .catch((error) => {
    console.error('Error:', error);
  })