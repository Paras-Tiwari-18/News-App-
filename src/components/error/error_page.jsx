import { useNavigate, useRouteError } from "react-router";
import '../../assets/err.css';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  const navigate=useNavigate();
  return (
    <div className="error-container">
      <img src="/Not Found.gif" alt="Not Found" className="error-gif" />
      <h1 className="error-title">Oops! Something went wrong</h1>
      <p className="error-message">Please try again later or return home.</p>
      <button className="retry-btn" onClick={() => navigate('/')}>
        Go Home
      </button>
    </div>
  );
};
