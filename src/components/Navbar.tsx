import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ShoppingBag, MessageSquare, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

function Navbar() {
  const { user, signOut } = useAuthStore();

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sprout className="h-8 w-8" />
            <span className="text-xl font-bold">AgriConnect</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/products" className="flex items-center space-x-1 hover:text-green-200">
              <ShoppingBag className="h-5 w-5" />
              <span>Marketplace</span>
            </Link>
            <Link to="/discussions" className="flex items-center space-x-1 hover:text-green-200">
              <MessageSquare className="h-5 w-5" />
              <span>Discussions</span>
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <User className="h-5 w-5" />
                  <span>{user.username}</span>
                </span>
                <button
                  onClick={() => signOut()}
                  className="bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}