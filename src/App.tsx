import 'antd/dist/antd.min.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/dashboard'));

function App() {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route index element={<Dashboard />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
