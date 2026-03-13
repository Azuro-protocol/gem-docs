import NextImage from 'next/image'
import cx from 'clsx'


type Props = {
  className?: string
  src: string
  width: number
  height: number
}

export function Image(props: Props) {
  const { className, src, width, height } = props

  return (
    <div className={cx('mt-4 border border-gray-300 rounded-lg overflow-hidden', className)}>
      <NextImage className="w-full" src={src} width={width} height={height} alt="" />
    </div>
  )
}
