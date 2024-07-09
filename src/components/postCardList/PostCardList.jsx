import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";



function PostCardList()
{
     const[posts,setPosts]=useState([]);
     
     useEffect(()=>{
        const fetchPosts= async()=>{
            try{
                const response = await axios.get('https://dummyapi.io/data/v1/post',{
                    headers: {
                        'app-id':import.meta.env.VITE_APP_ID
                    }
                });
                setPosts(response.data.data);
                //console.log(response.data.data);
            }

        

            catch(error){
                console.error("error fetching posts",error);
            }

        }

        fetchPosts();
     },[])

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
