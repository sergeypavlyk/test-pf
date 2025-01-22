export default function LoadingSpinner() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-100 z-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
    );
}
