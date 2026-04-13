/**
 * Free-tier path: Groq OpenAI-compatible API.
 * Secrets (dashboard or `wrangler secret put`): GROQ_API_KEY (required)
 * Optional: PROXY_SECRET — if set, client must send header X-Proxy-Secret: <same value>
 */

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Proxy-Secret',
  };
}

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
  });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }
    if (request.method === 'GET') {
      const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>CompTIA AI proxy</title><style>body{font-family:system-ui,sans-serif;max-width:42rem;margin:2rem auto;padding:0 1rem;line-height:1.5;color:#111}code{background:#f4f4f5;padding:.15rem .35rem;border-radius:4px;font-size:.9em}h1{font-size:1.25rem}</style></head><body><h1>Worker is running</h1><p>This URL is not meant to be tested by opening it in a tab. The study app sends <strong>POST</strong> with <code>{"prompt":"..."}</code> here.</p><p>Copy this address into the study tool → <strong>AI proxy</strong> → Worker URL → Save, then turn on <strong>AI variety</strong> and start a quiz.</p><p><small>POST-only API (Groq via Cloudflare).</small></p></body></html>`;
      return new Response(html, {
        status: 200,
        headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
      });
    }
    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Use POST with JSON body { "prompt": "..." }' }, 405);
    }

    const hdrSecret = request.headers.get('X-Proxy-Secret') || '';
    if (env.PROXY_SECRET && hdrSecret !== env.PROXY_SECRET) {
      return jsonResponse({ error: 'Unauthorized' }, 401);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: 'Invalid JSON body' }, 400);
    }

    const prompt = typeof body.prompt === 'string' ? body.prompt : '';
    if (!prompt) {
      return jsonResponse({ error: 'Missing string field "prompt"' }, 400);
    }
    if (prompt.length > 100000) {
      return jsonResponse({ error: 'Prompt too large' }, 400);
    }

    if (!env.GROQ_API_KEY) {
      return jsonResponse({ error: 'Worker missing secret GROQ_API_KEY' }, 500);
    }

    const model = env.GROQ_MODEL || 'llama-3.1-8b-instant';

    const groqRes = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 1024,
        temperature: 0.65,
      }),
    });

    const groqData = await groqRes.json().catch(() => ({}));
    if (!groqRes.ok) {
      const msg = groqData.error?.message || groqData.message || `Groq HTTP ${groqRes.status}`;
      return jsonResponse({ error: msg }, 502);
    }

    const text = (groqData.choices && groqData.choices[0] && groqData.choices[0].message && groqData.choices[0].message.content)
      ? String(groqData.choices[0].message.content).trim()
      : '';

    if (!text) {
      return jsonResponse({ error: 'Empty completion from Groq' }, 502);
    }

    return jsonResponse({ text });
  },
};
