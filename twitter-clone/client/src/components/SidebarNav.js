import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  Home,
  Tag,
  Notifications,
  Mail,
  Bookmark,
  ListAlt,
  Person,
  MoreHoriz,
} from "@mui/icons-material";

export default function SidebarNav() {
  return (
    <List>
      {[
        { text: "Home", icon: <Home /> },
        { text: "Explore", icon: <Tag /> },
        { text: "Notifications", icon: <Notifications /> },
        { text: "Messages", icon: <Mail /> },
        { text: "Bookmarks", icon: <Bookmark /> },
        { text: "Lists", icon: <ListAlt /> },
        { text: "Profile", icon: <Person /> },
        { text: "More", icon: <MoreHoriz /> },
      ].map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
