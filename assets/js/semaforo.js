// VARIAVEIS GLOBAIS

var verde = document.getElementById("verde");
var amarelo = document.getElementById("amarelo");
var vermelho = document.getElementById("vermelho");
var div_img = document.getElementById("div_img");
var flag = false;

// FIM VARIAVEIS GLOBAIS

// OBJETOS

var semaforo = {
  // atributos
  idInterval: undefined, // recebe a function setInterval.
  tempo: 1000, // tempo pre-definido
  contador: 0, // contador para alternar as cores

  // metodos

  /*semVerde (serve para as outras duas funções: semAmarelo e semVermelho) é uma função 
  que recebe outra função (idInterval), que por sua vez recebe setInterval, que 
  faz todo o trabalho aqui, essa função coleta a imagem e a opacidade da cor 
  (podendo alterar as duas), assim conseguindo alternar entre "ligado" e "desligado" e junto com isso
  vem o contador (que auxilia na troca de cor). O 1° if verifica se o número é menor que 10
  e se for, ele adiciona um zero a sua frente, se não ele não faz nada. Ja o 2° if é o que
  o contador usa, quando o contador atingir o número + 1, ele para e zera o contador (o número - 2),
  adiciona opacidade a cor e tira a opacidade da proxima, assim "ligando" a cor amarela.*/

  semVerde: function () {
    // função luz verde
    (this.contador = 1),
      (this.idInterval = setInterval(function () {
        div_img.src = "./assets/img/pedestre_parado_cor.png";
        verde.classList.remove("opa");
        if (semaforo.contador < 10) {
          verde.innerHTML = "0" + semaforo.contador++;
        } else {
          verde.innerHTML = semaforo.contador++;
        };
        if (semaforo.contador > 21) {
          verde.innerHTML = "";
          verde.classList.add("opa");
          clearInterval(semaforo.idInterval);
          semaforo.contador = semaforo.contador - 22;
          semaforo.semAmarelo();
          amarelo.classList.remove("opa");
          amarelo.innerHTML = "00";
        };
      }, semaforo.tempo));
  },

  semAmarelo: function () {
    // função da luz amarela
    (this.contador = 1),
      (this.idInterval = setInterval(function () {
        verde.classList.add("opa");
        if (semaforo.contador < 10) {
          amarelo.innerHTML = "0" + semaforo.contador++;
        } else {
          amarelo.innerHTML = semaforo.contador++;
        };
        amarelo.classList.remove("opa");
        if (semaforo.contador > 5) {
          amarelo.innerHTML = "";
          amarelo.classList.add("opa");
          clearInterval(semaforo.idInterval);
          semaforo.contador = semaforo.contador - 5;
          semaforo.semVermelho();
          vermelho.classList.remove("opa");
          div_img.src = "./assets/img/pedestre_andando_cor.png";
          vermelho.innerHTML = "00";
        };
      }, semaforo.tempo));
  },

  semVermelho: function () {
    // função da luz vermelha
    (this.contador = 1),
      (this.idInterval = setInterval(function () {
        if (semaforo.contador < 10) {
          vermelho.innerHTML = "0" + semaforo.contador++;
        } else {
          vermelho.innerHTML = semaforo.contador++;
        };
        vermelho.classList.remove("opa");
        if (semaforo.contador > 11) {
          vermelho.innerHTML = "";
          vermelho.classList.add("opa");
          clearInterval(semaforo.idInterval);
          semaforo.contador = semaforo.contador - 11;
          semaforo.semVerde();
          verde.classList.remove("opa");
          div_img.src = "./assets/img/pedestre_parado_cor.png";
          verde.innerHTML = "00";
        };
      }, semaforo.tempo));
  },
};

var manuten = {
  // atributos
  tempo: 450, // tempo pre-definido.
  interv: undefined, // recebe a function setInterval.
  flag: false, // inicializado em falso e usado nas condições.

  // metodo
  /*alterna a opacidade da cor usando uma variavel flag, que inicia em FALSE 
  e alterna para TRUE quando chegar ao fim do IF*/
  piscar: function () {
    this.interv = setInterval(function () {
      if (!manuten.flag) {
        amarelo.classList.remove("opa");
        div_img.src = "./assets/img/pedestre_parado_cor.png";
        manuten.flag = true;
      } else {
        amarelo.classList.add("opa");
        div_img.src = "./assets/img/pedestre_parado_sem_cor.png";
        manuten.flag = false;
      }
    }, manuten.tempo);
  },
};

// FIM OBJETOS

// FUNÇÕES
var contVerde = 0

function iniciar() {
  // ao clicar no botão "iniciar", essa função inicia, e usa o objeto "semaforo".
  troca2();
  semaforo.semVerde();
  return contVerde++
}

function manutencao() {
  // ao clicar no botão "manutenção", essa função inicia, e usa o objeto "manuten".
  troca();
  manuten.piscar();
}

function pedestre(){
    var flag3 = false;

    if (!flag3 && contVerde === 3){
        semaforo.semAmarelo();
        flag3 = true;
    }else{
        semaforo.semVerde();
        flag3 = false
    }
}

function troca() {
  // "desativa" a função iniciar().
  clearInterval(semaforo.idInterval);
  verde.innerHTML = "";
  amarelo.innerHTML = "";
  vermelho.innerHTML = "";
  verde.classList.add("opa");
  amarelo.classList.add("opa");
  vermelho.classList.add("opa");
}

function troca2() {
  // "desativa" a função manutencao().
  clearInterval(manuten.interv);
  amarelo.classList.add("opa");
  div_img.src = "./assets/img/pedestre_parado_cor.png";
}