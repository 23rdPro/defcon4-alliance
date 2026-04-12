import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface ArticleMetadata {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  coverImage?: string;
  tags?: string[];
}

export interface Article extends ArticleMetadata {
  slug: string;
  content: string;
  readingTime?: number;
}

const articlesDirectory = path.join(process.cwd(), 'content', 'articles');

export async function getAllArticles(): Promise<Article[]> {
  // Get all markdown files
  const fileNames = fs.readdirSync(articlesDirectory).filter(fileName => fileName.endsWith('.md'));

  const articles = (await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      return await getArticleBySlug(slug, false);
    })
  )).filter((article): article is Article => article !== null);

  // Sort by published date (newest first)
  return articles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getArticleBySlug(slug: string, fullContent = true): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const metadata = data as ArticleMetadata;

    let processedContent = '';
    let readingTime;

    if (fullContent) {
      // Process markdown to HTML
      const processed = await remark().use(html).process(content);
      processedContent = processed.toString();

      // Calculate reading time (average 200 words per minute)
      const wordCount = content.split(/\s+/).length;
      readingTime = Math.ceil(wordCount / 200);
    }

    return {
      slug,
      ...metadata,
      content: processedContent,
      readingTime,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export function getAllArticleSlugs(): string[] {
  const fileNames = fs.readdirSync(articlesDirectory).filter(fileName => fileName.endsWith('.md'));
  return fileNames.map(fileName => fileName.replace(/\.md$/, ''));
}