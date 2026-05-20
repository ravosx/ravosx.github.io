let mode = "register";

function toggleMode(){
    mode = mode === "register" ? "login" : "register";

    document.getElementById("title").innerText =
        mode === "register" ? "Registrácia" : "Prihlásenie";
}

function auth(){

    let user = {
        meno: document.getElementById("meno").value,
        heslo: document.getElementById("heslo").value,
        bio: "",
        image: "",
        bg: "linear-gradient(to bottom, rgb(41,139,172), lightblue)"
    };

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "profile.html";
}
