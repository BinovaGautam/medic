import { useEffect } from 'react';
import NProgress from 'nprogress';

// Css
import './style.css'


function SuspenseLoader() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className="suspense__container">
      <h1>Loading....</h1>
    </div>
  );
}

export default SuspenseLoader;
