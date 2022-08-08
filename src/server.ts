import { Response, Request } from "express";

import AppLog from "./utils/AppLog";
import app from "./app";
import "dotenv/config";

const { PORT, HOST } = process.env;

app.get("/", async (req: Request, res: Response) => res.send("API online"));
app.listen(+PORT || 4000, HOST || "localhost", () =>
  AppLog("Server", `Server running on port ${+PORT || 4000}`)
);
