/** Church Care logo mark (cropped from the official logo, transparent background) */
export function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <img
      src="/logo-mark.png"
      alt="Church Care logo"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
}
