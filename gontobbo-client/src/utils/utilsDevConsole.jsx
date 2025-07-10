import { Console } from "console-feed";
import { useConsoleStore } from "../hooks/store/devConsoleStore";
export default function DevConsole({ variant = "dark", style }) {
  const logs = useConsoleStore((state) => state.logs);
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
