const urls = document.getElementById("urls");

let array = [
  "https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=600&h=400",
  "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
  " https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
];
let respuestas = [];

const promises = [];

function getUrls(array) {
  console.log(array);
  array.forEach((element) => {
    const promise = fetch(`${element}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("status ok");
          respuestas.push(response.status)
        } else {
          throw new Error(`Error al obtener la url: ${element}`);
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
    promises.push(promise);
  });
  respuestas.forEach((item)=>{
    urls.value += item +  ', ' 
  })
  return Promise.all(promises);

}

getUrls(array)
