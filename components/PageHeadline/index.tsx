import React from 'react'


type Props = {
  title: string
  subTitle?: string
}

export function PageHeadline(props: Props) {
  const { title, subTitle } = props

  return (
    <div>
      <div className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight">{title}</div>
      {
        Boolean(subTitle) && (
          <div className="mt-1 text-xl text-gray-400">{subTitle}</div>
        )
      }
    </div>
  )
}
