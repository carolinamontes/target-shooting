import { pointsElement, targetElement } from './dom';
import { lookForTarget } from './functions';

let points = 0;
targetElement.addEventListener('click', () => {
	points++;
	pointsElement.textContent = points;
	lookForTarget();
});
