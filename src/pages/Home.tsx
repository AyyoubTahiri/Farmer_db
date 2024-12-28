import React from 'react';
import { ArrowRight, Users, Building2, GraduationCap, Tractor } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to AgriConnect
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Connecting farmers, companies, experts, and universities in one unified platform
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: Tractor,
            title: 'Farmers',
            description: 'Connect with experts and find the best agricultural products',
          },
          {
            icon: Building2,
            title: 'Companies',
            description: 'Showcase your products and reach farmers directly',
          },
          {
            icon: Users,
            title: 'Experts',
            description: 'Share your knowledge and provide valuable insights',
          },
          {
            icon: GraduationCap,
            title: 'Universities',
            description: 'Contribute research and connect with the agricultural community',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <item.icon className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <Link
              to="/register"
              className="inline-flex items-center text-green-600 hover:text-green-700"
            >
              Join as {item.title} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Latest from the Community</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Products</h3>
            <div className="space-y-4">
              {/* Product list will be populated dynamically */}
              <p className="text-gray-600">Loading products...</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Active Discussions</h3>
            <div className="space-y-4">
              {/* Discussions will be populated dynamically */}
              <p className="text-gray-600">Loading discussions...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;