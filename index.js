const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

// js code to appear signup and login form
signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});

// Aceitação de cookies
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function hideCookieNotice() {
    document.getElementById('cookieCard').style.display = 'none';
}

function fadeIn(element, duration) {
    var opacity = 0;
    var interval = 50;
    var gap = interval / duration;

    function updateOpacity() {
        opacity += gap;
        element.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(fadeInterval);
        }
    }

    element.style.display = 'block';
    var fadeInterval = setInterval(updateOpacity, interval);
}

setTimeout(function () {
    var acceptedCookie = getCookie('acceptedCookie');
    if (!acceptedCookie || acceptedCookie !== 'true') {
        var cookieCard = document.getElementById('cookieCard');
        fadeIn(cookieCard, 500);
    }
}, 500);

document.getElementById('acceptButton').addEventListener('click', function () {
    setCookie('acceptedCookie', 'true', 30);
    hideCookieNotice();
});
// Final de aceitação de cookies