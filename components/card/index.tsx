import cn from 'clsx'
import Link from 'next/link'

import styles from './style.module.css'


export function SectionCard(props) {
  const { title, text, href } = props

  return (
    <Link
      href={href}
      className={cn(
        styles.card,
        'group block p-4 text-current no-underline transition-all duration-200 shadow-sm shadow-gray-100 rounded-lg',
        'border border-gray-200 bg-transparent',
        'dark:border-neutral-800 dark:shadow-none',
        'hover:border-gray-300 hover:bg-slate-50 hover:shadow-md hover:shadow-gray-100',
        'dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:hover:shadow-none',
        'active:shadow-sm active:shadow-gray-200'
      )}
      {...props}
    >
      <span
        className={cn(
          styles.title,
          'text-gray-700 dark:text-neutral-200',
          'group-hover:text-gray-900 dark:group-hover:text-neutral-50'
        )}
      >
        {title}
      </span>
      {
        Boolean(text) && (
          <span className="text-gray-600 dark:text-neutral-300">
            {text}
          </span>
        )
      }
    </Link>
  )
}

export function Card(props) {
  const { title, icon, href } = props

  return (
    <Link
      href={href}
      className={cn(
        styles.card,
        'group flex items-center p-4 overflow-hidden rounded-lg border border-gray-200 bg-transparent text-current no-underline shadow-sm shadow-gray-100 transition-all duration-200 dark:border-neutral-800 dark:shadow-none',
        'hover:border-gray-300 hover:bg-slate-50 hover:shadow-md hover:shadow-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:hover:shadow-none',
        'active:shadow-sm active:shadow-gray-200'
      )}
      {...props}
    >
      {icon}
      <span
        className={cn(
          styles.title,
          'ml-2 text-gray-700 dark:text-neutral-200',
          'hover:text-gray-900 dark:hover:text-neutral-50'
        )}
      >
        {title}
      </span>
    </Link>
  )
}

export function Cards({ children, num, ...props }) {
  return (
    <div
      className={cn(styles.cards, 'mt-4 gap-4')}
      {...props}
      style={{
        '--rows': num || 3,
        ...props.style
      } as any}
    >
      {children}
    </div>
  )
}
