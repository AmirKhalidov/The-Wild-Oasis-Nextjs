'use client';

export default function Error({ error, reset }) {
    return (
        <main className="flex justify-center items-center flex-col gap-6">
            <h1 className="text-3xl font-semibold">Something went wrong!</h1>
            <p className="text-lg">{error.message}</p>

            <button
                className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
                onClick={reset}
            >
                Try again
            </button>
        </main>
    );
}

// We can redirect user to the homepage as well. We can create nested error.js files. Only rendering errors are caught by this file
// For caughting error caused by global layout.js, we should create global-error.js file. And create layout for error in there (html and body tags)
