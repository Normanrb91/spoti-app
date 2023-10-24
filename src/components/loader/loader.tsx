import { memo } from 'react'
import { StyledBar, StyledLoader } from './styles'

type LoaderPropd = {
  size?: string
}

const Loader = ({ size = 'big' }: LoaderPropd) => {
  const loaderSize =
    size === 'small'
      ? { heightContent: '100%', widthContent: 'auto', width: '16px', heigth: '14px' }
      : { heightContent: '100vh', widthContent: '100%', width: '100px', heigth: '50px' }

  const barSize =
    size === 'small'
      ? { width: '3px', heigth: '1px', margin: '0 0.6px' }
      : { width: '10px', heigth: '5px', margin: '0 2px' }

  return (
    <StyledLoader
      $heightContent={loaderSize.heightContent}
      $widthContent={loaderSize.widthContent}
      $width={loaderSize.width}
      $height={loaderSize.heigth}
    >
      <div className="bars">
        <StyledBar $delay="250ms" $width={barSize.width} $height={barSize.heigth} $marging={barSize.margin} />
        <StyledBar $delay="715ms" $width={barSize.width} $height={barSize.heigth} $marging={barSize.margin} />
        <StyledBar $delay="475ms" $width={barSize.width} $height={barSize.heigth} $marging={barSize.margin} />
        <StyledBar $delay="25ms" $width={barSize.width} $height={barSize.heigth} $marging={barSize.margin} />
        <StyledBar $delay="190ms" $width={barSize.width} $height={barSize.heigth} $marging={barSize.margin} />
      </div>
    </StyledLoader>
  )
}

const MemoLoader = memo(Loader)

export { MemoLoader as Loader }
