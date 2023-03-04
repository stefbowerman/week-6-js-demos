const HUE_ROTATION_AMOUNT = 2
const GRADIENT_ROTATION_AMOUNT = 3
const INTERVAL_MS = 1000 / 60

// These are our color values
let hue = 0
const saturation = 95
const lightness = 65

// This is our angle value
let gradientAngle = 0

function updateBackgroundColor() {
  // Update our "hue" variable by rotating by a specific amount
  hue = hue + HUE_ROTATION_AMOUNT

  const hsl = `hsl(${hue} ${saturation}% ${lightness}%)`
  const hsl2 = `hsl(${hue + 180} ${saturation}% ${lightness}%)`

  // Update our "gradientAngle" variable by rotating by a specific amount
  gradientAngle = gradientAngle + GRADIENT_ROTATION_AMOUNT

  // Create the linear gradient value using the correct CSS syntax
  const gradient = `linear-gradient(${gradientAngle}deg, ${hsl}, ${hsl2})`
  
  // Update the background of the body element on the page
  document.body.style.background = gradient
}

setInterval(updateBackgroundColor, INTERVAL_MS)