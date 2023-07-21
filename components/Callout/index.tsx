import React from 'react'
import cx from 'clsx'


type Props = {
  icon?: string
  type: 'info' | 'warning' | 'alert' | 'feature' | 'reference'
}

export function Callout(props: React.PropsWithChildren<Props>) {
  let { children, icon, type } = props

  const rootClassName = cx('flex items-start mt-4 p-4 border rounded-md shadow-sm', {
    'bg-blue-50 border-blue-300 text-blue-900 dark:bg-blue-900/40 dark:border-blue-800 dark:text-blue-200': type === 'info',
    'bg-amber-50 border-amber-300 text-amber-900 dark:bg-amber-900/40 dark:border-amber-800 dark:text-orange-300': type === 'warning',
    'bg-red-50 border-red-300 text-red-900 dark:bg-red-900/40 dark:border-red-800 dark:text-red-200': type === 'alert',
    'bg-sky-50 border-sky-300 text-sky-900 dark:bg-sky-900/40 dark:border-sky-800 dark:text-sky-200': type === 'feature',
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
