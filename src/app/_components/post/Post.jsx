import Image from "next/image";

const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex space-x-2 items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
            alt="Profile Picture"
            className="rounded-full h-10 w-10"
          />
          <div>
            <p className="font-medium">Chamath</p>
            <p className="text-xs text-gray-500">08-09-2023</p>
          </div>
        </div>
        <p className="py-4">Post Name</p>
      </div>
      <div className="relative h-60 md:h-96 bg-white">
        <Image src="https://unsplash.com/photos/Z55YG0Kzg3g" layout="fill" />
      </div>
    </div>
  );
};

export default Post;
