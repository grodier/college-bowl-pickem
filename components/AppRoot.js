import Button from './Button';
import { useAuth } from '../context/auth-context';
import GamePicker from './GamePicker';

function AppRoot() {
  const { user, signOut } = useAuth();
  console.log('App Root', { user });

  function radioSelectionChanged() {}

  return (
    <>
      {user && user.firstName && (
        <>
          <header className="bg-blue-300 p-2">
            <nav className="container mx-auto flex bg-blue-300 items-center justify-between ">
              <div>College Football Bowl Pickem</div>
              <Button onClick={signOut}>Sign Out</Button>
            </nav>
          </header>
          <main className="container mx-auto">
            <div className="text-center">Welcome {user.firstName}!</div>
            <GamePicker />
            <hr />
          </main>
        </>
      )}
    </>
  );
}

export default AppRoot;
