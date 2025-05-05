
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import NavBar from "./components/layout/NavBar";
import CreatePostForm from "./components/feed/CreatePostForm";

const queryClient = new QueryClient();

// Simple auth check - in a real app this would verify tokens etc.
const isAuthenticated = () => {
  // For demo purposes, consider everyone authenticated
  // This would normally check for tokens in localStorage/cookies
  const currentPath = window.location.pathname;
  return currentPath !== "/" && currentPath !== "/index.html";
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route 
            path="/feed" 
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          
          {/* Add routes for other pages */}
          <Route 
            path="/create" 
            element={
              <ProtectedRoute>
                <div className="social-container pb-20 md:pb-0 pt-2 md:pt-20">
                  <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
                  <CreatePostForm />
                </div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/notifications" 
            element={
              <ProtectedRoute>
                <div className="social-container pb-20 md:pb-0 pt-2 md:pt-20">
                  <h1 className="text-2xl font-bold mb-6">Notifications</h1>
                  <div className="social-card p-8 text-center">
                    <p className="text-gray-500">No new notifications</p>
                  </div>
                </div>
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/messages" 
            element={
              <ProtectedRoute>
                <div className="social-container pb-20 md:pb-0 pt-2 md:pt-20">
                  <h1 className="text-2xl font-bold mb-6">Messages</h1>
                  <div className="social-card p-8 text-center">
                    <p className="text-gray-500">No messages yet</p>
                  </div>
                </div>
              </ProtectedRoute>
            } 
          />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
