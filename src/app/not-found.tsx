import Link from 'next/link';
import { ArrowLeft, FileX } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <FileX className="w-24 h-24 text-muted-foreground mx-auto mb-4" />
          <h1 className="font-heading text-6xl font-bold text-foreground mb-4">
            404
          </h1>
          <h2 className="font-heading text-2xl font-semibold text-muted-foreground mb-4">
            Article Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The article you're looking for doesn't exist or may have been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-heading font-bold uppercase text-sm tracking-wider hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 font-heading font-bold uppercase text-sm tracking-wider hover:border-primary hover:text-primary transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}