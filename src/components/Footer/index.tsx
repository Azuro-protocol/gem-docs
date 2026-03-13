import { Link } from 'components'


type NavItemProps = {
  children: React.ReactNode
  to?: string
  toTab?: string
}

function NavItem({ children, to, toTab }: NavItemProps) {

  return (
    <Link
      className="text-sm relative -ml-2 whitespace-nowrap p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      to={to}
      toTab={toTab}
      customColor
    >
      {children}
    </Link>
  )
}

export default function Footer() {

  return (
    <footer className="bg-gray-100 pb-[env(safe-area-inset-bottom)] dark:bg-neutral-900 print:bg-transparent">
      <div className="mx-auto flex max-w-360 justify-center py-6 text-gray-600 dark:text-gray-400 md:justify-start pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:justify-start w-full">
          <div className="mt-2 md:mt-0 md:mr-14 text-sm">{new Date().getFullYear()} © <a href="https://azuro.org" target="_blank">Azuro</a></div>
          <div className="flex space-x-2">
            <NavItem to="/terms-of-use">Terms of Use</NavItem>
            <NavItem to="/privacy-policy">Privacy Policy</NavItem>
            <NavItem toTab="https://azuro-protocol.notion.site/Azuro-Media-Kit-7278f3666bf448488441b178ed68256f">Media Kit</NavItem>
          </div>
        </div>
      </div>
    </footer>
  )
}
