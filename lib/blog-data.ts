export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt?: string;
  author?: string;
  publishedAt: string;
  category?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "samsung-32-inch-color-e-paper",
    title: "Samsung Unveils 32-Inch Color E-Paper - Ultra-Efficient, High-Impact Digital Signage",
    excerpt: "Samsung Electronics has introduced its new 32-inch Color E-Paper (model EM32DX), expanding its lineup of energy-saving digital signage solutions with near-zero power use and vivid visibility.",
    content: `Samsung Electronics has introduced its new 32-inch Color E-Paper (model EM32DX), expanding its lineup of energy-saving digital signage solutions with near-zero power use and vivid visibility.

The EM32DX represents a significant advancement in digital signage technology, offering businesses an eco-friendly alternative to traditional LCD displays. With its ultra-low power consumption, the display uses energy only when content is updated, making it ideal for applications where information changes infrequently.

Key features of the Samsung 32-inch Color E-Paper include:
- 32-inch display with full-color capabilities
- Near-zero power consumption when displaying static content
- Excellent visibility in bright sunlight
- Wide viewing angles
- Durable and long-lasting design

This innovation is particularly valuable for retail environments, transportation hubs, and corporate offices looking to reduce their carbon footprint while maintaining effective communication channels. The technology behind e-paper displays has matured significantly, and Samsung's latest offering demonstrates the potential for widespread adoption in commercial settings.

ClearEdge is proud to offer Samsung's cutting-edge e-paper solutions to our clients, helping them achieve their sustainability goals while maintaining high-quality digital communication.`,
    image: "/assets/samsung_unveils.png",
    imageAlt: "Samsung 32-inch Color E-Paper display",
    author: "ClearEdge Team",
    publishedAt: "2024-01-15",
    category: "Digital Signage",
  },
  {
    id: 2,
    slug: "stereolabs-humanoid-robots",
    title: "Stereolabs is powering the next generation of humanoid robots",
    excerpt: "Stereolabs provides the new standard for humanoid vision.",
    content: `Stereolabs is revolutionizing the field of robotics with its advanced vision systems designed specifically for humanoid robots. The company's cutting-edge technology provides robots with the depth perception and spatial awareness necessary to navigate complex environments and interact with objects and humans safely.

The latest generation of Stereolabs vision systems combines stereo cameras with advanced AI processing to create a comprehensive understanding of 3D space. This technology enables humanoid robots to:
- Navigate dynamic environments with precision
- Recognize and manipulate objects of various shapes and sizes
- Interact safely with humans in shared workspaces
- Adapt to changing conditions in real-time

As businesses increasingly explore automation solutions, the demand for sophisticated robotic systems continues to grow. Stereolabs' vision technology addresses one of the most critical challenges in robotics: enabling machines to see and understand the world as humans do.

ClearEdge recognizes the potential of these advanced vision systems for our clients exploring automation and robotics solutions. The integration of such technology can transform manufacturing, logistics, and service industries.`,
    image: "/assets/humanoid_robots.png",
    imageAlt: "Humanoid robot with Stereolabs vision system",
    author: "ClearEdge Team",
    publishedAt: "2024-01-10",
    category: "Technology",
  },
  {
    id: 3,
    slug: "future-of-sustainable-digital-signage",
    title: "The Future of Sustainable Digital Signage",
    excerpt: "Explore how ePaper displays are leading the way in sustainable digital signage solutions with 90% energy savings.",
    content: `The digital signage industry is undergoing a transformation as businesses prioritize sustainability alongside functionality. ePaper displays are emerging as the leading solution for organizations seeking to reduce their environmental impact while maintaining effective communication channels.

Traditional LCD and LED displays consume significant amounts of energy, operating continuously even when displaying static content. ePaper technology addresses this inefficiency by only using power when content is updated, resulting in energy savings of up to 90% compared to conventional displays.

Key advantages of ePaper displays include:
- Dramatically reduced energy consumption
- Excellent readability in direct sunlight
- Long-term cost savings on electricity
- Reduced heat generation
- Extended lifespan with minimal maintenance

The applications for sustainable digital signage are vast, ranging from retail price tags and wayfinding systems to corporate information displays and transportation schedules. As businesses set ambitious sustainability goals, ePaper displays offer a practical solution that doesn't compromise on functionality.

ClearEdge is committed to helping our clients adopt sustainable technology solutions. Our expertise in ePaper displays allows us to guide organizations through the selection, installation, and optimization of these energy-efficient systems, ensuring they meet both environmental and operational objectives.`,
    image: "/assets/sustainable_digital.png",
    imageAlt: "Sustainable ePaper digital signage display",
    author: "ClearEdge Team",
    publishedAt: "2024-01-05",
    category: "Sustainability",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  return getAllBlogPosts().slice(0, limit);
}
