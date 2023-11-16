import React from 'react'
import { Tab, Tabs } from 'nextra-theme-docs'
import { Link } from 'components'


type ContractName =
  'factory'
  | 'lp'
  | 'prematchCore'
  | 'expressCore'
  | 'proxyFront'
  | 'betToken'
  | 'access'
  | 'azuroBet'
  | 'hostCore'
  | 'clientCore'
  | 'relayer'

const config: Record<ContractName, { title: string, link?: string }> = {
  factory: {
    title: 'Factory',
    link: '/contracts/factory',
  },
  lp: {
    title: 'LP',
    link: '/contracts/lp',
  },
  prematchCore: {
    title: 'PrematchCore',
    link: '/contracts/prematch-core',
  },
  expressCore: {
    title: 'BetExpress',
    link: '/contracts/bet-express',
  },
  proxyFront: {
    title: 'ProxyFront',
    link: '/contracts/proxy-front',
  },
  betToken: {
    title: 'Bet Token (ERC20)',
  },
  access: {
    title: 'Access',
    link: '/contracts/access',
  },
  azuroBet: {
    title: 'AzuroBet',
    link: '/contracts/azuro-bet',
  },
  hostCore: {
    title: 'HostCore',
    link: '/contracts/live-host-core',
  },
  clientCore: {
    title: 'ClientCore',
    link: '/contracts/live-client-core',
  },
  relayer: {
    title: 'Relayer',
    link: '/contracts/relayer',
  },
}

const rows: ContractName[] = [
  'factory',
  'lp',
  'prematchCore',
  'expressCore',
  'proxyFront',
  'betToken',
  'access',
  'azuroBet',
  'hostCore',
  'clientCore',
  'relayer'
]

type ContractsTableProps = {
  addresses: Record<ContractName, `0x${string}`>
}

const ContractsTable: React.FC<ContractsTableProps> = ({ addresses }) => {

  return (
    <table className="nx-block nx-overflow-x-scroll nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0">
      <tbody>
      {
        rows.map((contractName, index) => {
          if (addresses[contractName] === undefined) {
            return null
          }

          const { title, link } = config[contractName]
          const address = addresses[contractName]

          return (
            <tr key={index} className="nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20">
              <td
                key={index}
                className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600"
              >
                {
                  link ? (
                    <Link
                      className="text-blue-500"
                      href={link}
                      customColor
                    >
                      {title}
                    </Link>
                  ) : (
                    <>{title}</>
                  )
                }
              </td>
              <td
                key={index}
                className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600"
              >
                {
                  Boolean(address) ? (
                    <code
                      className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"
                      dir="ltr"
                    >
                      {address}
                    </code>
                  ) : (
                    <>N/A</>
                  )
                }
              </td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}

type ContractsAddressesProps = {
  tabs: {
    chain: string
    addresses: ContractsTableProps['addresses']
  }[]
}

export const ContractsAddresses: React.FC<ContractsAddressesProps> = ({ tabs }) => {

  return (
    <Tabs items={tabs.map(({ chain }) => chain)}>
      {
        tabs.map(({ chain, addresses }) => {

          return (
            <Tab key={chain}>
              <ContractsTable addresses={addresses} />
            </Tab>
          )
        })
      }
    </Tabs>
  )
}
