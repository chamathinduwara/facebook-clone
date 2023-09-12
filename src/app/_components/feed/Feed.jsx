import CreatePost from "../createpost/CreatePost";
import Posts from "../posts/Posts";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
        {/* Create Post */}
        <CreatePost></CreatePost>
        {/* pages */}
        <Posts></Posts>
      </div>
    </div>
  );
};

export default Feed;
