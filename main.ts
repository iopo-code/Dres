import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

// 启动静态服务器
Deno.serve({ port: 8000 }, (req) => serveDir(req, { fsRoot: ".", defaultDocument: "index.html" }));

// 打开默认浏览器（Windows 下用 start 命令）
Deno.run({
  cmd: ["cmd", "/c", "start", "http://localhost:8000/"],
  stdout: "null",
  stderr: "null"
});