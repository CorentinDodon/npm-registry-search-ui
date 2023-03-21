import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  gridClasses,
} from '@mui/x-data-grid'
import { searchNpmRegistry } from '@/api/npm-registry'
import Link from 'next/link'
import { useStateContext } from '@/context'

export default function PackageDataGrid() {
  const {
    packageList,
    setPackageList,
    paginationModel,
    setPaginationModel,
    search,
  } = useStateContext()
  const [isLoading, setIsLoading] = useState(false)

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Package Name',
      flex: 0.2,
      valueGetter: (params) => {
        return params.row.package.name
      },
    },
    {
      field: 'author',
      headerName: 'Author',
      flex: 0.2,
      valueGetter: (params) => {
        return params.row.package.author
          ? params.row.package.author.name
          : params.row.package.publisher.username
      },
    },
    {
      field: 'version',
      headerName: 'Version',
      flex: 0.2,
      valueGetter: (params) => {
        return params.row.package.version
      },
    },
    {
      field: 'last_updated',
      headerName: 'Last updated',
      flex: 0.2,
      valueGetter: (params) => {
        const date = new Date(params.row.package.date)
        return date.toLocaleString()
      },
    },
    {
      field: 'visualize',
      headerName: 'Action',
      flex: 0.1,
      renderCell: ({ row }: Partial<GridRowParams>) => (
        <Link href={`/package/${encodeURIComponent(row.package.name)}`}>
          <Button>Visualize</Button>
        </Link>
      ),
    },
  ]

  useEffect(() => {
    if (!search) return
    searchNpmRegistry(search, paginationModel, setPackageList, setIsLoading)
  }, [search, paginationModel])

  return (
    <DataGrid
      rows={packageList.objects}
      getRowId={(row) => row.package.name}
      columns={columns}
      autoHeight
      rowSelection={false}
      loading={isLoading}
      rowCount={packageList.total}
      pageSizeOptions={[10, 20, 50, 100]}
      paginationModel={paginationModel}
      paginationMode="server"
      onPaginationModelChange={setPaginationModel}
      sx={{
        display: 'flex',
        width: '90%',
        margin: 'auto',
        [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
          outline: 'none',
        },
        [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
          {
            outline: 'none',
          },
      }}
    />
  )
}
