type IconProps = {
  color?: string
  width?: number
  height?: number
}

export const BackIcon = ({ color = 'currentColor' }: IconProps) => (
  <svg width={'15px'} height={'15px'} id="Layer_1" version="1.1" viewBox="0 0 15 26">
    <polygon
      fill={color}
      points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 2.049,15.584 -0.035,13.5 "
    />
  </svg>
)
