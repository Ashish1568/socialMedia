import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../userList/userList';


export default function MainContainer() {
  return (
    <Box display sx={{ mt:'3rem'}}>
      <Grid container  justifyContent={'center'} alignItems={'start'}  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={0} md={3} container justifyContent="center">
        <UserList></UserList>
        </Grid>

        <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'} item xs={12} md={3}>
          <PostCardList ></PostCardList>
         
        </Grid>
        
      </Grid>
    </Box>
  );
}
