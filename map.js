// https://codepen.io/chengarda/pen/wRxoyB
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext('2d')

let cameraOffset = { x: window.innerHeight * -0.1, y: window.innerHeight / 4 }
let cameraZoom = 1.1
let MAX_ZOOM = 5
let MIN_ZOOM = 0.1
let SCROLL_SENSITIVITY = 0.0005

function inventoryShelfToShelfId(shelfIdString, shelves) {
    // Get shelf index from positions 1-3 (inclusive), and optional suffix from position 4
    const inputNumber = parseInt(shelfIdString.slice(1, 4), 10);
    const inputSuffix = shelfIdString[4] ?? null;
    const firstLetter = shelfIdString[0];

    const shelfIds = shelves.map(s => s.shelfId);

    // Check our special shelves
    if (firstLetter in ["C", "D", "G"]) {
        debugger;
        for (const id of shelfIds) {
            if (firstLetter === id[0]) {
                return id;
            }
        }
    }

    // First try exact match using inputNumber + suffix if suffix exists
    const parsedId = inputSuffix ? `${inputNumber}${inputSuffix}` : `${inputNumber}`;
    if (shelfIds.includes(parsedId)) return parsedId;

    // Try to find closest shelf index ignoring suffix
    let closest = null;
    let minDiff = Infinity;

    for (const id of shelfIds) {
        const numPart = parseInt(id, 10); // parse leading number (ignores trailing letter)
        const diff = Math.abs(numPart - inputNumber);
        if (diff < minDiff) {
            minDiff = diff;
            closest = id;
        }
    }

    return closest;
}

function drawShelfMap(activeShelves) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
    ctx.translate(window.innerWidth / 2, window.innerHeight / 2)
    ctx.scale(cameraZoom, cameraZoom)
    ctx.translate(-window.innerWidth / 2 + cameraOffset.x, -window.innerHeight / 2 + cameraOffset.y)
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    ctx.fillStyle = "#1a1a1aff";
    drawRect(storeFloor.x, storeFloor.y, storeFloor.width, storeFloor.height);
    drawRectOutline(storeFloor.x, storeFloor.y, storeFloor.width, storeFloor.height, "#c2c2c2ff", 3);

    for (const polygon of areas) {
        ctx.fillStyle = polygon.color;
        drawPolygon(polygon.allPointsX, polygon.allPointsY);
    }

    for (const rectangle of shelves) {
        if (activeShelves.has(rectangle.shelfId)) {
            ctx.fillStyle = "#ffffff98"
        } else {
            ctx.fillStyle = "#383838ff"
        }
        drawRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height)
    }
    ctx.fillStyle = "#ffffffff"
    for (const rectangle of shelves) {
        drawText(rectangle.shelfId, rectangle.x, rectangle.y, 11, 'Arial');
    }

    requestAnimationFrame(() => drawShelfMap(activeShelves));
}

// Gets the relevant location from a mouse or single touch event
function getEventLocation(e) {
    if (e.touches && e.touches.length == 1) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
    else if (e.clientX && e.clientY) {
        return { x: e.clientX, y: e.clientY }
    }
}

function drawRect(x, y, width, height) {
    ctx.fillRect(x, y, width, height)
}

function drawRectOutline(x, y, width, height, color, lineWidth) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(x, y, width, height)
}

function drawPolygon(xPoints, yPoints) {
    ctx.beginPath();
    for (let i = 0; i <= xPoints.length; i++) {
        const x = xPoints[i];
        const y = yPoints[i];
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fill();
}

function drawText(text, x, y, size, font) {
    ctx.font = `${size}px ${font}`
    ctx.fillText(text, x, y)
}

let isDragging = false
let dragStart = { x: 0, y: 0 }

function onPointerDown(e) {
    isDragging = true
    dragStart.x = getEventLocation(e).x / cameraZoom - cameraOffset.x
    dragStart.y = getEventLocation(e).y / cameraZoom - cameraOffset.y
}

function onPointerUp(e) {
    isDragging = false
    initialPinchDistance = null
    lastZoom = cameraZoom
}

function onPointerMove(e) {
    if (isDragging) {
        cameraOffset.x = getEventLocation(e).x / cameraZoom - dragStart.x
        cameraOffset.y = getEventLocation(e).y / cameraZoom - dragStart.y
    }
}

function handleTouch(e, singleTouchHandler) {
    if (e.touches.length == 1) {
        singleTouchHandler(e)
    }
    else if (e.type == "touchmove" && e.touches.length == 2) {
        isDragging = false
        handlePinch(e)
    }
}

let initialPinchDistance = null
let lastZoom = cameraZoom

function handlePinch(e) {
    e.preventDefault()

    let touch1 = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    let touch2 = { x: e.touches[1].clientX, y: e.touches[1].clientY }

    // This is distance squared, but no need for an expensive sqrt as it's only used in ratio
    let currentDistance = (touch1.x - touch2.x) ** 2 + (touch1.y - touch2.y) ** 2

    if (initialPinchDistance == null) {
        initialPinchDistance = currentDistance
    }
    else {
        adjustZoom(null, currentDistance / initialPinchDistance)
    }
}

function adjustZoom(zoomAmount, zoomFactor) {
    if (!isDragging) {
        if (zoomAmount) {
            cameraZoom -= zoomAmount
        }
        else if (zoomFactor) {
            console.log(zoomFactor)
            cameraZoom = zoomFactor * lastZoom
        }

        cameraZoom = Math.min(cameraZoom, MAX_ZOOM)
        cameraZoom = Math.max(cameraZoom, MIN_ZOOM)

        console.log(zoomAmount)
    }
}

canvas.addEventListener('mousedown', onPointerDown)
canvas.addEventListener('touchstart', (e) => handleTouch(e, onPointerDown))
canvas.addEventListener('mouseup', onPointerUp)
canvas.addEventListener('touchend', (e) => handleTouch(e, onPointerUp))
canvas.addEventListener('mousemove', onPointerMove)
canvas.addEventListener('touchmove', (e) => handleTouch(e, onPointerMove))
canvas.addEventListener('wheel', (e) => adjustZoom(e.deltaY * SCROLL_SENSITIVITY))
