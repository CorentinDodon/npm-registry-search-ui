import { Dispatch, SetStateAction } from 'react'
import { PackageListInterface } from '@/interfaces/PackageListInterface'

export const searchNpmRegistry = async (
  search: string,
  paginationModel: { page: number; pageSize: number },
  setPackageList: Dispatch<SetStateAction<PackageListInterface>>
) => {
  try {
    const res = await fetch(
      'https://registry.npmjs.org/-/v1/search?text=' +
        search +
        '&size=' +
        paginationModel.pageSize +
        '&from=' +
        paginationModel.pageSize * paginationModel.page,
      {
        method: 'GET',
      }
    )
    const data = await res.json()
    setPackageList(data)
  } catch (err) {
    console.log(err)
  }
}
