let box = document.querySelectorAll(".box");
let winner= document.querySelector("#winner");
const winPattern = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];

let turnO = true;
box.forEach((box) => {
  box.addEventListener("click",()=>{
    if(turnO===true){
        box.innerText="O";
        turnO=false;
    } else{
        box.innerText="X";
        turnO=true;
    }
    checkWinner();
    box.disabled=true;
  });
});

const checkWinner = () => {
    for (pattern of winPattern) {
      let pos1 = box[pattern[0]].innerText;
      let pos2 = box[pattern[1]].innerText;
      let pos3 = box[pattern[2]].innerText;

      if(pos1 != "" && pos2 !="" && pos3 != ""){
        if(pos1==pos2 && pos2==pos3){
          let win = `Winner is ${pos1}`;
            winner.textContent=win;
            box.forEach((box) =>{
              box.disabled=true;
            })
        }
      }
    }
}


