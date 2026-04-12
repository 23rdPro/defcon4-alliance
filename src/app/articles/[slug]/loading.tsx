export default function Loading() {
  return (
    <div className="section-dark section-padding">
      <div className="container mx-auto max-w-4xl">
        {/* Header skeleton */}
        <div className="mb-8">
          <div className="h-4 bg-dark-muted rounded w-24 mb-4 animate-pulse"></div>
          <div className="h-12 bg-dark-muted rounded w-3/4 mb-4 animate-pulse"></div>
          <div className="h-6 bg-dark-muted rounded w-1/2 animate-pulse"></div>
        </div>

        {/* Content skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-dark-muted rounded animate-pulse"></div>
          <div className="h-4 bg-dark-muted rounded w-5/6 animate-pulse"></div>
          <div className="h-4 bg-dark-muted rounded animate-pulse"></div>
          <div className="h-4 bg-dark-muted rounded w-4/5 animate-pulse"></div>
          <div className="h-4 bg-dark-muted rounded animate-pulse"></div>
          <div className="h-4 bg-dark-muted rounded w-3/4 animate-pulse"></div>
        </div>

        {/* Image placeholder */}
        <div className="my-8 h-64 bg-dark-muted rounded animate-pulse"></div>

        {/* More content skeleton */}
        <div className="space-y-4">
          <div className="h-4 bg-dark-muted rounded animate-pulse"></div>
          <div className="h-4 bg-dark-muted rounded w-5/6 animate-pulse"></div>
          <div className="h-4 bg-dark-muted rounded animate-pulse"></div>
          <div className="h-4 bg-dark-muted rounded w-4/5 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}