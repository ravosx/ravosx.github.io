let mode = "register";

function toggleMode() {
    mode = mode === "register" ? "login" : "register";

    document.getElementById("title").innerText =
        mode === "register" ? "Registracia" : "Prihlasenie";
}

function auth() {
    const meno = document.getElementById("meno").value.trim();
    const heslo = document.getElementById("heslo").value;

    if (!meno || !heslo) {
        alert("Vypln meno aj heslo.");
        return;
    }

    const user = {
        meno,
        heslo,
        bio: "",
        image: "",
        bg: "linear-gradient(to bottom, rgb(41,139,172), lightblue)"
    };

    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "profile.html";
}
