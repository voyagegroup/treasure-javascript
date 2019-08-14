const displayStatus = (t) => {
	document.querySelector("#status").textContent = t;
}

const displayComment = (t) => {
	document.querySelector("#textarea").textContent = t;
}

const speechRecognition = () => {
	if ("SpeechRecognition" in window) {
	  return new SpeechRecognition();
	} else if ("webkitSpeechRecognition" in window) {
	  return new webkitSpeechRecognition();
	} else {
	  return undefined;
	}
}

const recognition = speechRecognition();

recognition.lang = "ja-JP";
recognition.onstart = function() {
	displayStatus("音声認識スタート");
}

recognition.onresult = function(event) {
	const {transcript} = event.results[0][0];
	displayComment(transcript);
}

recognition.onerror = function(event) {
  displayStatus(event.error);
}

document.querySelector("#startSpeech").addEventListener("click", function(e) {
	recognition.start();
});