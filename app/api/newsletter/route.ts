// Inscrit un email à la newsletter : crée (ou retrouve) le contact Systeme.io
// puis lui attribue le tag "Newsletter".
const API = "https://api.systeme.io/api";
const TAG_NAME = "Newsletter";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Contact = { id: number; tags: { id: number; name: string }[] };

let cachedTagId: number | null = null;

async function systeme(path: string, init: RequestInit = {}) {
  return fetch(`${API}${path}`, {
    ...init,
    headers: {
      "X-API-Key": process.env.SYSTEME_API_KEY ?? "",
      "Content-Type": "application/json",
      Accept: "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });
}

async function getTagId(): Promise<number> {
  if (cachedTagId) return cachedTagId;
  const res = await systeme(
    `/tags?query=${encodeURIComponent(TAG_NAME)}&limit=100`
  );
  if (!res.ok) throw new Error(`tags ${res.status}`);
  const { items } = (await res.json()) as {
    items: { id: number; name: string }[];
  };
  const tag = items.find(
    (t) => t.name.trim().toLowerCase() === TAG_NAME.toLowerCase()
  );
  if (!tag) throw new Error(`tag "${TAG_NAME}" introuvable`);
  cachedTagId = tag.id;
  return tag.id;
}

async function findContact(email: string): Promise<Contact | null> {
  const res = await systeme(`/contacts?email=${encodeURIComponent(email)}`);
  if (!res.ok) throw new Error(`contacts ${res.status}`);
  const { items } = (await res.json()) as { items: Contact[] };
  return items[0] ?? null;
}

async function createContact(email: string): Promise<Contact> {
  const res = await systeme("/contacts", {
    method: "POST",
    body: JSON.stringify({ email, locale: "fr" }),
  });
  if (res.ok) return (await res.json()) as Contact;
  // Contact créé entre-temps : on le récupère.
  const existing = await findContact(email);
  if (existing) return existing;
  throw new Error(`create contact ${res.status}`);
}

export async function POST(request: Request) {
  if (!process.env.SYSTEME_API_KEY) {
    console.error("newsletter: SYSTEME_API_KEY manquante");
    return Response.json({ error: "Service indisponible." }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  const email = String(body?.email ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  try {
    const tagId = await getTagId();
    const contact = (await findContact(email)) ?? (await createContact(email));

    if (!contact.tags?.some((t) => t.id === tagId)) {
      const res = await systeme(`/contacts/${contact.id}/tags`, {
        method: "POST",
        body: JSON.stringify({ tagId }),
      });
      if (!res.ok) throw new Error(`assign tag ${res.status}`);
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("newsletter:", error);
    return Response.json(
      { error: "Une erreur est survenue, réessayez dans un instant." },
      { status: 502 }
    );
  }
}
