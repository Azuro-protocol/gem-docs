import { Link } from 'components'


type NavItemProps = {
  children: any
  to?: string
  toTab?: string
}

function NavItem({ children, to, toTab }: NavItemProps) {

  return (
    <Link
      className="nx-text-sm nx-relative -nx-ml-2 nx-whitespace-nowrap nx-p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
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
    <footer className="nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900 print:nx-bg-transparent">
      <div className="nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center py-6 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]">
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
