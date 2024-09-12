
export default function Home() {
  return (
    <main>
      <div className="banner max-sm:text-center">
        <p className="sm:text-5xl text-3xl font-bold mt-10">
          Find What You’ve Been <br />{" "}
          <span className="text-main_red">Searching</span> For
        </p>
        <p className="w-72 my-10 opacity-70 max-sm:mx-auto">
          The best Recommendation system to find all the movies that are similar
          to what you like
        </p>
        <button className="bg-main_red py-4 px-8 font-semibold mb-10">
          Sign Up Today
        </button>
      </div>
      
    </main>
  );
}
