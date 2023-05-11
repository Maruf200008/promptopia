import { Feed } from "@components";

const Home = () => {
  return (
    <section className=" w-full flex-col text-center px-4 ">
      <h1 className="text-5xl font-bold mt-5 mb-5">
        Discover & Share <br className=" max-md:hiden" />
        <span className="  text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          AI-Powred Prompts
        </span>
      </h1>
      <p className=" px-5">
        Promptopia is an open-source AI prompting tool for mordern world to
        discover, create and shire creative prompts{" "}
      </p>
      <Feed />
    </section>
  );
};

export default Home;
