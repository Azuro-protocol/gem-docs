import React from 'react'
import { Tabs } from 'nextra/components'
import { Link } from 'components'


type ContractName =
  'factory'
  | 'lp'
  | 'vault'
  | 'prematchCore'
  | 'expressCore'
  | 'proxyFront'
  | 'betToken'
  | 'access'
  | 'azuroBet'
  | 'hostCore'
  | 'clientCore'
  | 'relayer'
  | 'paymaster'
  | 'cashout'

const config: Record<ContractName, { title: string, link?: string }> = {
  factory: {
    title: 'Factory',
    // link: '/contracts/factory',
  },
  lp: {
    title: 'LP',
    // link: '/contracts/lp',
  },
  vault: {
    title: 'Vault',
    // link: '/contracts/vault',
  },
  prematchCore: {
    title: 'PrematchCore',
    // link: '/contracts/prematch-core',
  },
  expressCore: {
    title: 'BetExpress',
    // link: '/contracts/bet-express',
  },
  proxyFront: {
    title: 'ProxyFront',
    // link: '/contracts/proxy-front',
  },
  betToken: {
    title: 'Bet Token (ERC20)',
  },
  access: {
    title: 'Access',
    // link: '/contracts/access',
  },
  azuroBet: {
    title: 'AzuroBet',
    // link: '/contracts/azuro-bet',
  },
  hostCore: {
    title: 'HostCore',
    // link: '/contracts/live-host-core',
  },
  clientCore: {
    title: 'ClientCore',
    // link: '/contracts/live-client-core',
  },
  relayer: {
    title: 'Relayer',
    // link: '/contracts/live-relayer',
  },
  paymaster: {
    title: 'PayMaster',
  },
  cashout: {
    title: 'Cashout',
    // link: '/contracts/cashout',
  },
}

const rows: ContractName[] = [
  'factory',
  'lp',
  'vault',
  'prematchCore',
  'expressCore',
  'proxyFront',
  'betToken',
  'access',
  'azuroBet',
  'hostCore',
  'clientCore',
  'relayer',
  'paymaster',
  'cashout'
]

type ContractsTableProps = {
  addresses: Record<ContractName, `0x${string}`>
}

const ContractsTable: React.FC<ContractsTableProps> = ({ addresses }) => {

  return (
    <table className="_block _overflow-x-scroll nextra-scrollbar _mt-6 _p-0 first:_mt-0">
      <tbody>
      {
        rows.map((contractName, index) => {
          if (addresses[contractName] === undefined) {
            return null
          }

          const { title, link } = config[contractName]
          const address = addresses[contractName]

          return (
            <tr key={index} className="_m-0 _border-t _border-gray-300 _p-0 dark:_border-gray-600 even:_bg-gray-100 even:dark:_bg-gray-600/20">
              <td
                key={index}
                className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600"
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
                className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600"
              >
                {
                  Boolean(address) ? (
                    <code
                      className="_border-black _border-opacity-[0.04] _bg-opacity-[0.03] _bg-black _break-words _rounded-md _border _py-0.5 _px-[.25em] _text-[.9em] dark:_border-white/10 dark:_bg-white/10"
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
            <Tabs.Tab key={chain}>
              <ContractsTable addresses={addresses} />
            </Tabs.Tab>
          )
        })
      }
    </Tabs>
  )
}
