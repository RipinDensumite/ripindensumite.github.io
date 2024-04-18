<script>
  export let title;
  export let description;
  export let link;
</script>

<div
  class="card w-96 border-2 border-gray-800 my-3 hover:-translate-y-2 hover:shadow-lg transition-all"
>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <div class="card-actions justify-end">
      <a href={link}>
        <button class="btn btn-outline">Read more</button>
      </a>
    </div>
  </div>
</div>
