import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-winter-blue-dark">Oh no, this route doesn't exist!</h1>
      <p className="text-lg mb-6 text-gray-700">It seems the page you’re looking for doesn’t exist.</p>
      <Link 
        to="/" 
        className="bg-primary text-white py-2 px-4 rounded hover:bg-primary/70 transition duration-300"
      >
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;
