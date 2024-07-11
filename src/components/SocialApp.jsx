import PostCard from "./PostCard"; 
import NavBar from "./navigation/Navbar"
import MainContainer from "./mainContainer/MainContainer";
import Input from "./Input/Input";
import PostsContext from "../providers/PostsProviders";
import { useState,useEffect } from "react";
import axios from "axios";
function SocialApp(){
  
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        const fetchPosts= async()=>{
            try{
                const response = await axios.get('https://dummyapi.io/data/v1/post',{
                    headers: {
                        'app-id':import.meta.env.VITE_APP_ID
                    }
                });
                setPosts([...response.data.data]);
                console.log(response.data.data);
            }

        

            catch(error){
                console.error("error fetching posts",error);
            }

        }

        fetchPosts();
     },[])

    return (
        <div>

            welcome
            <PostsContext.Provider value={{posts,setPosts}}>
                <NavBar></NavBar>
                <Input></Input>
                <MainContainer ></MainContainer>
            </PostsContext.Provider>
            
        </div>
    )
}

export default SocialApp;