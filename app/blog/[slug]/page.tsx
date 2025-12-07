import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog-data";
import { ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | ClearEdge",
    };
  }

  return {
    title: `${post.title} | ClearEdge Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-blue hover:underline font-roboto text-[14px] sm:text-[16px] mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {post.category && (
            <div className="mb-4">
              <span className="text-[12px] sm:text-[13px] font-roboto text-brand-blue uppercase tracking-wide">
                {post.category}
              </span>
            </div>
          )}

          <h1 className="text-[28px] sm:text-[36px] md:text-[45px] lg:text-[55px] font-bold font-roboto text-black mb-6 tracking-[-1px]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-8 text-[14px] sm:text-[15px] font-roboto text-gray-600">
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
            {post.author && (
              <span>By {post.author}</span>
            )}
          </div>

          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-300 rounded-[4.204px] mb-8 overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-[16px] sm:text-[17px] md:text-[18px] font-roboto text-black leading-[1.6] whitespace-pre-line">
                {post.content}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-brand-blue hover:underline font-roboto text-[14px] sm:text-[16px]"
              >
                <ArrowLeft className="w-4 h-4" />
                View All Blog Posts
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
