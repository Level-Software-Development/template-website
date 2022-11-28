const Hello = () => {
  return (
    <div className="flex m-auto justify-evenly items-center h-screen w-screen">
      <div className="w-2/6">
        <h1 className="text-2xl text-white font-bold">
          Get started with the Next-Js template by Level software development
        </h1>
        <p className=" text-white mt-5">
          Get started by editing <code className="bg-#fafafa rounded p-0.5">pages/index.tsx</code>
        </p>
      </div>
      <div className="flex flex-col w-2/6">
        <a
          href="https://nextjs.org/docs"
          className="text-white">
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
        <a
          href="https://nextjs.org/learn"
          className="text-white mt-5">
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className="text-white mt-5">
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mt-5">
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </div>
  );
};

export { Hello };
