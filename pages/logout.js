import Button from '../components/Button';
import '../style.css';

function Logout() {
  return (
    <>
      <div className="bg-purple-300 text-center">You've been logged out</div>
      <Button>Sign In</Button>
      <Button>Go Home</Button>
    </>
  );
}

export default Logout;
