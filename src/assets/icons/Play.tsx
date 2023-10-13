type IconProps = {
  color?: string
  width?: number
  height?: number
}

export const PlayIcon = ({ color = 'currentColor', width = 16, height = 16 }: IconProps) => (
  <svg viewBox="0 0 24 24" width={width} height={height} fill={color}>
    <path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path>
  </svg>
)
