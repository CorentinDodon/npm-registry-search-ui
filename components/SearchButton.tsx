import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import { useStateContext } from '@/context'
import { useEffect, useState } from 'react'

export default function SearchButton() {
  const { search, setSearch } = useStateContext()

  const [formSearch, setFormSearch] = useState()
  const submit = async (e: React.FormEvent, search: string) => {
    e.preventDefault()
    setSearch(search)
  }

  useEffect(() => {
    setFormSearch(search)
  }, [search])

  return (
    <form onSubmit={(e) => submit(e, formSearch)}>
      <TextField
        sx={{
          display: 'flex',
          margin: 'auto',
          width: 400,
          pb: 4,
        }}
        InputLabelProps={{ shrink: true }}
        label="Search NPM package"
        value={formSearch}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFormSearch(event.target.value)
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
