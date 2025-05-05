
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { User, Settings, MessageSquare } from "lucide-react";
import PostCard, { Post } from "../feed/PostCard";

interface UserProfileProps {
  isCurrentUser?: boolean;
}

const UserProfile: React.FC<UserProfileProps> = ({ isCurrentUser = true }) => {
  // Sample user data
  const user = {
    name: "Alex Johnson",
    username: "alexjohnson",
    avatar: "/placeholder.svg",
    bio: "Digital designer, photographer, and traveler. Always looking for the next adventure! ✈️ 📸",
    followers: 1234,
    following: 567,
    posts: 42,
    website: "alexjohnson.design",
    location: "San Francisco, CA"
  };

  // Sample posts
  const userPosts: Post[] = [
    {
      id: "101",
      author: {
        name: user.name,
        avatar: user.avatar,
        username: user.username
      },
      content: "Just redesigned my portfolio website. Check it out and let me know what you think!",
      image: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5", 
      createdAt: "3 days ago",
      likes: 89,
      comments: 12,
      isLiked: false
    },
    {
      id: "102",
      author: {
        name: user.name,
        avatar: user.avatar,
        username: user.username
      },
      content: "Morning coffee and design inspiration. Perfect start to my day!",
      image: "https://source.unsplash.com/photo-1582562124811-c09040d0a901",
      createdAt: "1 week ago",
      likes: 56,
      comments: 3,
      isLiked: true
    }
  ];

  return (
    <div className="space-y-6 animate-enter">
      {/* Cover Image */}
      <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg overflow-hidden relative">
        {isCurrentUser && (
          <Button
            variant="outline"
            size="sm"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
          >
            Update Cover
          </Button>
        )}
      </div>
      
      {/* Profile Info */}
      <div className="px-4 relative">
        <div className="flex justify-between">
          <Avatar className="w-24 h-24 border-4 border-white -mt-12 bg-white">
            <img
              src={user.avatar}
              alt={user.name}
              className="object-cover w-full h-full"
            />
          </Avatar>
          
          <div className="flex space-x-2">
            {isCurrentUser ? (
              <Button variant="outline" size="sm">
                <Settings size={16} className="mr-1" />
                Edit Profile
              </Button>
            ) : (
              <>
                <Button variant="outline" size="sm">
                  <MessageSquare size={16} className="mr-1" />
                  Message
                </Button>
                <Button size="sm" className="bg-social-blue hover:bg-social-light-blue">
                  Follow
                </Button>
              </>
            )}
          </div>
        </div>
        
        <div className="mt-3">
          <h1 className="text-xl font-bold">{user.name}</h1>
          <p className="text-sm text-gray-500">@{user.username}</p>
          
          <p className="mt-3 text-sm">{user.bio}</p>
          
          {user.location && (
            <p className="text-sm text-gray-500 mt-2">
              📍 {user.location}
            </p>
          )}
          
          {user.website && (
            <p className="text-sm text-social-blue mt-1">
              🔗{" "}
              <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                {user.website}
              </a>
            </p>
          )}
          
          <div className="flex space-x-4 mt-4">
            <div>
              <span className="font-semibold">{user.posts}</span>
              <span className="text-gray-500 text-sm ml-1">Posts</span>
            </div>
            <div>
              <span className="font-semibold">{user.followers.toLocaleString()}</span>
              <span className="text-gray-500 text-sm ml-1">Followers</span>
            </div>
            <div>
              <span className="font-semibold">{user.following.toLocaleString()}</span>
              <span className="text-gray-500 text-sm ml-1">Following</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Content */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="likes">Likes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts" className="mt-6 space-y-4">
          {userPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </TabsContent>
        
        <TabsContent value="media" className="mt-6">
          <div className="grid grid-cols-3 gap-1">
            {userPosts.filter(post => post.image).map(post => (
              <div 
                key={`media-${post.id}`} 
                className="aspect-square bg-gray-100 overflow-hidden"
              >
                <img 
                  src={post.image} 
                  alt="Media" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="likes" className="mt-6">
          <div className="text-center py-8 text-gray-500">
            <User size={40} className="mx-auto mb-2 text-gray-300" />
            <p>No liked posts yet</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfile;
