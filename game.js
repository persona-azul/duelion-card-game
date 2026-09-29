
const cards = [

{
 name:"炎牙のリオス",
 power:1800,
 type:"🔥炎"
},

{
 name:"月影のミラ",
 power:1200,
 type:"🌑闇"
},

{
 name:"雷撃兵ゼノ",
 power:1500,
 type:"⚡雷"
}

];


function startGame(){

let area=document.getElementById("cards");

area.innerHTML="";


cards.forEach(card=>{


let div=document.createElement("div");

div.className="card";


div.innerHTML=`

<h3>${card.name}</h3>

<p>${card.type}</p>

<p>
攻撃力<br>
${card.power}
</p>

`;


div.onclick=function(){

battle(card);

};


area.appendChild(div);


});


document.getElementById("result").innerHTML=
"カードを選んでください";

}



function battle(playerCard){


let enemy=
cards[Math.floor(Math.random()*cards.length)];


let text="";


if(playerCard.power > enemy.power){

text=
"勝利！<br>"+
playerCard.name+
" VS "+
enemy.name;

}

else if(playerCard.power < enemy.power){

text=
"敗北…<br>"+
playerCard.name+
" VS "+
enemy.name;

}

else{

text="引き分け！";

}



document.getElementById("result")
.innerHTML=text;


}



startGame();
