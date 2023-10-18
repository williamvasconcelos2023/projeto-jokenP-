
const result = document.querySelector(".result")
const scoreHuman = document.querySelector("#you-score")
const scoreMachine = document.querySelector("#machine-score")
const textoAbaixo = document.querySelector(".result-2")

let scoreHumanNumber = 0
let scoreMachineNumber = 0


const playHuman = (humanChoice) =>{

    playGame (humanChoice, playMachine())
    
}


const playMachine = () =>{
const choice = ["rock",  "paper",  "scissors"]
const randumNumber = Math.floor(Math.random () * 3)
return choice [randumNumber]

}

const playGame = (human, machine) =>{

    console. log("Humano:"  +  human  +  "Maquina:"  +  machine)

    if( human === machine){

        result.src= "./assets/0x0.gif"
        textoAbaixo.innerHTML = "Ixi e deu foi empate!"

    } else if(( human === "paper" && machine === "rock")||
            (human === "scissors" && machine === "paper")||
            (human === "rock" && machine === "scissors")){

        scoreHumanNumber++
        scoreHuman.innerHTML = scoreHumanNumber
        result.src="./assets/homer.gif"
        textoAbaixo.innerHTML = "Voçê ganhou cara!"
    }else{

        scoreMachineNumber++
        scoreMachine.innerHTML = scoreMachineNumber
        result.src="./assets/thehomer.gif"
        textoAbaixo.innerHTML = "AHH Voçê perdeu!"
    }

}