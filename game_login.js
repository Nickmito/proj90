function addUser(){
    play1=document.getElementById("player1nameinput").value;
    play2=document.getElementById("player2nameinput").value;
    localStorage.setItem("play1", play1);
    localStorage.setItem("play2", play2);
    window.location="game_page.html";
}