
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Image, Smile, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CreatePostForm = () => {
  const { toast } = useToast();
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would upload to a cloud storage
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim() && !image) {
      toast({
        title: "Empty post",
        description: "Please add some text or an image to your post",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Post created!",
        description: "Your post has been published successfully"
      });
      setContent("");
      setImage(null);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="social-card p-4 mb-6">
      <div className="flex space-x-3">
        <Avatar>
          <img 
            src="/placeholder.svg" 
            alt="Your profile" 
            className="object-cover w-full h-full"
          />
        </Avatar>
        <div className="flex-1">
          <Textarea
            placeholder="What's on your mind?"
            className="resize-none mb-3 min-h-[100px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          
          {image && (
            <div className="relative mb-3">
              <img 
                src={image} 
                alt="Upload preview" 
                className="rounded-md max-h-80 object-contain bg-gray-100 w-full"
              />
              <Button 
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2 opacity-80"
                onClick={() => setImage(null)}
              >
                Remove
              </Button>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="text-social-blue"
                onClick={() => document.getElementById("image-upload")?.click()}
              >
                <Image size={18} className="mr-1" />
                Photo
              </Button>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
              
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="text-social-blue"
              >
                <Smile size={18} className="mr-1" />
                Feeling
              </Button>
              
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="text-social-blue"
              >
                <MapPin size={18} className="mr-1" />
                Location
              </Button>
            </div>
            
            <Button 
              type="submit" 
              className="bg-social-blue hover:bg-social-light-blue"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Posting..." : "Post"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreatePostForm;
