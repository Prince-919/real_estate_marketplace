import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import { useState } from "react";
import { HashLoader } from "react-spinners";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  return (
    <div className="p-2 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
        <TextInput
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <TextInput
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 p-3 rounded-lg text-white hover:opacity-95 disabled:opacity-80"
        >
          {loading ? (
            <div className="flex justify-center items-center gap-2">
              <HashLoader size={22} color="white" /> Signing...
            </div>
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to={"/sign-in"} className="hover:underline text-blue-500">
          Sign In
        </Link>
      </div>
      {error && <div className="text-red-500 mt-5">{error}</div>}
    </div>
  );
};
export default SignUp;
