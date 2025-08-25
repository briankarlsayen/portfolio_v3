function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-2 px-8 pt-20">
        <h1 className="hero-text">Hi I am BRIAN,</h1>
        <h1 className="hero-text">I build things,</h1>
        <h1 className="hero-text">Human centrive things</h1>
        <p>Come a little close, Don't worry I don't bite... Well not yet</p>
      </div>
      <div className="px-8 pt-4">
        <button
          className="btn btn-primary"
          onClick={() => alert("Praise the great one!")}
        >
          Praise me
        </button>
      </div>
    </div>
  );
}

export default Home;
