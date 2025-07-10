import { Console } from "console-feed";

export default function DevConsole({ logs, variant = "dark", style }) {
  return (
    <div
      style={{
        maxHeight: "300px",
        overflow: "auto",
        borderTop: "1px solid #ccc",
        fontSize: "14px",
        ...style,
      }}
    >
      <Console logs={logs} variant={variant} />
    </div>
  );
}
