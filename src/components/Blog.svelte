<script>
  let names = ["Error 1", "Error 2", "Error 3"];
</script>

<section class="py-4 border-t-2">
  <h1 class="font-mono text-center">Blog</h1>
  <div class="flex flex-wrap justify-center gap-4">
    {#each names as name, index}
      <div class="card w-96 bg-base-100 border-2 my-3">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
          <div class="card-actions justify-end">
            <a href="/blog">
              <button class="btn btn-ghost">Read more</button>
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
