var Variable1=localStorage.getItem("Player1");
var Variable2=localStorage.getItem("Player2");
Player1_Score=0;
Player2_Score=0;

document.getElementById("Player_Number1_Name").innerHTML=Variable1+" : ";
document.getElementById("Player_Number2_Name").innerHTML=Variable2+" : ";

document.getElementById("Player_1_Score").innerHTML=Player1_Score;
document.getElementById("Player_2_Score").innerHTML=Player2_Score;

document.getElementById("Player_Question").innerHTML="Question Turn : "+Variable1;
document.getElementById("Player_Answer").innerHTML="Answer Turn : "+Variable2;

function Send() {
}