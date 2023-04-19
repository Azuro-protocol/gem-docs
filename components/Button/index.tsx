import cx from 'clsx'


type Props = {
  className?: string
  title: string
  href?: string
  to?: string
}

export function Button(props: Props) {
  const { className, title, href, to } = props

  const aProps: any = {
    className: cx('inline-flex py-2.5 px-6 text-md text-white border border-blue-600 bg-blue-600 rounded-lg cursor-pointer shadow-xl duration-200 select-none hover:bg-blue-500', className),
    href: href || to,
  }

  if (!to && !/mailto/.test(href)) {
    aProps.target = '_blank'
    aProps.rel = 'noreferrer'
  }

  return (
    <a {...aProps}>
      {title}
    </a>
  )
}
