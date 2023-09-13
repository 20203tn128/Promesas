const cancelacion = document.getElementById("cancelacion");

function startPromise(){
    let promesaCancelada = false;
    let promesaPendiente;
    let promesaResolve ;
    const promesa = new Promise((resolve, reject) => {
        promesaResolve = resolve;
        promesaPendiente = setTimeout(()=>{
            if(!promesaCancelada){
                resolve( cancelacion.value ="Promesa resuelta despues de 5 segundos.")
            }
        },5000);
    });

    function cancel(){
        if(!promesaCancelada){
            promesaCancelada = true;
            clearTimeout(promesaPendiente);
            promesaResolve("Promesa cancelada");
        }
    }
    return {promesa,cancel};
}
/* const { promesa, cancel } = startPromise();

promesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.error(error);
  });
setTimeout(() => {
  cancel();
}, 2000); 
 */