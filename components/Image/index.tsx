import NextImage from 'next/image'


type Props = {
  src: string
  width: number
  height: number
}

export function Image(props: Props) {
  const { src, width, height } = props

  return (
    <div className="mt-4 border border-gray-300 rounded-lg overflow-hidden">
      <NextImage className="w-full" src={src} width={width} height={height} alt="" />
    </div>
  )
}
