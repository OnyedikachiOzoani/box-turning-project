/** @format */

let box = document.getElementById("box");
document.addEventListener("keydown", handleKeyPress);
let verticalPosition = 0;
let horizontalPosition = 0;
let rotation = 0;
let key;
let stopHorizontalMovement;
let stopVerticalMovement;

function handleKeyPress(keyPressed) {
	key = keyPressed.code;

	// For moving up and down
	if (key === "ArrowUp" || key === "ArrowDown") {
		if (key === "ArrowDown") {
			verticalPosition = verticalPosition + 1;
			if (verticalPosition > 100) {
				verticalPosition = 100;
				/* Stop moving the box down when the edge meets the end of the viewport height */
			}
		}
		if (key === "ArrowUp") {
			verticalPosition = verticalPosition - 1;
			if (verticalPosition < 0) {
				verticalPosition = 0;
				/* Stop moving the box down when the edge meets the start of the viewport height */
			}
		}
	}

	// For horizontal movement
	if (key === "ArrowLeft" || key === "ArrowRight") {
		if (key === "ArrowLeft") {
			horizontalPosition = horizontalPosition - 1;
			if (horizontalPosition < -40) {
				horizontalPosition = -40;
				/* Stop moving the box down when the edge meets the start of the viewport width */
			}
		}
		if (key === "ArrowRight") {
			horizontalPosition = horizontalPosition + 1;
			if (horizontalPosition > 40) {
				horizontalPosition = 40;
				/* Stop moving the box down when the edge meets the end of the viewport width */
			}
		}
	}

	// For rotation of the box
	if (
		keyPressed.ctrlKey === true &&
		(key === "ArrowUp" || key === "ArrowRight")
	) {
		rotation = rotation + 30;

		// Stop upward movement
		if (key === "ArrowUp") {
			stopVerticalMovement = verticalPosition + 1;
			verticalPosition = stopVerticalMovement;
		}
		// Stop right movement
		if (key === "ArrowRight") {
			stopHorizontalMovement = horizontalPosition - 1;
			horizontalPosition = stopHorizontalMovement;
		}
	}

	if (
		keyPressed.ctrlKey === true &&
		(key === "ArrowDown" || key === "ArrowLeft")
	) {
		rotation = rotation - 30;

		// Stop downward movement
		if (key === "ArrowDown") {
			stopVerticalMovement = verticalPosition - 1;
			verticalPosition = stopVerticalMovement;
		}
		// Stop left movement
		if (key === "ArrowLeft") {
			stopHorizontalMovement = horizontalPosition + 1;
			horizontalPosition = stopHorizontalMovement;
		}
	}

	refresh();
}
function refresh() {
	box.style.top = verticalPosition + "vh";
	box.style.left = horizontalPosition + "vw";
	box.style.transform = "rotate(" + rotation + "deg)";
}
