export const runtime = 'edge';

export async function GET(req: Request) {
  return new Response(JSON.stringify({ msg: 'Hello from Edge!' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
