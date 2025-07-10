import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function viteLoggerPlugin() {
  // Prepare paths
  const logDir = path.resolve(__dirname, "src/console");
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  const logPath = path.join(logDir, "log.json");
  const errorPath = path.join(logDir, "error.json");

  // Clear logs on startup (optional)
  fs.writeFileSync(logPath, "");
  fs.writeFileSync(errorPath, "");

  return {
    name: "vite:log-to-file",
    configureServer(server) {
      // Log endpoint (for normal logs)
      server.middlewares.use("/__log", async (req, res) => {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          try {
            const { args } = JSON.parse(body);
            const stringifyArgs = args.map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg),
            );
            const msg = `[${new Date().toISOString()}] ${stringifyArgs.join(" ")}\n`;
            fs.appendFileSync(logPath, msg);
          } catch (err) {
            console.error("❌ Logger error:", err);
          }
          res.end("ok");
        });
      });

      // Error endpoint (for error logs)
      server.middlewares.use("/__error", async (req, res) => {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          try {
            const { args } = JSON.parse(body);
            const stringifyArgs = args.map((arg) =>
              typeof arg === "object"
                ? JSON.stringify(arg, null, 2)
                : String(arg),
            );
            const msg = `[${new Date().toISOString()}] ${stringifyArgs.join(" ")}\n`;
            fs.appendFileSync(errorPath, msg);
          } catch (err) {
            console.error("❌ Error logger error:", err);
          }
          res.end("ok");
        });
      });
    },
  };
}
