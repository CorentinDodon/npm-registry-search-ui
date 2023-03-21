import type { AppProps } from 'next/app'
import '@uiw/react-markdown-preview/esm/styles/markdown.css'
import { StateProvider } from '@/context/state'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  )
}
