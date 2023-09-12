const number = document.getElementById("number")
const result = document.getElementById("result")

function getNumber(number){
    number = number.value
    return new Promise((resolve) => {
        let numeroActual = 1;

        function promesa(){
            return new Promise((resolve) => {
                setTimeout(()=>{
                    console.log(numeroActual)
                    result.value= numeroActual;
                    resolve();
                },numeroActual* 1000)
            });
        }
        function bucle(){
            if(numeroActual <= number){
                promesa().then(()=>{
                    numeroActual ++;
                    bucle()
                });
            }else{
                setTimeout(()=>{
                    resolve("todas las promesas fueron realizadas");
                },number * 1000)
            }
        }
        bucle()
    });
}