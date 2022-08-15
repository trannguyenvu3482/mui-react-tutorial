import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const Rightbar = () => {
  return (
    <Box
      sx={{
        flex: 2,
        padding: 2,
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/233" />
          <Avatar alt="Travis Howard" src="https://picsum.photos/202" />
          <Avatar alt="Cindy Baker" src="https://picsum.photos/210" />
          <Avatar alt="Agnes Walker" src="https://picsum.photos/222" />
          <Avatar alt="Trevor Henderson" src="https://picsum.photos/201" />
          <Avatar alt="Trevor Henderson" src="https://picsum.photos/211" />
          <Avatar alt="Trevor Henderson" src="https://picsum.photos/212" />
          <Avatar alt="Trevor Henderson" src="https://picsum.photos/213" />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://picsum.photos/200?random=1" alt="remy" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/200?random=1" alt="remy" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/200?random=1" alt="remy" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/200?random=1" alt="remy" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/200?random=1" alt="remy" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/200?random=1" alt="remy" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/200?random=1" alt="remy" />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://picsum.photos/300" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
