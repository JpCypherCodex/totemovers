import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-14 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link href="/blog" className="text-sm text-white/70 hover:text-white">
            ← Back to Blog
          </Link>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-white/70">
            <span>{post.author}</span>
            <span>&middot;</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.readTime && (
              <>
                <span>&middot;</span>
                <span>{post.readTime} min read</span>
              </>
            )}
          </div>
        </div>
      </section>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* CTA */}
      <section className="bg-accent py-14 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Ready to Make Your Move Easier?</h2>
          <p className="mt-3 text-gray-mid">
            Skip the cardboard chaos. Book your totes in minutes.
          </p>
          <Link
            href="/booking"
            className="mt-6 inline-flex rounded-full bg-secondary px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-secondary-dark"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
