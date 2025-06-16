export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative">
        {/* Spinning border */}
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        
        {/* Text inside circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-blue-600 font-medium text-sm">Loading</span>
        </div>
      </div>
    </div>
  );
}