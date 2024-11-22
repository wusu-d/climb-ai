"use client";

import { useState } from "react";
import UrlForm from "@/components/UrlForm";
import SitemapDisplay from "@/components/SitemapDisplay";
import ScrapedContent from "@/components/ScrapedContent";
import { mapSite, scrapePage } from "@/lib/api";

export default function Home() {
  const [sitemap, setSitemap] = useState<string[]>([]);
  const [scrapedContent, setScrapedContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleUrlSubmit = async (url: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await mapSite(url);
      setSitemap(result.links);
      setScrapedContent(null);
    } catch (e) {
      setError("Failed to map site. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLinkSelect = async (link: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await scrapePage(link);
      setScrapedContent(result.markdown);
    } catch (e) {
      setError("Failed to scrape page. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Web Scraper UI</h1>
      <UrlForm onSubmit={handleUrlSubmit} />
      {isLoading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <div className="flex mt-4">
        <SitemapDisplay sitemap={sitemap} onLinkSelect={handleLinkSelect} />
        <ScrapedContent content={scrapedContent} />
      </div>
    </main>
  );
}
