// Task 2: Write JavaScript code to dynamically change the color of the box element when clicked.
function changeColor() {
    const box = document.getElementById('box');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const currentColor = box.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];

    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }

    box.style.backgroundColor = newColor;
}

// Change color on click
function changeColor() {
    const box = document.getElementById('box');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const currentColor = box.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];

    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }

    box.style.backgroundColor = newColor;
}

// Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.
// Change background color on hover
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', function() {
    hoverBox.style.backgroundColor = 'lightblue';
});
hoverBox.addEventListener('mouseout', function() {
    hoverBox.style.backgroundColor = '';
});

// Toggle visibility on button click
function toggleVisibility() {
    const text = document.getElementById('text');
    if (text.style.display === 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
}

// Resize box on click
const resizeBox = document.getElementById('resizeBox');
let isResized = false; 
resizeBox.addEventListener('click', function() { if (isResized) { resizeBox.style.width = '100px'; 
resizeBox.style.height = '100px'; 
} else { resizeBox.style.width = '200px'; 
resizeBox.style.height = '200px';
} isResized = !isResized; 
});
