function tocaSomPom(){ 
    document.querySelector('# som_tecla_pom').play('');
}

document.querySelectorAll('.tecla');

const listasDeTeclas= document.querySelectorAll('.tecla');

listasDeTeclas[0].onclick= tocaSomPom;

listasDeTeclas[1].onclick= tocaSomClap;
listasDeTeclas[2].onclick= tocaSomTim;
listasDeTeclas[3].onclick= tocaSomPuff;

listasDeTeclas.onclick= function(){
    tocaSom(isAudio);
};

tecla.onkeydown= function (){
    if(Eventocode==='Space'){

    tecla.classList.add('ativa');
}
tecla.onkeyup= function(){
    tecla.classList.remove('ativa');
}