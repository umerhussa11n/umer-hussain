'use client';

interface ErrorProps {
  message: string;
  reset?: () => void 
}

const Error = ({ message, reset }: ErrorProps) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-red-500 text-lg mb-4 border border-red-300 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Error</h2>
        <p>An Error Occured</p>
        <p>{message}</p>
        <button 
          onClick={reset}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export default Error;