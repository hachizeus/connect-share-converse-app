
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, PlusCircle, Bell, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const location = useLocation();
  const [notifications, setNotifications] = useState(3);

  const navItems = [
    { name: "Home", path: "/feed", icon: Home },
    { name: "Profile", path: "/profile", icon: User },
    { name: "Create", path: "/create", icon: PlusCircle },
    { 
      name: "Notifications", 
      path: "/notifications", 
      icon: Bell,
      badge: notifications 
    },
    { name: "Messages", path: "/messages", icon: MessageSquare }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 md:px-4 md:top-0 md:bottom-auto z-10">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <div className="md:flex items-center mr-4 hidden">
          <Link to="/feed" className="text-xl font-bold text-social-blue">
            SocialApp
          </Link>
        </div>

        <div className="flex justify-between items-center w-full md:justify-end">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className="relative flex flex-col items-center mx-2"
            >
              <Button
                variant={isActive(item.path) ? "default" : "ghost"}
                size="icon"
                className={`${
                  isActive(item.path) 
                    ? "bg-social-blue text-white" 
                    : "text-gray-500 hover:text-social-blue"
                }`}
              >
                <item.icon size={20} />
                {item.badge && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center bg-red-500 text-white rounded-full w-4 h-4 text-xs">
                    {item.badge}
                  </span>
                )}
              </Button>
              <span className="text-xs mt-1 hidden md:block">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
