export function Table(props) {
  const { titles, rows } = props

  return (
    <table className="nx-block nx-overflow-x-scroll nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0">
      <thead>
        <tr className="nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20">
          {
            titles.map((title, index) => (
              <td key={index} className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 nx-font-semibold dark:nx-border-gray-600">
                {title}
              </td>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          rows.map((cells, index) => (
            <tr key={index} className="nx-m-0 nx-border-t nx-border-gray-300 nx-p-0 dark:nx-border-gray-600 even:nx-bg-gray-100 even:dark:nx-bg-gray-600/20">
              {
                cells.map((content, index) => (
                  <td
                    key={index}
                    className="nx-m-0 nx-border nx-border-gray-300 nx-px-4 nx-py-2 dark:nx-border-gray-600"
                  >
                    {content}
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
