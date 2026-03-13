export function Table(props) {
  const { titles, rows } = props

  return (
    <table className="block overflow-x-scroll nextra-scrollbar mt-6 p-0 first:mt-0">
      {
        Boolean(titles) && (
          <thead>
            <tr className="m-0 border-t border-gray-300 p-0 dark:border-gray-600 even:bg-gray-100 even:dark:bg-gray-600/20">
              {
                titles.map((title, index) => (
                  <td key={index} className="m-0 border border-gray-300 px-4 py-2 font-semibold dark:border-gray-600">
                    {title}
                  </td>
                ))
              }
            </tr>
          </thead>
        )
      }
      <tbody>
        {
          rows.map((cells, index) => (
            <tr key={index} className="m-0 border-t border-gray-300 p-0 dark:border-gray-600 even:bg-gray-100 even:dark:bg-gray-600/20">
              {
                cells.map((content, index) => (
                  <td
                    key={index}
                    className="m-0 border border-gray-300 px-4 py-2 dark:border-gray-600"
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
