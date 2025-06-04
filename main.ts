import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

// 启动静态服务器
Deno.serve({ port: 8000 }, (req) => serveDir(req, { fsRoot: "." }));