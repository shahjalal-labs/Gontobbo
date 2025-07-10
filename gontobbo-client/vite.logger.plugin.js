// vite.logger.plugin.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function viteLoggerPlugin() {
  return {
    name: "vite:log-to-file",
    configureServer(server) {
      const logPath = path.resolve(__dirname, "frontend.log");

      fs.writeFileSync(logPath, ""); // optional: clear log on startup

      server.middlewares.use("/__log", async (req, res) => {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          try {
            const { args } = JSON.parse(body);
            // const msg = `[${new Date().toISOString()}] ${args.join(" ")}\n`;
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
    },
  };
}
