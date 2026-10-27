/** Church Care logo mark (cropped from the official logo, transparent background) */
export function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <img
      src="/images/logo-mark-96.webp"
      alt="Faith ChurchCare logo"
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
}
