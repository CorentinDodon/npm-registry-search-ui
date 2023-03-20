import { useState } from 'react'
import Head from 'next/head'
import Grid from '@mui/material/Grid'
import SearchButton from '@/components/SearchButton'
import CustomAppBar from '@/components/CustomAppBar'
import PackageDataGrid from '@/components/PackageDataGrid'

export default function Home() {
  const [search, setSearch] = useState('')

  const handleSearch = async (e: React.FormEvent, search: string) => {
    e.preventDefault()
    setSearch(search)
  }

  return (
    <>
      <Head>
        <title>NPM Registry Explorer</title>
        <meta name="description" content="NPM Registry Explorer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CustomAppBar />
        <Grid sx={{ p: 2 }}>
          <SearchButton submit={handleSearch} />
          <PackageDataGrid search={search} />
        </Grid>
      </div>
    </>
  )
}
