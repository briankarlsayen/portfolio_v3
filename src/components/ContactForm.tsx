import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { sendEmail } from "../api";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    try {
      const res = await sendEmail(email);
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
    }
    setEmail("");
    setLoading(false);
    setSent(true);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-xl">
        <h2>Contact Me</h2>
        <p className="pt-8 pb-4">
          Interested in connecting? Enter your email here, I will contact you
          ASAP!
        </p>
        {sent ? (
          <div className="h-10 flex items-center justify-center gap-2">
            <span className="text-green-400 text-2xl">
              <FaCheckCircle />
            </span>
            <p>Message sent!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input-primary"
              required
              disabled={loading}
            />
            <button
              type="submit"
              className="btn btn-primary flex items-center gap-2"
              disabled={loading}
            >
              {loading && (
                <span className="animate-spin">
                  <AiOutlineLoading3Quarters />
                </span>
              )}
              Submit
            </button>
          </form>
        )}

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <div>
          <ul className="flex pt-4">
            <li className="relative group">
              <a href="https://github.com/briankarlsayen" target="__blank">
                <span className="social-icon">
                  <FaGithub size={28} />
                </span>
                <span className="social-tooltip">Github</span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="https://www.linkedin.com/in/briankarlsayen/"
                target="__blank"
              >
                <span className="social-icon">
                  <FaLinkedin size={28} />
                </span>
                <span className="social-tooltip">Linkedin</span>
              </a>
            </li>
            <li className="relative group">
              <a
                href="https://www.instagram.com/briansayen/"
                target="__blank"
                className="inline-block"
              >
                <span className="social-icon">
                  <RiInstagramFill size={28} />
                </span>
                <span className="social-tooltip">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
