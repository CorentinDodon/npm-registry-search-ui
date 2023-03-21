import { PackageListInterface } from '@/interfaces/PackageListInterface'
import React, { createContext, useState } from 'react'

interface StateProps {
  search: string
  paginationModel: any
  packageList: PackageListInterface
  setSearch: (search: string) => void
  setPaginationModel: (paginationModel: any) => void
  setPackageList: (packageList: any) => void
}

export const StateContext = createContext<StateProps>({
  search: '',
  paginationModel: {
    page: 0,
    pageSize: 10,
  },
  packageList: { objects: [], total: 0 },
  setSearch: () => {},
  setPaginationModel: () => {},
  setPackageList: () => {},
})

export const StateProvider = (props) => {
  const [search, setSearch] = useState('')
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  })
  const [packageList, setPackageList] = useState({ objects: [], total: 0 })

  return (
    <StateContext.Provider
      value={{
        search: search,
        paginationModel: paginationModel,
        packageList: packageList,
        setSearch: setSearch,
        setPaginationModel: setPaginationModel,
        setPackageList: setPackageList,
      }}
    >
      {props.children}
    </StateContext.Provider>
  )
}
