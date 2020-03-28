var context = new AudioContext();
var oscA = context.createOscillator()

oscA.type = "sine";
oscA.frequency.value = 262
oscA.started = false

function playOscA() {
	oscA.connect(context.destination);
	oscA.frequency.value = parseFloat(document.getElementById("freq").value);
	if (oscA.started === false) {
		oscA.start();
		oscA.started = true;
	}
}

function stopOscA() {
	oscA.disconnect(context.destination);
}
