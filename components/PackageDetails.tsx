import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import '@uiw/react-markdown-preview/esm/styles/markdown.css'
import { PackageDetailsInterface } from '@/interfaces/PackageDetailsInterface'
import dynamic from 'next/dynamic'

const MarkdownPreview = dynamic(
  () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
  { ssr: false }
)

type PackageDetails = {
  packageDetails: PackageDetailsInterface
}
export default function PackageDetails({ packageDetails }: PackageDetails) {
  const lastUpdated = new Date(packageDetails.time.modified)
  return (
    <>
      <Paper sx={{ p: 2, alignItems: 'center' }} elevation={4}>
        <Grid container sx={{ pb: 2 }} alignItems={'baseline'}>
          <Grid item sx={{ pr: 1 }}>
            <Typography variant="h5">{packageDetails.name}</Typography>{' '}
          </Grid>
          <Grid item style={{ flexGrow: '1' }}>
            <Typography color="text.secondary">
              @
              {packageDetails.versions[packageDetails['dist-tags'].latest]
                .author
                ? packageDetails.versions[packageDetails['dist-tags'].latest]
                    .author.name
                : packageDetails.versions[packageDetails['dist-tags'].latest]
                    ._npmUser.name}
            </Typography>
          </Grid>
          <Grid item sx={{ display: 'flex' }}>
            <Link
              sx={{ pr: 1 }}
              variant="body2"
              target="_blank"
              rel="noopener"
              href={
                packageDetails.versions[packageDetails['dist-tags'].latest]
                  .homepage
              }
            >
              {packageDetails['dist-tags'].latest}
            </Link>
            <Typography variant="body2">
              • {lastUpdated.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems={'center'}>
          <Grid item sx={{ flexGrow: 1 }}>
            <Typography>{packageDetails.description}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" component="span">
              {
                packageDetails.versions[packageDetails['dist-tags'].latest]
                  .license
              }
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Grid sx={{ p: 3 }} container>
        <MarkdownPreview
          wrapperElement={{
            'data-color-mode': 'light',
          }}
          source={packageDetails.readme}
        ></MarkdownPreview>
      </Grid>
    </>
  )
}
