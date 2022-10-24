function AreaBranca({ children, className }) {
  return (
    <div
      className={`p-3 my-3 rounded ${className}`}
      style={{ background: "white" }}
    >
      {children}
    </div>
  );
}
export default AreaBranca;
