let nombres = [4, 8, 15, 16, 23, 42];
function rechercheNombre(nombre){
  if( nombres.indexOf(nombre)>0){
    console.log(true);
  }
  else{
    console.log(false);
    
  }
}
rechercheNombre(8)