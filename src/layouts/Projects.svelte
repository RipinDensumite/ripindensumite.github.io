<script>
  import Card from "../components/Card.svelte";

  // Create an array of project posts objects
  let projectPosts = [
    {
      title: "Project post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/project/post-1",
    },
    {
      title: "Project post 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/project/post-2",
    },
  ];
</script>

<section class="py-4 border-t-2">
  <h1 class="font-mono text-center">Projects</h1>
  <div class="flex flex-wrap justify-center gap-4">
    {#if projectPosts.length > 0}
      {#each projectPosts as post, index}
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
