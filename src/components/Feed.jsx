import { Box } from '@mui/material';
import Post from './Post';

const Feed = () => {
  return (
    <Box
      sx={{
        flex: 4,
        padding: 1,
      }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
