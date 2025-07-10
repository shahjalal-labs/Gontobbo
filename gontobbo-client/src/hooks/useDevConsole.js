import { useEffect, useState } from "react";
import { Hook, Unhook } from "console-feed";

export function useDevConsole() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    Hook(
      window.console,
      (log) => {
        setLogs((prev) => [...prev, log]);
      },
      false,
    );

    return () => Unhook(window.console);
  }, []);

  return logs;
}
