import ClapButton from './ClapButton';

interface ArticleContentProps {
  title: string;
  author: string;
  publishedAt: string;
  content: string;
  slug: string;
  readingTime?: number;
}

export default function ArticleContent({
  title,
  author,
  publishedAt,
  content,
  slug,
  readingTime,
}: ArticleContentProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="max-w-4xl mx-auto">
      {/* Article Header */}
      <header className="mb-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <span className="font-medium">By {author}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{formattedDate}</span>
          </div>
          {readingTime && (
            <div className="flex items-center gap-2">
              <span>{readingTime} min read</span>
            </div>
          )}
        </div>

        <ClapButton slug={slug} />
      </header>

      {/* Article Content */}
      <div
        className="prose prose-lg prose-invert max-w-none
                   prose-headings:font-heading prose-headings:text-foreground
                   prose-p:text-muted-foreground prose-p:leading-relaxed
                   prose-strong:text-foreground prose-strong:font-semibold
                   prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                   prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground
                   prose-code:bg-muted prose-code:text-foreground prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                   prose-pre:bg-muted prose-pre:border prose-pre:border-border
                   prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                   prose-li:text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}