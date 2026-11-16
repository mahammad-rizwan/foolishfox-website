/**
 * Text block on the 1366x768 canvas. Geometry is passed as CSS variables so
 * the stylesheet can place it absolutely on desktop and in a column on mobile.
 * `size` / `lh` are canvas px; `m` overrides the mobile size factor.
 */
export default function Text({
  as: Tag = 'p',
  x,
  y,
  w,
  size,
  lh,
  m,
  color,
  align = 'left',
  className = '',
  wrap = false,
  delay = 0,
  style,
  children,
}) {
  return (
    <Tag
      className={`t reveal ${wrap ? 't--wrap ' : ''}${className}`}
      style={{
        '--x': x,
        '--y': y,
        '--w': w,
        '--fs': size,
        '--lh': lh / size,
        ...(m && { '--m': m }),
        '--delay': `${delay}ms`,
        color,
        textAlign: align,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
