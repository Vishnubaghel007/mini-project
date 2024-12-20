const uppercase = document.querySelector(".uppercase"),
    lowercase = document.querySelector(".lowercase"),
    capitalize = document.querySelector(".capitalize"),
    bold = document.querySelector(".bold"),
    italic = document.querySelector(".italic"),
    underline = document.querySelector(".underline"),
    input = document.querySelector("input"),
    output = document.querySelector('.output');


input.addEventListener('change', (e) => {
    let inputVal = e.target.value;
    console.log(inputVal)
})

function updateOutput() {
    output.innerText = input.value;
}

uppercase.addEventListener("click", () => {
    console.log("working");
    input.style.textTransform = "Uppercase";
    updateOutput();
})
lowercase.addEventListener("click", () => {
    console.log("working");
    input.style.textTransform = "lowercase"
})
capitalize.addEventListener("click", () => {
    console.log("working");
    input.style.textTransform = "capitalize"
})
underline.addEventListener("click", () => {
    console.log("working");
    input.style.textDecoration = "underline"
    console
})
bold.addEventListener("click", () => {
    console.log("working");
    input.style.fontWeight = "bold"
})
italic.addEventListener("click", () => {
    console.log("working");
    input.style.fontStyle = "italic"
})

