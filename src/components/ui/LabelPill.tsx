type LabelPillProps = {
  label?: string
  children?: React.ReactNode
  color?: string
  background: string
  borderColor?: string
  onHold?: boolean
  inProgress?: boolean
}

function hexToRGBA(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export default function LabelPill({
  label,
  children,
  color,
  background,
  borderColor,
  onHold,
  inProgress,
}: LabelPillProps) {
  const backgroundColor = hexToRGBA(background, 0.44)

  return (
    <span
      data-name={label}
      style={{
        color: color,
        background: backgroundColor,
        borderColor: borderColor,
        textDecoration: `none solid ${color}`,
        display: 'inline-block',
        padding: '0px 7px',
        fontSize: '12px',
        fontWeight: 300,
        lineHeight: '18px',
        whiteSpace: 'nowrap',
        border: `0.571429px solid ${borderColor}`,
        borderRadius: '24px',
        outlineOffset: '-2px',
        boxSizing: 'border-box',
      }}
    >
      {onHold ? 'On Hold' : inProgress ? 'In Progress' : children}
    </span>
  )
}
