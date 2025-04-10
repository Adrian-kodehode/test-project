export default function IconButton() {
  const IconButton = ({
    icon,
    size,
    onClick,
    className,
  }: {
    icon: React.ReactNode;
    size: string;
    onClick: () => void;
    className?: string;
  }) => {
    return (
      <button onClick={onClick} className={className}>
        {icon}
      </button>
    );
  };
}
