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
      className="block p-5 border cursor-pointer !text-black !no-underline rounded-xl shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
      href={href}
      to={to}
      toTab={toTab}
    >
      <div className="flex items-center">
        {
          Boolean(contentIcon) && (
            <NextImage
              className={title ? 'w-10 h-10 mr-5' : 'w-7 h-7 mr-4'}
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
              <div className="text-lg font-semibold">
                {title}
              </div>
            )
          }
          <div
            className={cx('text-md', title ? 'text-gray-700' : 'text-black')}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </Link>
  )
}
