<script>
  import Card from "../components/Card.svelte";

  // Create an array of blog post objects
  let blogPosts = [
    // {
    //   title: "Blog Post 1",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   link: "/blog/post-1",
    // },
    // {
    //   title: "Blog Post 2",
    //   description:
    //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    //   link: "/blog/post-2",
    // },
    // {
    //   title: "Blog Post 3",
    //   description: "Nulla facilisi. Donec sed ex eget orci lacinia tincidunt.",
    //   link: "/blog/post-3",
    // },
  ];
</script>

<section class="py-4 border-t-2">
  <h1 class="font-mono text-center">Blog</h1>
  <div class="flex flex-wrap justify-center gap-4">
    {#if blogPosts.length > 0}
      {#each blogPosts as post, index}
        <Card
          title={post.title}
          description={post.description}
          link={post.link}
        />
      {/each}
    {:else}
      <div class="flex flex-col justify-center items-center">
        <img
          class="w-40 h-40"
          src="https://media1.tenor.com/m/vfNeXl_7vGEAAAAd/no-pixels-cant-see.gif"
          alt="Can't see"
        />
        <p>Does not exist</p>
      </div>
    {/if}
  </div>
</section>
