import axios from "axios";
import { createSignal, createEffect } from "solid-js";

const Login = () => {
  const [data, setData] = createSignal({
    username: "",
    password: "",
  });

  const onChange = (ev) => {
    const { name, value } = ev.target;
    // Update other fields
    setData({
      ...data(),
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:4000/api/login", {
        email: data().username,
        password: data().password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        window.location.pathname = "/admin/dashboard";
      })
      .catch((err) => {
        console.log(err);
        alert("Unable to login");
      });
  };

  return (
    <div class="w-full flex flex-col items-center justify-center">
      <div class="w-[100vw/2]">
        <br />
        <br />
        <br />
        <br />
        <input
          type="text"
          class="w-full border-2 p-2 border-black"
          placeholder="Username"
          name="username"
          onChange={onChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="password"
          class="w-full border-2 p-2 border-black"
          placeholder="Password"
          onChange={onChange}
        />
        <br />
        <br />
        <button class="w-full border-2 border-black" onClick={login}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
