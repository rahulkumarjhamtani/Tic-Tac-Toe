var audio = new Audio("assets/sound/1.mp3");
var turn = "X";
var over = false;

const changeturn = () => {
    return turn === "X"?"O":"X";
}

const win = () => {
    var text = document.getElementsByClassName("text");
    var wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e => {
       if( (text[e[0]].innerText === text[e[1]].innerText) && (text[e[2]].innerText === text[e[1]].innerText) && (text[e[0]].innerText !== '' ))
       {
           document.querySelector('.show').innerText = text[e[0]].innerText + " Won";
           over = true;
           document.querySelector(".line").style.width = '20vw';
           document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;

            //    alert(text[e[0]].innerText + " Won");
            // if(document.getElementsByClassName("show")[0].innerText == 'X Won' || document.getElementsByClassName("show")[0].innerText == 'O Won')
            // {
            //     Array.from(text).forEach(element => {
            //         element.innerText = '';
            //     });
            // }
        } 
    });
}

var boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    var text = element.querySelector(".text");
    element.addEventListener('click', ()=>{
        if(text.innerText === '')
        {
            text.innerText = turn;
            turn = changeturn();
            audio.play();
            win();
            if(!over)
            {
                document.getElementsByClassName("show")[0].innerText = "Turn of " + turn;
            }
        }
        else
        {
            alert("Already filled");
        }
    })
});

var reset = document.getElementById("reset");
reset.addEventListener('click', ()=>{
    var text = document.querySelectorAll(".text");
    Array.from(text).forEach(element => {
        element.innerText = '';
    });
    document.querySelector(".line").style.width = '0';
    turn = "X";
    over = false;
    document.getElementsByClassName("show")[0].innerText = "Turn of " + turn;
})