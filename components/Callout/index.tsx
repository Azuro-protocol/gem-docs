import React from 'react'
import cx from 'clsx'


type Props = {
  icon?: string
  type: 'info' | 'warning' | 'alert' | 'feature' | 'reference'
}

export function Callout(props: React.PropsWithChildren<Props>) {
  let { children, icon, type } = props

  const rootClassName = cx('flex items-start mt-6 p-4 border rounded-md shadow-sm', {
    'bg-blue-50 border-blue-300 text-blue-900': type === 'info',
    'bg-amber-50 border-amber-300 text-amber-900': type === 'warning',
    'bg-red-50 border-red-300 text-red-900': type === 'alert',
    'bg-sky-50 border-sky-300 text-sky-900': type === 'feature',
    'italic': type === 'reference',
  })

  icon = icon || ({
    'info': 'ℹ️',
    'warning': '🚧',
    'alert': '🚨',
    'feature': '💎',
  })[type]

  return (
    <div className={rootClassName}>
      <div className="mr-4 text-xl font-bold">{icon}</div>
      <div>
        {children}
      </div>
    </div>
  )
}
