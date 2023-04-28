import NextImage from 'next/image'
import { Link } from 'components'
import cx from 'clsx'


type Props = {
  contentIcon?: string
  title?: string
  text: string
  href?: string
  to?: string
  toTab?: string
}

export function Card(props: Props) {
  const { contentIcon, title, text, href, to, toTab } = props

  return (
    <Link
      className="block p-5 border dark:nx-border-neutral-700 cursor-pointer !no-underline rounded-xl shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
      href={href}
      to={to}
      toTab={toTab}
    >
      <div className="flex items-center">
        {
          Boolean(contentIcon) && (
            <NextImage
              className={title ? 'w-9 h-9 mr-5' : 'w-7 h-7 mr-4'}
              src={contentIcon}
              width="80"
              height="80"
              alt=""
            />
          )
        }
        <div className="space-y-1">
          {
            Boolean(title) && (
              <div className="text-black dark:text-white text-lg font-semibold">
                {title}
              </div>
            )
          }
          <div
            className={cx('text-md', title ? 'text-gray-700 dark:text-gray-400' : 'text-black dark:text-white')}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </Link>
  )
}
