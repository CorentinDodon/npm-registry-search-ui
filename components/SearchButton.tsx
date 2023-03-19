import Paper from '@mui/material/Toolbar'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchButton() {
  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        margin: 'auto',
        width: 400,
        pb: 4,
      }}
    >
      <TextField
        sx={{
          width: 400,
        }}
        label="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Paper>
  )
}
