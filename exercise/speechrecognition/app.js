const displayStatus = (t) => {
	document.querySelector("#status").textContent = t;
}

SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
if (("SpeechRecognition" in window) === false) {
	alert("SpeechRecognition is not available in your browser.");
}

recognition = new SpeechRecognition(	);
recognition.onresult = (event) => {
  console.log(event);
}
// recognition.start();

// const recognition = new SpeechRecognition();
// recognition.lang = "ja-JP";
// recognition.start();

// recognition.onstart = function() {
// 	displayStatus("音声認識スタート");
// }

// recognition.onresult = function(event) {
// 	console.log(event);
// 	alert(event.results[0][0].transcript)
// }

// recognition.onerror = function(event) {
//   displayStatus("音声認識ストップ");
// }