var semaforo = {
    // atributos
    idInterval: undefined,
    tempo: 1000,
    contador: 0,

    // metodos
    semVerde: function(){
        this.idInterval = setInterval(
            function(){
                semaforo.contador++;
                console.log(semaforo.contador)
                if(contador > 10){
                    clearInterval(semaforo.idInterval);
                    semaforo.contador = semaforo.contador - 9;
                    semaforo.semAmarelo();
                }
            }
        )

    },
    semAmarelo: function(){
        this.idInterval = setInterval(
            function(){
                semaforo.contador++;
                console.log(semaforo.contador)
                if(contador > 7){
                    clearInterval(semaforo.idInterval);
                    semaforo.contador = semaforo.contador - 7;
                    semaforo.semVermelho();
                }
            }, semaforo.tempo
        )
    },
    semVermelho: function(){
        this.idInterval = setInterval(
            function(){
                semaforo.contador++;
                console.log(semaforo.contador)
                if(contador > 4){
                    clearInterval(semaforo.idInterval);
                    semaforo.contador = semaforo.contador - 3;
                    semaforo.semVerde();
                }
            }
        )

    }
}