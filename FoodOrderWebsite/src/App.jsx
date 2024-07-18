import React ,{ useState , useEffect } from 'react';
import AppRouter from "./router.jsx";
import Preloader from "./Preloder/Preloader.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
