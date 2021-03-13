// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const statusFlight = document.getElementById("flightStatus");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const takingOff = document.getElementById("takeoff");
	const land = document.getElementById("landing");
	const Abortmission = document.getElementById("missionAbort");
	const background = document.getElementById("shuttleBackground");
	const rocketPos = document.getElementById("rocket");
	const moveRight = document.getElementById("right");
	const moveLeft = document.getElementById("left");
	const moveUp = document.getElementById("up");
	const moveDown = document.getElementById("down");
	rocketPos.style.position= 'relative'; 
    rocketPos.style.left = '0px'; 
    rocketPos.style.bottom = '0px';

	takingOff.addEventListener("click", function(event)
	{
		let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.")
		if (confirmation == true)
		{
			statusFlight.innerHTML = "Shuttle in flight"; 
			background.style.background = "blue";
			shuttleHeight.innerHTML = 10000;
		}
		else
		{
			paragraph.innerHTML = "Space shuttle ready for takeoff"; 
		}
	});

	land.addEventListener("click", function(event)
	{
		let alert = window.alert("The shuttle is landing. Landing gear engaged.");
		statusFlight.innerHTML = "The shuttle has landed."; 
		background.style.background = "green";
		shuttleHeight.innerHTML = 0;
	});

	Abortmission.addEventListener("click", function(event)
	{
		let confirmation = window.confirm("Confirm that you want to abort the mission.")
		if (confirmation == true)
		{
			statusFlight.innerHTML = "Mission aborted."; 
			background.style.background = "green";
			shuttleHeight.innerHTML = 0;
		}
		else
		{
			paragraph.innerHTML = "Shuttle in flight"; 
		}
	});

	moveRight.addEventListener("click", function(event)
	{
		movement = parseInt(rocketPos.style.left) + 10 + 'px';
        rocketPos.style.left = movement;
	});
	
	moveUp.addEventListener("click", function(event)
	{
		movement = parseInt(rocketPos.style.down) + 10 + 'px';
        rocketPos.style.down = movement;
		shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
	});
	
	moveLeft.addEventListener("click", function(event)
	{
		movement = parseInt(rocketPos.style.left) - 10 + 'px';
        rocketPos.style.left = movement;
	});
	
	moveDown.addEventListener("click", function(event)
	{
		movement = parseInt(rocketPos.style.down) - 10 + 'px';
        rocketPos.style.down = movement;
		shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
	});
}
window.addEventListener("load", init);