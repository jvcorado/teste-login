interface buttonProps {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  cn?: string;
  loading?: boolean;
}

export default function Button({
  text,
  onClick,
  style,
  cn,
  loading,
}: buttonProps) {
  return (
    <button
      onClick={onClick}
      className={`custom-loading-indicator text-base h-[50px] shadow-sm text-white rounded-md font-semibold flex justify-center items-center ${cn}`}
      style={style}
      disabled={loading}
    >
      {loading ? "carregando" : text}
    </button>
  );
}
