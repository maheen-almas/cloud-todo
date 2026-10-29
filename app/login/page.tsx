'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-black">
          Cloud Todo
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 border rounded-xl mb-4 text-black"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 border rounded-xl mb-4 text-black"
        />

        <button className="w-full bg-purple-600 text-white p-4 rounded-xl">
          Sign In
        </button>

        <p className="text-center mt-4 text-black">
          Don't have an account?{' '}
          <Link
            href="/signup"
            className="text-purple-600 font-semibold"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}