
import CreatePostForm from "@/components/feed/CreatePostForm";
import PostList from "@/components/feed/PostList";

const Feed = () => {
  return (
    <div className="social-container pb-20 md:pb-0 pt-2 md:pt-20">
      <h1 className="text-2xl font-bold mb-6">Your Feed</h1>
      <CreatePostForm />
      <PostList />
    </div>
  );
};

export default Feed;
