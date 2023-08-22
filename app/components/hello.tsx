"use client";

import apiCalls from "@/graphql";
import { BlockAppQuery, BlockAppQueryVariables } from "@/util/types/graphql";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const Hello = () => {
  const { data } = useSuspenseQuery<BlockAppQuery>(apiCalls.queries.blockApp, {
    variables: {
      input: {
        buildVersion: "1",
        deviceBrand: "apple",
        appType: "website",
      },
    } as BlockAppQueryVariables,
  });

  console.log(data);

  return (
    <div className="flex flex-wrap gap-y-12 justify-evenly items-center w-screen mx-6">
      <div>
        <h1 className="text-2xl font-bold max-w-lg text-center">
          Get started with the Next-Js template by Level software development
        </h1>
        <p className="mt-5 text-center">
          Get started by editing{" "}
          <code className="bg-#fafafa rounded p-0.5">pages/index.tsx</code>
        </p>
      </div>
      <div className="flex flex-col">
        <a href="https://nextjs.org/docs">
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
        <a href="https://nextjs.org/learn" className="mt-5">
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className="mt-5"
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5"
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </div>
  );
};

export { Hello };
