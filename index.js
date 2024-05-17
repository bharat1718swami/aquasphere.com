const p_one = document.getElementById('one');
const p_two = document.getElementById('two');
// console.log(p);





// Function to simulate typing effect
function typeText(p) {
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
typeText(p_one);
typeText(p_two);

