
function distanceFromHqInBlocks (destination) {
    return Math.abs(destination-42)
  }
  
  function distanceFromHqInFeet (destination) {
    return distanceFromHqInBlocks(destination) * 264;
  }
  
  function distanceTravelledInFeet (start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } 
    else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } 
    else if (distance > 2000 && distance < 2500) {
      return 25;
    } 
    else {
      return 'cannot travel that far';
    }
  }