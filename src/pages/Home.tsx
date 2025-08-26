import Contact from "../components/Contact";
import RecentProjects from "../components/RecentProjects";

function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center ">
        <div className="max-w-7xl w-full">
          <div id="hero" className="h-screen w-full">
            <div className="flex flex-col gap-2 pt-52">
              <h1 className="hero-text">Hi I am BRIAN,</h1>
              <h1 className="hero-text">I build things,</h1>
              <h1 className="hero-text">Human centrive things</h1>
              <p>
                Come a little close, Don't worry I don't bite... Well not yet
              </p>
            </div>
            <div className="pt-4">
              <button
                className="btn btn-primary"
                onClick={() => alert("Praise the great one!")}
              >
                Praise me
              </button>
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
