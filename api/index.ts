import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "https://deno.land/x/lambda/mod.ts";
import * as path from "https://deno.land/std@0.53.0/path/mod.ts";
import { readJson } from "https://deno.land/std@0.53.0/fs/mod.ts";

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  const __dirname = path.dirname(path.fromFileUrl(import.meta.url));
  const json = await readJson(path.join(__dirname, "..", "quotes.json"));

  return {
    statusCode: 200,
    body: JSON.stringify(json),
    headers: { "content-type": "application/json" },
  };
}
