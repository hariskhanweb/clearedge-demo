import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata = {
  title: "Blog Archive | ClearEdge",
  description: "Read the latest news and insights from ClearEdge",
};

export default function BlogArchivePage() {
  const posts = getAllBlogPosts();

  return (
    <main>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="text-[21.75px] font-roboto text-black uppercase mb-4 tracking-[-0.87px]">
            Blog
          </div>
          <h1 className="text-[32px] sm:text-[45px] md:text-[55px] lg:text-[65.466px] font-roboto text-black mb-12 tracking-[-2.0227px]">
            Latest News & Insights
          </h1>
          
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[18px] font-roboto text-gray-600">
                No blog posts available yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <div className="relative h-[300px] sm:h-[400px] md:h-[462px] bg-gray-300 rounded-[4.204px] mb-4 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {post.category && (
                    <div className="mb-2">
                      <span className="text-[12px] sm:text-[13px] font-roboto text-brand-blue uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                  )}
                  <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold font-roboto text-black mb-2 tracking-[-0.2522px] group-hover:text-brand-blue transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-roboto text-black leading-[22.867px] mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[12px] sm:text-[13px] font-roboto text-gray-600">
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
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
