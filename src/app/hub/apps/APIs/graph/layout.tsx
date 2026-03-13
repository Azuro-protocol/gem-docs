import { createGetMetadata } from '@/utils'


export const generateMetadata = createGetMetadata('GraphQL')

export default function Layout({ children }) {
  return children
}
