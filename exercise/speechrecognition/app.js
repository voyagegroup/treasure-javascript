const displayStatus = (t) => {
	document.querySelector("#status").textContent = t;
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

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "ja-JP";
recognition.onstart = function() {
	displayStatus("音声認識スタート");
}

recognition.onresult = function(event) {
  document.getElementById("textarea").value = event.results[0][0].transcript;
}

recognition.onerror = function(event) {
  displayStatus(event.error);
}

document.querySelector("#startSpeech").addEventListener("click", function(e) {
	recognition.start();
});
