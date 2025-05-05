
import PostCard, { Post } from "./PostCard";

// Sample posts data
const samplePosts: Post[] = [
  {
    id: "1",
    author: {
      name: "Jane Cooper",
      avatar: "/placeholder.svg",
      username: "janecooper"
    },
    content: "Just finished a great hike! The views were absolutely breathtaking. Anyone else love outdoor activities? 🏞️ #NatureLover #Hiking",
    image: "https://source.unsplash.com/photo-1472396961693-142e6e269027",
    createdAt: "2 hours ago",
    likes: 24,
    comments: 5,
    isLiked: false
  },
  {
    id: "2",
    author: {
      name: "Alex Morgan",
      avatar: "/placeholder.svg",
      username: "alexmorgan"
    },
    content: "Working on a new project that I'm really excited about! Can't wait to share more details soon. #NewProject #ComingSoon",
    createdAt: "5 hours ago",
    likes: 42,
    comments: 8,
    isLiked: true
  },
  {
    id: "3",
    author: {
      name: "Taylor Swift",
      avatar: "/placeholder.svg",
      username: "taylorswift"
    },
    content: "My new coding setup is complete! What do you think? 💻 #DeveloperLife #WorkFromHome",
    image: "https://source.unsplash.com/photo-1581091226825-a6a2a5aee158",
    createdAt: "Yesterday",
    likes: 128,
    comments: 24,
    isLiked: false
  }
];

const PostList: React.FC = () => {
  return (
    <div className="space-y-4">
      {samplePosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
