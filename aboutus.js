const p = document.getElementById('about');
console.log(p);

// let text = p.innerText;
// console.log(text);
// console.log(text.length);
// p.innerText ="";





// Function to simulate typing effect
function typeText() {
    // const text = "This is a typing effect example.";
    const text =  p.innerText;
    p.innerText ="";
    // const paragraph = document.getElementById("typed-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            p.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust the time delay (in milliseconds) between characters
        }
    }

    type();
}

// Call the typing effect function
typeText();

