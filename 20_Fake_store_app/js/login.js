// then --> await

// await только внутри функций, который являются асинхронными
// при объявлении укажем слово async


const form = document.getElementById("login-form");
const errElement = document.getElementById("login-form-err");

async function fetchLogin() {
  try {
    const credentials = {
      email: form.elements["email"].value,
      password: form.elements["password"].value,
    };

    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      if (res.status === 401) { 
        throw new Error("Wrong password or email");
      }
      throw new Error("Login error");
    }

    const obj = await res.json();
    const { access_token } = obj;
    console.log(access_token);

    // в браузере есть способы хранения:
    // 1. sessionStorage
    // 2. localStorage
    // 3. cookies

    // сохранили в локал сторадж токен под ключом "access_token"
    localStorage.setItem("access_token", access_token);

    // window.location.href = "/profile";
    window.location.replace("/profile");
  } catch (err) {
    errElement.innerText = err.message;
  }
}
function loginHandler (e) {
    e.preventDefault();
    fetchLogin();
}

form.addEventListener("submit", loginHandler);