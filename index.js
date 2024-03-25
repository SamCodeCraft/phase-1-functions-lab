// Function to calculate the distance in blocks from headquarters
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation); 
}

// Function to calculate the distance in feet from headquarters
function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation); 
  const feetPerBlock = 264; 
  return blocks * feetPerBlock; 
}

// Function to calculate the distance in feet between two blocks
function distanceTravelledInFeet(startBlock, endBlock) {
  const blocksTravelled = Math.abs(endBlock - startBlock); 
  const feetPerBlock = 264; 
  return blocksTravelled * feetPerBlock; 
}

// Function to calculate the fare price based on the distance travelled
function calculatesFarePrice(startBlock, endBlock) {
  const distance = distanceTravelledInFeet(startBlock, endBlock); 

  // Conditions to determine fare price based on the distance
  if (distance <= 400) {
    return 0; 
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; 
  } else if (distance > 2000 && distance < 2500) {
    return 25; 
  } else {
    return 'cannot travel that far'; 
  }
}



































 
 
 
 
 
 
 
 

