import { Link } from 'components'


type NavItemProps = {
  children: any
  to?: string
  toTab?: string
}

function NavItem({ children, to, toTab }: NavItemProps) {

  return (
    <Link
      className="_text-sm _relative -_ml-2 _whitespace-nowrap _p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
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
    <footer className="_bg-gray-100 _pb-[env(safe-area-inset-bottom)] dark:_bg-neutral-900 print:_bg-transparent">
      <div className="_mx-auto _flex _max-w-[90rem] _justify-center py-6 _text-gray-600 dark:_text-gray-400 md:_justify-start _pl-[max(env(safe-area-inset-left),1.5rem)] _pr-[max(env(safe-area-inset-right),1.5rem)]">
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
