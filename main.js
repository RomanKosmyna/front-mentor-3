const beforeSubscribeEl = document.querySelector(".before-subscribe-container");
const afterSubscribeEl = document.querySelector(".after-subscribe-container");
const desktopImageContainerEl = document.querySelector(".desktop-image-container");
let userEmail = "";

const handleSubscribe = (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const inputEl = document.querySelector(".form-input");
    const errorEl = document.querySelector("#error");

    const userEmailEl = document.querySelector("#user-email");

    if (!emailPattern.test(inputEl.value)) {
        errorEl.style.display = "block";
        inputEl.style.background = "hsl(4, 100%, 87%)";
        inputEl.style.border = "1px solid hsl(4, 100%, 67%)";
        inputEl.style.color = "hsl(4, 100%, 67%)";

        return;
    } else {
        errorEl.style.display = "none";
        inputEl.style.background = "none";
        inputEl.style.border = "1px solid hsl(231, 7%, 60%)";
        inputEl.style.color = "hsl(234, 29%, 20%";

        beforeSubscribeEl.style.display = "none";
        afterSubscribeEl.style.display = "flex";

        desktopImageContainerEl.style.display = "none";

        userEmail = inputEl.value;
        userEmailEl.textContent = userEmail;
    }
};

const dismissMessage = () => {
    beforeSubscribeEl.style.display = "block";
    afterSubscribeEl.style.display = "none";
 
    if (window.innerWidth > 740)
    desktopImageContainerEl.style.display = "block";
};