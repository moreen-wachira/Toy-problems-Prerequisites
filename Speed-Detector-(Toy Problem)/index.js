function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      
      if (demeritPoints > 12) {
        console.log("License Suspended");
      } else {
        console.log(`Demerit Points: ${demeritPoints}`);
      }
    }
  }
  
  // Prompt the user for the car's speed
  const speedInput = parseFloat(prompt("Enter the car's speed (km/h):"));
  
  if (!isNaN(speedInput)) {
    calculateDemeritPoints(speedInput);
  } else {
    console.log("Invalid input. Please enter a numeric value for speed.");
  }