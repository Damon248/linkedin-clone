import { useState } from "react";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./fearures/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const dispatch = useDispatch();

  const register = async () => {
    if (!name) {
      return alert("Please enter a valid name!");
    }

    try {
      const userAuth = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const photoURL = profilePicUrl || "";

      await updateProfile(userAuth.user, {
        displayName: name,
        photoURL: photoURL,
      });

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePicUrl,
        })
      );
    } catch (error) {
      // Handle any errors that might occur during registration
      console.error("Error during registration:", error.message);
    }
  };

  const loginToApp = async (e) => {
    e.preventDefault();

    try {
      const userAuth = await signInWithEmailAndPassword(auth, email, password);

      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePicUrl,
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <img src="/Linkedin-Logo-PNG2.png" alt="" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name(Required)"
          type="text"
        />
        <input
          value={profilePicUrl}
          onChange={(e) => setProfilePicUrl(e.target.value)}
          placeholder="Profile pic URL(Optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          {" "}
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
