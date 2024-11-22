interface ScrapedContentProps {
  content: string | null;
}

export default function ScrapedContent({ content }: ScrapedContentProps) {
  return (
    <div className="w-1/2 pl-2">
      <h2 className="text-xl font-semibold mb-2">Scraped Content (Markdown)</h2>
      {content ? (
        <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded max-h-96 overflow-y-auto">
          {content}
        </pre>
      ) : (
        <p>No content scraped yet. Select a link from the sitemap to scrape.</p>
      )}
    </div>
  );
}
