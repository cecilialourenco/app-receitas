type Props = {
  children: JSX.Element[];
  className?: string;
};

export default function WhiteArea({ children, className }: Props) {
  return (
    <div
      className={`p-3 my-3 rounded ${className}`}
      style={{ background: "white" }}
    >
      {children}
    </div>
  );
};
