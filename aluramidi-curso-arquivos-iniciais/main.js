// Forma 1 do jeito mais basico  usando WHILE

// function tocaSom (idElementoAudio) {
//     document.querySelector(idElementoAudio).play();
// }

// const listaDeTeclas = document.querySelectorAll('.tecla');


// //while
// let i = 0;

// while (i < 9) {

//     const tecla = listaDeTeclas[i];

//     const instrumento = tecla.classList[1];

//     //template_string
//     const idAudio = `#som_${instrumento}`;

//     listaDeTeclas[i].onclick = function () {
//         tocaSom(idAudio);
//     }

//     i++;
// }

// _________________________________________Fim Forma 1______________________________________________________

// Forma 2 de resolver com FOR

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');


//for

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];

    const instrumento = tecla.classList[1];

    
    const idAudio = `#som_${instrumento}`; //template_string

    listaDeTeclas[i].onclick = function () {
        tocaSom(idAudio);
    }

}
