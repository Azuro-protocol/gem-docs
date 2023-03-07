export function Link(props) {
  const { children, href, to } = props

  const aProps: any = {
    className: 'nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]',
    href: href || to,
  }

  if (!to && !/mailto/.test(href)) {
    aProps.target = '_blank'
    aProps.rel = 'noreferrer'
  }

  return (
    <a {...aProps}>
      {children}
    </a>
  )
}
