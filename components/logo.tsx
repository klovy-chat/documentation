export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/brand/logo_colour.svg"
      alt=""
      width={28}
      height={28}
      className={className ?? 'size-7 rounded-md'}
    />
  );
}
