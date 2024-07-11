import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import PostsContext from '../../providers/PostsProviders';
import { useContext } from 'react';

function Input()
{
    const[postText,setPostText]=useState("");
    const[imageUrl,setImageUrl]=useState("");
    const{posts,setPosts}=useContext(PostsContext)

    async function createPost(event) {
        event.preventDefault();  // Prevent the default form submission behavior

        const postData = {
            owner: '60d0fe4f5311236168a109ca',
            text: postText,
            image: imageUrl
        };

        try {
            const response = await axios.post('https://dummyapi.io/data/v1/post/create', postData, {
                headers: {
                    'app-id': '64a8364085d64317b2c97c7c',
                    'Content-Type': 'application/json'
                }
            });

            console.log("Post created successfully:", response.data);
            setPosts([response.data,...posts]);
            
            // Optionally, clear the input fields after successful post creation
            setPostText("");
            setImageUrl("");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    }

    return(
        <Box 
        
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
            fullWidth
            id="outlined-basic"
            label="next post"
            value={postText}
            onChange={(e)=>{setPostText(e.target.value)}}
            
            variant="outlined" />

        <TextField 
            fullWidth 
            id="outlined-basic" 
            label="image" 
            onChange={(e)=>{setImageUrl(e.target.value)}}
            variant="outlined" />


        <Button onClick={createPost} variant="contained">Submit</Button>
        

        
        
      </Box>
    )
   
}

export default Input;