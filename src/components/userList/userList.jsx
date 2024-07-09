import { useState, useEffect } from 'react';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import  axios  from 'axios';

export default function UserList() {
  const[users,setUsers]=useState([]);
  
  useEffect(()=>{
       
    const fetchUser= async()=>{
            try{
                 const response= await axios.get('https://dummyapi.io/data/v1/user',{
                    
                    headers:{
                        'app-id':import.meta.env.VITE_APP_ID
                    }
                 });

                 setUsers(response.data.data);
                 console.log(response.data.data);

            }

            catch (error){
                console.error("fetch error",error);
            }
    }
    fetchUser();

  },[])


  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user.id}`;
        return (
          <ListItem
            key={user.id}
           
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${user.firstName}`}
                  src={user.picture}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={user.firstName+" "+user.lastName} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}