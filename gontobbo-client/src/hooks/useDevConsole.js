import { useEffect } from "react";
import { Hook, Unhook } from "console-feed";
import { useConsoleStore } from "../store/devConsoleStore";

export function useDevConsole() {
  const pushLog = useConsoleStore((state) => state.pushLog);

  useEffect(() => {
    Hook(window.console, (log) => pushLog(log), false);
    return () => Unhook(window.console);
  }, [pushLog]);
}
