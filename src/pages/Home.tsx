import { NavLink } from "react-router";
import Contact from "../components/ContactForm";
import RecentProjects from "../components/RecentProjects";

function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center">
        <div className="max-w-7xl w-full px-4">
          <div id="hero" className="h-screen w-full">
            <div className="flex flex-col gap-2 pt-52">
              <h1 className="hero-text">Hi I am BRIAN,</h1>
              <h1 className="hero-text">I build things,</h1>
              <h1 className="hero-text">Human centric things</h1>
              <p>
                Creating scalable, responsive, and secure web solutions with
                clean code and exceptional performance.
              </p>
            </div>
            <div className="pt-4">
              <NavLink to="/projects">
                <span className="btn btn-primary py-2 md:py-3 text-xs md:text-base">
                  See my work
                </span>
              </NavLink>
            </div>
          </div>
          <div>
            <RecentProjects />
          </div>
          <div className="py-64">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
