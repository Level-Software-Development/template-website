import { NextPage } from 'next';
import { Hello } from '../components/hello';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-800">
      <Hello />
    </div>
  );
};
export default Home;
