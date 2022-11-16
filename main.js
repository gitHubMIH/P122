x = 0;
y = 0;
screenWidth="0";
screenHeight="0"; 
drawApple = "";
speakData ="";
toNumber ="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
    if(content == drawApple)
    {
      x = Math.floor(Math.random() * 900);
      y = Math.floor(Math.random() * 600);
      document.getElementById("status").innerHTML = "Desenhando maçãs ."; 
      drawApple = "set";
}
}
function setup() {
  canvas = createCanvas(1450, 800);
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
