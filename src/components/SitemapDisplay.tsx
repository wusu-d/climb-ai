interface SitemapDisplayProps {
  sitemap: string[];
  onLinkSelect: (link: string) => void;
}

export default function SitemapDisplay({
  sitemap,
  onLinkSelect,
}: SitemapDisplayProps) {
  return (
    <div className="w-1/2 pr-2">
      <h2 className="text-xl font-semibold mb-2">Sitemap</h2>
      {sitemap.length > 0 ? (
        <ul className="space-y-1 max-h-96 overflow-y-auto">
          {sitemap.map((link) => (
            <li key={link}>
              <button
                onClick={() => onLinkSelect(link)}
                className="text-blue-500 hover:underline text-left truncate w-full"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No sitemap available. Please enter a URL to scrape.</p>
      )}
    </div>
  );
}
