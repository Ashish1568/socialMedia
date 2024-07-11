import { useContext, useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";
import PostsContext from "../../providers/PostsProviders";



function PostCardList()
{
    const{posts,setPosts}=useContext(PostsContext);
     
    

    return(
        posts.map((post)=><PostCard key={post.id}
                                    image={post.image} 
                                    authorFirstName={post.owner.firstName}
                                    content={post.text}
                                    fullName={post.owner.firstName+" "+post.owner.lastName}
                                    >

                                    </PostCard>)
    )
}

export default PostCardList;
