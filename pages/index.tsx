import Head from 'next/head'
import Grid from '@mui/material/Typography'
import Paper from '@mui/material/Toolbar'
import SearchButton from '@/components/SearchButton'
import CustomAppBar from '@/components/CustomAppBar'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import type {} from '@mui/x-data-grid/themeAugmentation'

const rows: GridRowsProp = [
  { id: 1, package_name: 'Hello', author: 'World', last_updated: '12-01-2020' },
  {
    id: 2,
    package_name: 'DataGridPro',
    author: 'is Awesome',
    last_updated: '12-01-2020',
  },
  {
    id: 3,
    package_name: 'MUI',
    author: 'is Amazing',
    last_updated: '12-01-2020',
  },
]

const columns: GridColDef[] = [
  { field: 'package_name', headerName: 'Package Name', flex: 0.2 },
  { field: 'author', headerName: 'Author', flex: 0.2 },
  { field: 'last_updated', headerName: 'Last updated', flex: 0.2 },
  { field: 'visualize', headerName: 'Visualize package', flex: 0.1 },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>NPM Registry Explorer</title>
        <meta name="description" content="NPM Registry Explorer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomAppBar />

      <SearchButton />
      <Grid>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            autoHeight
            loading={false}
            sx={{ width: '80%' }}
          />
        </Paper>
      </Grid>
    </>
  )
}
