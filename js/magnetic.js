let button = document.querySelector('.magnetic-button');

button.addEventListener('mousemove', function(e) {
  let rect = this.getBoundingClientRect();
  let mouseX = e.clientX - rect.left; // X position within the element.
  let mouseY = e.clientY - rect.top;  // Y position within the element.
  let centerX = rect.width / 2;
  let centerY = rect.height / 2;

  // Calculate the distance from the center of the button
  let distX = mouseX - centerX;
  let distY = mouseY - centerY;
  
  // The maximum distance for the button to move in any direction is 30% of its dimension.
  let maxDist = Math.max(centerX, centerY) * 0.3;

  // Calculate the new button position. 
  let translateX = distX / centerX * maxDist;
  let translateY = distY / centerY * maxDist;

  // Use GSAP to animate the movement of the button
  gsap.to(this, {duration: 0.1, x: translateX, y: translateY, ease: "power2.out"});
});

button.addEventListener('mouseout', function(e) {
  // When the mouse leaves the button, animate it back to its original position
  gsap.to(this, {duration: 0.2, x: 0, y: 0, ease: "power2.out"});
});
