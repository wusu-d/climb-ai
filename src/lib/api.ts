const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function mapSite(url: string) {
  const response = await fetch(`${API_URL}/map`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error("Failed to map site");
  }

  return response.json();
}

export async function scrapePage(url: string) {
  const response = await fetch(`${API_URL}/scrape`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error("Failed to scrape page");
  }

  return response.json();
}
