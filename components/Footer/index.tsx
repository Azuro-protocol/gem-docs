import NextLink from 'next/link'

function NavItem({ children, to }) {

  return (
    <NextLink className="nx-text-sm contrast-more:nx-text-gray-700 contrast-more:dark:nx-text-gray-100 nx-relative -nx-ml-2 nx-whitespace-nowrap nx-p-2 nx-text-gray-600 hover:nx-text-gray-800 dark:nx-text-gray-400 dark:hover:nx-text-gray-200" href={to}>{children}</NextLink>
  )
}

export default function Footer() {

  return (
    <footer className="nx-bg-gray-100 nx-pb-[env(safe-area-inset-bottom)] dark:nx-bg-neutral-900 print:nx-bg-transparent">
      <div className="nx-mx-auto nx-flex nx-max-w-[90rem] nx-justify-center py-6 nx-text-gray-600 dark:nx-text-gray-400 md:nx-justify-start nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]">
        <div className="flex items-center justify-between md:justify-start w-full">
          <div className="md:mr-14">{new Date().getFullYear()} © <a href="https://azuro.org" target="_blank">Azuro</a></div>
          <div className="flex space-x-2">
            <NavItem to="/terms-of-use">Terms of Use</NavItem>
            <NavItem to="/privacy-policy">Privacy Policy</NavItem>
          </div>
        </div>
      </div>
    </footer>
  )
}
