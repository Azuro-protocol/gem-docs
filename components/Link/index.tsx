import React from 'react'
import NextLink from 'next/link'
import cx from 'clsx'


type Props = {
  children: any
  className?: string
  href?: string
  to?: string
  toTab?: string
}

export function Link(props: Props) {
  const { children, className, href, to, toTab } = props

  const nodeProps: any = {
    className: cx('nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:under]', className),
    href: href || to || toTab,
    target: toTab ? '_blank' : null,
    rel: toTab ? 'noreferrer' : null,
  }

  const node = to ? NextLink : 'a'

  return React.createElement(node, nodeProps, children)
}
