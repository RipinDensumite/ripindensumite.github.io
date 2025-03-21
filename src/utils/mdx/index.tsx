export interface BlogPostMeta {
  id: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  excerpt?: string;
  readTime?: string;
  image?: string;
  slug: string;
}

export interface BlogPost extends BlogPostMeta {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
}

export function getBlogPosts(): BlogPost[] {
    try {
      // This is Vite-specific - make sure your build tool supports it
      const mdxFiles = import.meta.glob("/src/log/*.mdx", { eager: true });
      const posts: BlogPost[] = [];
  
      for (const path in mdxFiles) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const file = mdxFiles[path] as any;
          const slug = path.replace("/src/log/", "").replace(".mdx", "");
  
          console.log(
            "Processing MDX file:",
            path,
            "with frontmatter:",
            file.frontmatter
          );
  
          if (file && typeof file === "object") {
            // Extract frontmatter data
            const {
              title,
              date,
              description,
              tags = [],
            } = file.frontmatter || {};
  
            // Skip if essential frontmatter is missing
            if (!title || !date) {
              console.warn(
                `MDX file ${path} is missing required frontmatter (title or date)`
              );
              continue;
            }
  
            // Calculate read time (approximate)
            const content = file.default?.toString() || "";
            const wordCount = content.split(/\s+/g).length;
            const readTime = `${Math.ceil(wordCount / 200)} min read`;
  
            // Create a post object
            posts.push({
              id: slug,
              slug,
              title,
              date,
              description,
              tags,
              readTime,
              excerpt: description,
              image: file.frontmatter?.image || "/log/placeholder.png",
              component: file.default,
            });
          }
        } catch (fileError) {
          console.error(`Error processing MDX file ${path}:`, fileError);
        }
      }
  
      // Return posts sorted by date (newest first)
      if (posts.length > 0) {
        console.log("Successfully loaded", posts.length, "blog posts");
        return posts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      }
  
      // Return empty array if no posts were found
      console.warn("No blog posts were found");
      return [];
    } catch (error) {
      console.error("Error loading blog posts:", error);
      // Return empty array instead of fallback posts
      return [];
    }
  }