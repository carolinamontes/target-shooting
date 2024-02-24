const targetElement = document.getElementById('target');
const pointsElement = document.getElementById('points');

let points = 0;

function lookForTarget() {
	const newPositionTop = Math.floor(Math.random() * (500 - 100));
	const newPositionLeft = Math.floor(Math.random() * (500 - 150));
	targetElement.style.top = newPositionTop + 'px';
	targetElement.style.left = newPositionLeft + 'px';
	console.log(newPositionTop);
	console.log(newPositionLeft);
}

targetElement.addEventListener('click', () => {
	points++;
	pointsElement.textContent = points;
	lookForTarget();
});
