import cx from 'clsx'
import { Link } from 'components'


type Props = {
  className?: string
  title: string
  href?: string
  to?: string
  toTab?: string
}

export function Button(props: Props) {
  const { className, title, href, to, toTab } = props

  const aProps: any = {
    className: cx('inline-flex py-2.5 px-6 text-md !text-white !no-underline border border-blue-600 bg-blue-600 rounded-lg cursor-pointer shadow-xl duration-200 select-none hover:bg-blue-500', className),
    href,
    to,
    toTab,
  }

  return (
    <Link {...aProps}>
      {title}
    </Link>
  )
}
