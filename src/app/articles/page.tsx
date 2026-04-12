import { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import ClientNavbar from '@/components/ClientNavbar';
import { getAllArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Articles | Defcon4 Alliance',
  description: 'Security insights, technology trends, and expert analysis from Defcon4 Alliance.',
};

export const dynamic = 'force-static';

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  return (
    <div className="min-h-screen bg-background">
      <ClientNavbar />
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Security <span className="text-primary">Articles</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay informed with the latest insights, trends, and expert analysis
              in security technology and defensive strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {articles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No articles available yet. Check back soon for new content.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}