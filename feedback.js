let feedbackButton = document.querySelector(".feed-button")

feedbackButton.addEventListener('mouseover',()=>{
    feedbackButton.style.boxShadow = "black 0 0 .5rem"
})
feedbackButton.addEventListener('mouseout',()=>{
    feedbackButton.style.boxShadow = "none"
})
let form = document.querySelector("#feedback")

let note = document.querySelector(".note")

feedbackButton.addEventListener('click',()=>{
    // console.log(form.innerText)
    if (form.value === ""){
        note.style.display = "block"
        note.innerText = "Write something in form !"
        note.style.color = "red"
    }
    else{
        note.style.display = "block"
        note.innerText = "Feedback Submitted !"
        note.style.color = "green"
        feedbackButton.style.display = "none"
        form.setAttribute("disabled", "true")
    }
})



