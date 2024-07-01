import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PostCard from '../PostCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MainContainer() {
  return (
    <Box display={'flex'} justifyContent={'center'} align sx={{ width: '100%', mt:'3rem'}}>
      <Grid container  justifyContent={'center'} alignItems={'start'} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={0} md={3}>
          <Item>1</Item>
        </Grid>

        <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'} item xs={12} md={9}>
         <PostCard></PostCard>
         <PostCard></PostCard>
         <PostCard></PostCard>
         <PostCard></PostCard>
         
        </Grid>
        
      </Grid>
    </Box>
  );
}