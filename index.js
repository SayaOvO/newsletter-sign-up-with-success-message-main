document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".sign-up-image");
  const form = document.querySelector(".sign-up-form");
  const input = document.querySelector(".sign-up-form-input");
  const email = document.querySelector(".success-msg-email");
  const signUp = document.querySelector(".sign-up");
  const successMsg = document.querySelector(".success-msg");
  const dismissBtn = document.querySelector(".success-msg-dismiss-btn");

  const mql = window.matchMedia("(max-width:768px)");

  if (mql.matches) {
    banner.src = "assets/images/illustration-sign-up-mobile.svg";
  }
  mql.addEventListener("change", () => {
    if (mql.matches) {
      banner.src = "assets/images/illustration-sign-up-mobile.svg";
    } else {
      banner.src = "assets/images/illustration-sign-up-desktop.svg";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    email.textContent = input.value;
    input.value = "";
    signUp.style.display = "none";
    successMsg.style.display = "flex";
  });

  dismissBtn.addEventListener("click", () => {
    successMsg.style.display = "none";
    signUp.style.display = "grid";
  });
});
