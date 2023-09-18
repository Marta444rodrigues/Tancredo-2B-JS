function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


 for (let contador = 0; contador < listaDeTeclas.length; contador++){
  
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
}
tecla.onkeydowm = function (evento){
    if (evento.code === 'Space'|| evento.code === 'Enter'){
    tecla.classList.add('ativa');}
}
tecla.onkeydowm = function () {
    tecla.classList.remove('ativa');
  }

}

