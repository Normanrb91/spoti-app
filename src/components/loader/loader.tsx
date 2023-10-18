import { memo } from 'react'
import { StyledBar, StyledLoader } from './styles'

const Loader = () => {
  return (
    <StyledLoader>
      <div className="bars">
        <StyledBar $delay="250ms" />
        <StyledBar $delay="715ms" />
        <StyledBar $delay="475ms" />
        <StyledBar $delay="25ms" />
        <StyledBar $delay="190ms" />
      </div>
    </StyledLoader>
  )
}

const MemoLoader = memo(Loader)

export { MemoLoader as Loader }
