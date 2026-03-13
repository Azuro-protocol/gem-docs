import React from 'react'
import cx from 'clsx'


type Props = {
  className?: string
}

export function Formula(props: React.PropsWithChildren<Props>) {
  const { children, className } = props

  return (
    <div className={cx('max-w-full overflow-auto my-10 text-lg', className)}>
      {children}
    </div>
  )
}
