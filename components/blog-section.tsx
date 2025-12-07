import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog-data";

interface BlogSectionProps {
  posts: BlogPost[];
  showAllLink?: boolean;
}

export default function BlogSection({ posts, showAllLink = true }: BlogSectionProps) {
  return (
    <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21.75px] font-roboto text-black uppercase mb-3 sm:mb-4 tracking-[-0.87px]">
          Latest news
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-6">
          <h2 className="text-[24px] sm:text-[32px] md:text-[45px] lg:text-[55px] xl:text-[65.466px] font-roboto text-black tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2.0227px]">
            Find out what&apos;s happening
          </h2>
          {showAllLink && (
            <Link
              href="/blog"
              className="text-brand-blue hover:underline font-roboto text-[14px] sm:text-[16px] md:text-[18px] hidden sm:block whitespace-nowrap"
            >
              View All →
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col"
            >
              <div className="relative aspect-4/3 w-full bg-gray-300 rounded-[4.204px] mb-3 sm:mb-4 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold font-roboto text-black mb-2 sm:mb-3 tracking-[-0.2522px] group-hover:text-brand-blue transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-roboto text-black leading-[1.4] sm:leading-normal md:leading-[22.867px] line-clamp-3 grow">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
        {showAllLink && (
          <div className="mt-6 sm:mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-block text-brand-blue hover:underline font-roboto text-[14px] sm:text-[16px]"
            >
              View All Blog Posts →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
