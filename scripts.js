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
	const buttons = document.getElementsByTagName("button");
	

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

	buttons.addEventListener("click",function(event)
	{
		if(buttons === 'Up')
		{
			rocketPos.style.marginTop = "10px";
			shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
		}
		else if (buttons ==="Down")
		{
			rocketPos.style.MarginBottom = "10px";
			shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000;
		}	
		else if(buttons ==="Right")
		{
			rocketPos.style.marginRight = "-10px";
		}
		else if(buttons ==="Left")
		{
			rocketPos.style.marginLeft = "-10px";
		}
	});

}
window.addEventListener("load", init);