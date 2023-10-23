console.log("Esto se ejecuta en el frontend")

const form = document.getElementById("form")
const emailInput = document.querySelector("input[name='email']")
const codeInput = document.querySelector("input[name='code']")
const loginBtn = document.getElementById("login")
const getCodeBtn = document.getElementById("getCode")

emailInput.value = "ignaciogesualdo@gmail.com"
codeInput.value = "123456"

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = emailInput.value
  const code = codeInput.value

  fetch(`http://localhost:4000/api/auth/login/${email}`, {
    method: "POST",
    body: JSON.stringify({ code }),
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  })
    .then((res) => res.json())
    .then((resData) => {
      console.log({ resData })
      window.location.href = "/sales"
    })
})

getCodeBtn.addEventListener("click", (e) => {})
