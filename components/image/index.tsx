import NextImage from 'next/image'

export function Image({ src, width, height }) {
  return (
    <div className="mt-4 border border-gray-300 rounded-lg overflow-hidden">
      <NextImage className="w-full" src={src} width={width} height={height} alt="" />
    </div>
  )
}
