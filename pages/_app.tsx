import type { ReactElement } from 'react'
import type { AppProps } from 'next/app'

import '../style.css'
import { Callout } from 'components'


export default function Nextra({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Callout className="justify-center" type="warning">
        <b>Important! We’ve moved to V3!</b> This documentation is for V2 only and will be updated in May.
      </Callout>
      <Component {...pageProps} />
    </>
  )
}
