
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AuthForm from "@/components/auth/AuthForm";

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-social-blue to-social-light-blue text-white p-8 md:p-12 flex flex-col justify-center md:w-1/2">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Connect. Share. Converse.
          </h1>
          <p className="text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join our social community to share moments, connect with friends, and engage in meaningful conversations.
          </p>
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="flex items-center">
              <span className="bg-white/20 rounded-full p-1 mr-3">✓</span>
              Share photos and updates with friends
            </p>
            <p className="flex items-center">
              <span className="bg-white/20 rounded-full p-1 mr-3">✓</span>
              Connect with like-minded individuals
            </p>
            <p className="flex items-center">
              <span className="bg-white/20 rounded-full p-1 mr-3">✓</span>
              Engage in meaningful conversations
            </p>
          </div>
        </div>
      </div>
      
      {/* Auth Section */}
      <div className="p-8 md:p-12 flex items-center justify-center md:w-1/2">
        <div className="w-full max-w-md">
          {showAuth ? (
            <AuthForm />
          ) : (
            <div className="text-center space-y-6 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-800">
                Welcome to SocialApp
              </h2>
              <p className="text-gray-600">
                Join thousands of users connecting and sharing moments that matter.
              </p>
              <div className="pt-4 space-y-3">
                <Button 
                  onClick={() => setShowAuth(true)}
                  className="w-full bg-social-blue hover:bg-social-light-blue py-6 text-lg"
                >
                  Get Started
                </Button>
                <p className="text-sm text-gray-500 pt-4">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
