import { getPackageDetails } from '@/api/npm-registry'
import Head from 'next/head'
import CustomAppBar from '@/components/CustomAppBar'
import PackageDetails from '@/components/PackageDetails'
import Container from '@mui/material/Container'

export default function Package({ packageDetails }) {
  return (
    <>
      <Head>
        <title>Package · {packageDetails.name}</title>
        <meta name="description" content="NPM Registry Explorer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomAppBar />
      <Container sx={{ p: 2 }}>
        <PackageDetails packageDetails={packageDetails} />
      </Container>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const packageDetails = await getPackageDetails(params.id)
  return {
    props: {
      packageDetails,
    },
  }
}
