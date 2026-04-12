import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleContent from '@/components/ArticleContent';
import BackButton from '@/components/BackButton';
import ClientNavbar from '@/components/ClientNavbar';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/articles';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Defcon4 Alliance',
    };
  }

  return {
    title: `${article.title} | Defcon4 Alliance`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      authors: [article.author],
      publishedTime: article.publishedAt,
      images: article.coverImage ? [{ url: article.coverImage }] : [],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <ClientNavbar />
      {/* Hero Section */}
      {article.coverImage && (
        <section className="relative h-96 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${article.coverImage})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 h-full flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <div className="max-w-4xl">
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {article.title}
                </h1>
                <p className="text-white/90 text-lg max-w-2xl">
                  {article.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <BackButton />
          </div>
          <ArticleContent
            title={article.title}
            author={article.author}
            publishedAt={article.publishedAt}
            content={article.content}
            slug={article.slug}
            readingTime={article.readingTime}
          />
        </div>
      </section>
    </div>
  );
}