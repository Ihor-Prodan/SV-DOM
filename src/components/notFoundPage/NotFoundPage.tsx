import { useNavigate } from 'react-router-dom';
import './notFoundPage.css';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="not-found-container">
      <h1 className="not-found-page">Stránka nebola nájdená</h1>
      <h2 className="not-found-page-404">404</h2>
      <div className="not-found-back-container">
        <span className="not-found-back" onClick={() => navigate(-1)}>
          Späť
        </span>
      </div>
    </section>
  );
};
