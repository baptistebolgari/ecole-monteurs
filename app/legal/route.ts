import { legalHtml } from "./html";

export const dynamic = "force-static";

export function GET() {
  return new Response(legalHtml, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
