import Head from 'next/head'
import Grid from '@mui/material/Typography'
import Button from '@mui/material/Button'
import SearchButton from '@/components/SearchButton'
import CustomAppBar from '@/components/CustomAppBar'
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRowParams,
  gridClasses,
} from '@mui/x-data-grid'
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

function visualizePackage(packageName: string) {
  console.log(packageName)
}

const columns: GridColDef[] = [
  { field: 'package_name', headerName: 'Package Name', flex: 0.2 },
  { field: 'author', headerName: 'Author', flex: 0.2 },
  { field: 'last_updated', headerName: 'Last updated', flex: 0.2 },
  {
    field: 'visualize',
    headerName: 'Visualize package',
    flex: 0.1,
    renderCell: ({ row }: Partial<GridRowParams>) => (
      <Button onClick={() => visualizePackage(row.name)}>Action</Button>
    ),
  },
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
      <Grid sx={{ p: 2 }}>
        <SearchButton />
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          loading={false}
          rowSelection={false}
          sx={{
            display: 'flex',
            width: '90%',
            margin: 'auto',
            [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]:
              {
                outline: 'none',
              },
            [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
              {
                outline: 'none',
              },
          }}
        />
      </Grid>
    </>
  )
}
