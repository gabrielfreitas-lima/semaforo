var verde = document.getElementById("verde");
var amarelo = document.getElementById("amarelo");
var vermelho = document.getElementById("vermelho");
var div_img = document.getElementById("div_img");
var flag = false;

var semaforo = {
  // atributos
  idInterval: undefined,
  tempo: 1000,
  contador: 0,
  flag: false,

  // metodos
  semVerde: function () {
    (this.contador = 1),
      (this.idInterval = setInterval(function () {
        div_img.src = "./assets/img/pedestre_parado_cor.png";
        verde.classList.remove("opa");
        if (semaforo.contador < 10) {
          verde.innerHTML = "0" + semaforo.contador++;
        } else {
          verde.innerHTML = semaforo.contador++;
        }
        if (semaforo.contador > 21) {
          verde.innerHTML = "";
          verde.classList.add("opa");
          clearInterval(semaforo.idInterval);
          semaforo.contador = semaforo.contador - 22;
          semaforo.semAmarelo();
          amarelo.classList.remove("opa");
          amarelo.innerHTML = "00";
        }
      }, semaforo.tempo));
  },

  semAmarelo: function () {
    (this.contador = 1),
      (this.idInterval = setInterval(function () {
        verde.classList.add("opa");
        if (semaforo.contador < 10) {
          amarelo.innerHTML = "0" + semaforo.contador++;
        } else {
          amarelo.innerHTML = semaforo.contador++;
        }
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
        }
      }, semaforo.tempo));
  },

  semVermelho: function () {
    (this.contador = 1),
      (this.idInterval = setInterval(function () {
        if (semaforo.contador < 10) {
          vermelho.innerHTML = "0" + semaforo.contador++;
        } else {
          vermelho.innerHTML = semaforo.contador++;
        }
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
        }
      }, semaforo.tempo));
  },
};

var manuten = {
  tempo: 450,
  interv: undefined,
  flag: false,
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

function iniciar() {
  troca2();
  semaforo.semVerde();
}

function manutencao() {
  troca();
  manuten.piscar();
}

function troca() {
  clearInterval(semaforo.idInterval);
  verde.innerHTML = "";
  amarelo.innerHTML = "";
  vermelho.innerHTML = "";
  verde.classList.add("opa");
  amarelo.classList.add("opa");
  vermelho.classList.add("opa");
}

function troca2() {
  clearInterval(manuten.interv);
  amarelo.classList.add("opa");
  div_img.src = "./assets/img/pedestre_parado_cor.png";
}