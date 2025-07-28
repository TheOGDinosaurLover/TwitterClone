import { Avatar, Box, Typography, IconButton } from "@mui/material";
import { Favorite, Repeat, ChatBubbleOutline, Share } from "@mui/icons-material";

export default function Tweet({ content, user }) {
  return (
    <Box
      sx={{
        p: 3,
        borderBottom: 1,
        borderColor: "divider",
        "&:hover": {
          backgroundColor: "action.hover",
        },
      }}>
      <Box sx={{ display: "flex" }}>
        <Avatar sx={{ mr: 2 }} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography fontWeight="bold">{user.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            @{user.username} · 2h
          </Typography>
          <Typography sx={{ mt: 1, mb: 2 }}>{content}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton>
              <ChatBubbleOutline fontSize="small" />
            </IconButton>
            <IconButton>
              <Repeat fontSize="small" />
            </IconButton>
            <IconButton>
              <Favorite fontSize="small" />
            </IconButton>
            <IconButton>
              <Share fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
