import Head from 'next/head'
import Grid from '@mui/material/Grid'
import SearchButton from '@/components/SearchButton'
import CustomAppBar from '@/components/CustomAppBar'
import PackageDataGrid from '@/components/PackageDataGrid'
import ScrollToTopFab from '@/components/ScrollToTopFab'

export default function Home() {
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
          <SearchButton />
          <PackageDataGrid />
        </Grid>
      </div>
      <ScrollToTopFab></ScrollToTopFab>
    </>
  )
}
