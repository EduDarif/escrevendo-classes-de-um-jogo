class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque
        switch(this.tipo){
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
        }
        console.log(`${this.nome} atacou com ${ataque}`)
    }
}

const heroi1 = new Heroi("Arthas", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");
const heroi3 = new Heroi("Lee", 40, "monge");
const heroi4 = new Heroi("Ryu", 25, "ninja");

heroi1.atacar(); // o guerreiro atacou usando espada
heroi2.atacar(); // o mago atacou usando magia
heroi3.atacar(); // o monge atacou usando artes marciais
heroi4.atacar(); // o ninja atacou usando shuriken