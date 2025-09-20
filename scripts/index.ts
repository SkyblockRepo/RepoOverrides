export async function fetchWikitext(title: string) {
  const result = await fetch("http://localhost:5260/v1/wiki-proxy", {
    method: "POST",
    body: JSON.stringify({ titles: [title] }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!result.ok) {
    return null;
  }

  try {
    const json = (await result.json()) as WikiResponse;
    const page = Object.values(json.pages)[0];

    return page;
  } catch (error) {
    console.error(error);
  }

  return null;
}

export interface WikiResponse {
  normalized: { from: string; to: string }[];
  pages: Record<string, WikiPage>;
}

export interface WikiPage {
  title: string;
  content: string;
}
