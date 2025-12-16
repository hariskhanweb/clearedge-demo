import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface SolutionCardProps {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  href?: string;
}

export function SolutionCard({
  title,
  description,
  image,
  imageAlt,
  href,
}: SolutionCardProps) {
  const cardContent = (
    <Card className="bg-white rounded-lg shadow-[0px_4px_20px_0px_rgba(0,0,0,0.20)] hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
      <CardContent className="p-0">
        {image && (
          <div className="w-full aspect-video relative flex items-center justify-center overflow-hidden">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 flex flex-col items-center text-center justify-between gap-3">
          <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-normal font-roboto text-text-dark">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-text-gray font-roboto leading-6">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

