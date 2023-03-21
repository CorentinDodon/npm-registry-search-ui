export interface PackageDetailsInterface {
  name: string
  description: string
  versions: object
  time: {
    modified: string
  }
  'dist-tags': {
    latest: string
  }
  readme: string
}
