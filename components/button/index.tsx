import cx from 'clsx'

export function Button(props) {
  const { className, title, href, to } = props

  const aProps: any = {
    className: cx('inline-flex py-3 px-6 text-md text-white border border-blue-600 bg-blue-600 rounded-lg cursor-pointer shadow-xl duration-200 select-none hover:bg-blue-500', className),
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
