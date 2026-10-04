const login = document.getElementById("login")
const signup = document.getElementById("signup")
const account = document.getElementById("account")
const log = document.getElementById("log")
const sign = document.getElementById("sign")
const logout = document.getElementById("logout")
const del = document.getElementById("delete")



function loading(){
    if(localStorage.getItem("active") == "true"){
        login.style.display = "none"
        signup.style.display = "none"
        account.style.display = "inline-block"
        account.innerHTML = localStorage.getItem("accountName")
    }
    else{
        login.style.display = "inline-block"
        signup.style.display = "inline-block"
        account.style.display = "none"
    }

    if(document.getElementById("currentPlan")){
    document.getElementById("currentPlan").innerHTML = localStorage.getItem("membership")
    document.getElementById("accountName").innerHTML = localStorage.getItem("accountName")
    document.getElementById("accountGmail").innerHTML = localStorage.getItem("gmail")
    }

}

function loggingIn(){
    event.preventDefault()
    const gmail = document.getElementById("gmail").value
    const password = document.getElementById("password").value

    if (gmail == "admin@gmail.com" && password == "password"){
        localStorage.setItem("active", "true")
        localStorage.setItem("accountName" , "admin")
        localStorage.setItem("gmail" , "admin@gmail.com")
        localStorage.setItem("membership", "Elite")
        window.location.href = "index.html"

    }
    else{
        alert("Wrong gmail or password")
    }
}

function signingUp(){
    event.preventDefault()
    localStorage.setItem("active", "true")
    const name = document.getElementById("name").value
    localStorage.setItem("accountName" , name)
    const membership = document.getElementById("membership").value
    localStorage.setItem("membership", membership)
    const gmail = document.getElementById("gmail").value
    localStorage.setItem("gmail" ,gmail)
    window.location.href = "index.html"
}

function loggingOut(){
    event.preventDefault()
    localStorage.setItem("active", "false")
    localStorage.setItem("accountName" , "none")
    localStorage.setItem("membership", "None")
    localStorage.setItem("gmail" ,"None")
    window.location.href = "index.html"
}

if(log){
log.addEventListener("submit", loggingIn)
}
if(sign){
sign.addEventListener("submit", signingUp)
}
if(logout){
logout.addEventListener("click", loggingOut)
}
if(del){
del.addEventListener("click", loggingOut)
}

loading()

