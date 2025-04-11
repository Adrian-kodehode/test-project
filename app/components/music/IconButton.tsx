export default function IconButton({
  icon,
  onClick,
  className,
}: {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button onClick={onClick} className={className}>
      {icon}
    </button>
  );
}
