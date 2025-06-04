import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

// 启动静态服务器
Deno.serve({ port: 8000 }, (req) => serveDir(req, { fsRoot: "." }));

// 仅在本地环境自动打开浏览器
if ("Command" in Deno) {
  const command = new Deno.Command("cmd", {
    args: ["/c", "start", "http://localhost:8000/"],
    stdout: "null",
    stderr: "null"
  });
  command.spawn();
}