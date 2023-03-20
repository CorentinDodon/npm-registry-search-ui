import { useState } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'

type SearchButtonProps = {
  submit: (e: React.FormEvent, search: string) => void
}
export default function SearchButton({ submit }: SearchButtonProps) {
  const [search, setSearch] = useState('')

  return (
    <form onSubmit={(e) => submit(e, search)}>
      <TextField
        sx={{
          display: 'flex',
          margin: 'auto',
          width: 400,
          pb: 4,
        }}
        label="Search NPM package"
        value={search}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(event.target.value)
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </form>
  )
}
