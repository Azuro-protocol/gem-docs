export function Table(props) {
  const { titles, rows } = props

  return (
    <table className="_block _overflow-x-scroll nextra-scrollbar _mt-6 _p-0 first:_mt-0">
      {
        Boolean(titles) && (
          <thead>
            <tr className="_m-0 _border-t _border-gray-300 _p-0 dark:_border-gray-600 even:_bg-gray-100 even:dark:_bg-gray-600/20">
              {
                titles.map((title, index) => (
                  <td key={index} className="_m-0 _border _border-gray-300 _px-4 _py-2 _font-semibold dark:_border-gray-600">
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
            <tr key={index} className="_m-0 _border-t _border-gray-300 _p-0 dark:_border-gray-600 even:_bg-gray-100 even:dark:_bg-gray-600/20">
              {
                cells.map((content, index) => (
                  <td
                    key={index}
                    className="_m-0 _border _border-gray-300 _px-4 _py-2 dark:_border-gray-600"
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
