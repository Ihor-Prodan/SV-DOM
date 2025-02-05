import { HashRouter, Routes, Route } from 'react-router-dom';
import App from '../../App';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </HashRouter>
  );
};
