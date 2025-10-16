let selected;

ratingButtons = document.querySelectorAll(".rating-container button");

ratingButtons.forEach(btn => {
    btn.onclick = () => {
        selected = btn.textContent;

        //check if any other button is active
        isActive = document.querySelectorAll(".active");
        if (isActive.length > 0) {
            isActive.forEach(b => {
                if(!(b.textContent === selected)) {
                    b.classList.toggle("active");
                }
            })
        }

        btn.classList.toggle("active");
    }
});

const submitButton = document.querySelector(".btn-submit");
const submissionMessage = document.querySelector(".selection");

submitButton.onclick = () => {
    if (selected) {
        submissionMessage.innerHTML = `You selected ${selected} out of 5`;
        document.getElementById("thankyou").classList.remove("hide");
        document.getElementById("rating").classList.add("hide");
    }
}