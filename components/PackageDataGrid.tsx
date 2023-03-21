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
import { alpha, styled } from '@mui/material/styles'

const ODD_OPACITY = 0.2

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}))

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
    <StripedDataGrid
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
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
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
        '.MuiDataGrid-columnHeaders': {
          backgroundColor: 'rgba(150, 152, 154, 0.8)',
          fontSize: 18,
        },
        '.MuiDataGrid-columnSeparator': {
          color: 'rgba(44, 46, 48, 0.8)',
        },
      }}
    />
  )
}
