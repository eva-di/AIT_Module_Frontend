const form = document.getElementById("registration-form");


async function addUserHandler(event) {
  event.preventDefault();
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const password = form.elements["password"].value;
  const avatar = form.elements["image"].value;

  const newUser = {
    name,
    email,
    password,
    avatar,
  };

  fetchRegisterUser(newUser);
}

async function fetchRegisterUser(user) {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    // 201 - успешно создано
    if (res.status === 201) {
      alert("User is successfully registered");
      window.location.replace("/login");
    }
  } catch (err) {
    console.error("Registration failed:", err.message);
  }
}

form.addEventListener("submit", addUserHandler);
