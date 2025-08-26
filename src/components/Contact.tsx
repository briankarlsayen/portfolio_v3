import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    alert(`Email submitted: ${email}`);
    setEmail("");
  };
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-xl">
        <h2>Contact Me</h2>
        <p className="pt-8 pb-4">
          Interested in connecting? Enter your email here, I will contact you
          ASAP!
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input-primary"
            required
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    </div>
  );
}

export default Contact;
