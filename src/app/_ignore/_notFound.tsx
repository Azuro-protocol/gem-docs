import { Link } from 'components'

export default function Custom404() {
  return (
    <div className="w-full h-screen grid place-content-center">
      <div className="-mt-8 text-center">
        <div className="text-9xl">404</div>
        <div className="mt-2 text-2xl">Page not found</div>
        <Link
          className="inline-block mt-12 border border-black py-3 px-6 bg-white rounded-lg shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          to="/"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  )
}
