import Button from '../components/Button';
import '../style.css';

function Home() {
  return (
    <>
      <div className="bg-purple-300 text-center">Welcome to Next.js!</div>
      <Button>Sign In</Button>
      <Button>Register</Button>
    </>
  );
}

export default Home;
