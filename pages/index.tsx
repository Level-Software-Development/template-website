import { NextPage } from 'next';
import { Hello } from '../components/hello';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Image src="/images/ident.svg" className="h-32 absolute self-center w-screen" alt={'level'} width={32} height={32} />
      <div className="bg-black flex h-screen justify-center items-center">
        <Hello />
      </div>
    </>
  );
};
export default Home;
