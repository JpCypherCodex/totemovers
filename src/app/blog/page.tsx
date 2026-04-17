import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Moving Tips & Guides | MoverTotes Blog",
  description:
    "Practical moving advice, local Coeur d'Alene guides, and everything you need to know about making your next move easier.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">The MoverTotes Blog</h1>
          <p className="mt-4 text-lg text-white/80">
            Moving tips, local guides, and everything you need to make your next move easier.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {posts.length === 0 ? (
            <p className="text-center text-gray-mid">No articles yet — check back soon!</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-mid">
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
                    <h2 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-gray-mid leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                    <p className="mt-4 text-sm font-medium text-primary">Read more →</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
