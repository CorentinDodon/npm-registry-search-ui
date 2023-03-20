import { getPackageDetails } from '@/api/npm-registry'

export default function PackageDetails({ packageDetails }) {
  return <div>{packageDetails.name}</div>
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'react' } },
      { params: { id: 'eslint' } },
      { params: { id: 'test' } },
    ],
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const packageDetails = await getPackageDetails(params.id)
  return {
    props: {
      packageDetails,
    },
  }
}
