import React from "react";
import PostCard from "./components/postcard";
export const dynamic ="force-dynamic";
function page() {
  return (
    <div className="  flex flex-col justify-center items-center my-3 gap-2  mx-auto  p-3" >
      <PostCard />
    
    </div>
  );
}

export default page;
