import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

const blogDirectory = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  keywords?: string[];
  coverImage?: string;
  readTime?: number;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(blogDirectory)) return [];

  const fileNames = fs.readdirSync(blogDirectory).filter((f) => f.endsWith(".md"));

  const posts: BlogPostMeta[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
      author: data.author || "Josh Cypher",
      keywords: data.keywords || [],
      coverImage: data.coverImage,
      readTime,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(gfm).use(html).process(content);
  const contentHtml = processedContent.toString();

  const wordCount = content.split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    date: data.date || "",
    author: data.author || "Josh Cypher",
    keywords: data.keywords || [],
    coverImage: data.coverImage,
    readTime,
    content: contentHtml,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(blogDirectory)) return [];
  return fs
    .readdirSync(blogDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
