import React from 'react'
import cx from 'clsx'


type Props = {
  type: 'info' | 'warning' | 'alert' | 'feature'
}

export function Callout(props: React.PropsWithChildren<Props>) {
  const { children, type } = props

  const rootClassName = cx('flex items-start mt-6 p-4 border rounded-md shadow-sm', {
    'bg-white border-neutral-900': type === 'info',
    'bg-orange-100 border-orange-400 text-orange-900': type === 'warning',
    'bg-red-100 border-red-400 text-red-900': type === 'alert',
    'bg-sky-50 border-sky-400 text-sky-900': type === 'feature',
  })

  const icon = ({
    'info': '👉',
    'warning': '🚨',
    'alert': '⛔',
    'feature': '💎',
  })[type]

  return (
    <div className={rootClassName}>
      <div className="mr-4 text-xl">{icon}</div>
      <div>
        {children}
      </div>
    </div>
  )
}
