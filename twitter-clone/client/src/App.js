import React from 'react';
import { Container, CssBaseline, Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import SidebarNav from './components/SidebarNav';
import Tweet from './components/Tweet';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters>
        <Box sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column',
          bgcolor: 'background.default'
        }}>
          {/* Header */}
          <Box sx={{ 
            py: 2,
            px: 3,
            borderBottom: 1,
            borderColor: 'divider',
            position: 'sticky',
            top: 0,
            bgcolor: 'background.paper',
            zIndex: 1
          }}>
            <Typography variant="h4" sx={{ 
              fontWeight: 'bold',
              color: 'primary.main'
            }}>
              Twitter Clone
            </Typography>
          </Box>

          {/* Main Content */}
          <Box sx={{
            display: 'flex',
            flexGrow: 1
          }}>
            {/* Left Sidebar */}
            <Box sx={{
              width: 250,
              pr: 2,
              borderRight: 1,
              borderColor: 'divider',
              display: { xs: 'none', md: 'block' }
            }}>
              <SidebarNav />
            </Box>

            {/* Center Feed */}
            <Box sx={{
              flexGrow: 1,
              maxWidth: 600,
              borderRight: { md: 1 },
              borderLeft: { md: 1 },
              borderColor: 'divider',
              minHeight: '100vh'
            }}>
              <Tweet 
                user={{ name: "Elon Musk", username: "elonmusk" }} 
                content="Just another day revolutionizing the world! 🚀" 
              />
              <Tweet 
                user={{ name: "Bill Gates", username: "BillGates" }} 
                content="Climate change is the challenge of our lifetime. We need to act now." 
              />
            </Box>

            {/* Right Sidebar */}
            <Box sx={{
              width: 300,
              pl: 2,
              display: { xs: 'none', lg: 'block' }
            }}>
              <Typography variant="h6" sx={{ p: 2, fontWeight: 'bold' }}>
                What's happening
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;