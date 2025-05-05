
import { useState } from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  MessageSquare, 
  Share,
  MoreHorizontal
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

export interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    username: string;
  };
  content: string;
  image?: string;
  createdAt: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [liked, setLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");

  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      // In a real app, this would send the comment to an API
      setComment("");
    }
  };

  return (
    <Card className="mb-4 social-card animate-enter">
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Avatar>
              <img 
                src={post.author.avatar || '/placeholder.svg'} 
                alt={post.author.name}
                className="object-cover w-full h-full"
              />
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-xs text-gray-500">@{post.author.username}</p>
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                Save post
              </DropdownMenuItem>
              <DropdownMenuItem>
                Report
              </DropdownMenuItem>
              <DropdownMenuItem>
                Hide
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <p className="text-sm mb-3">{post.content}</p>
        {post.image && (
          <div className="rounded-md overflow-hidden bg-gray-100 aspect-square mb-3">
            <img 
              src={post.image} 
              alt="Post" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <p className="text-xs text-gray-500">{post.createdAt}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex flex-col">
        <div className="flex justify-between items-center w-full border-t border-b py-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center ${liked ? 'text-red-500' : 'text-gray-500'}`}
            onClick={handleLike}
          >
            <Heart size={18} className={liked ? "fill-current" : ""} />
            <span className="ml-1">{likesCount}</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center text-gray-500"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageSquare size={18} />
            <span className="ml-1">{post.comments}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="flex items-center text-gray-500">
            <Share size={18} />
          </Button>
        </div>
        
        {showComments && (
          <div className="w-full mt-3">
            <form onSubmit={handleSubmitComment} className="flex space-x-2">
              <Input
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="sm">Post</Button>
            </form>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default PostCard;
