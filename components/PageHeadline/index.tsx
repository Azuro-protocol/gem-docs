import React from 'react'


type Props = {
  title: string
  subTitle?: string
}

export function PageHeadline(props: Props) {
  const { title, subTitle } = props

  return (
    <div>
      <div className="_mt-2 _text-4xl _font-bold _tracking-tight">{title}</div>
      {
        Boolean(subTitle) && (
          <div className="mt-1 text-xl text-gray-400">{subTitle}</div>
        )
      }
    </div>
  )
}
