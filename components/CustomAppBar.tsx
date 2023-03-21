import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import HomeIcon from '@mui/icons-material/Home'
import Link from '@mui/material/Link'
import NextLink from 'next/link'

export default function CustomAppBar() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Link
            sx={{ display: 'flex', alignItems: 'center' }}
            underline="none"
            color="inherit"
            href="/"
            component={NextLink}
          >
            <HomeIcon />
            <Typography variant="h6" component="div">
              Search NPM Registry
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
