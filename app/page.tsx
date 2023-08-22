import apiCalls from "@/graphql";
import { BlockAppQuery, BlockAppQueryVariables } from "@/util/types/graphql";
import Image from "next/image";
import { getClient } from "./util/getClient";
import { Hello } from "./components/hello";

export default async function Home() {
  const { data } = await getClient().query<BlockAppQuery>({
    query: apiCalls.queries.blockApp,
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
    <>
      <Image
        src="/images/ident.svg"
        className="h-32 absolute self-center w-screen"
        alt={"level"}
        width={32}
        height={32}
      />
      <div className="bg-black flex h-screen justify-center items-center">
        <Hello />
      </div>
    </>
  );
}
