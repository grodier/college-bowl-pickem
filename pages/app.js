import '../style.css';
import AppProvider from '../context';
import AppRoot from '../components/AppRoot';

function App() {
  return (
    <div className="antialiased text-gray-900">
      <AppProvider>
        <AppRoot />
      </AppProvider>
    </div>
  );
}

export default App;
