<script>
  let count = 0;
  let colour = "red-400";

  function handleClick() {
    count += 1;

    if (count == 6) {
      alert("Looking good there");
    }

    if (count == 20) {
      alert("Ok, good job");
    }

    if (count == 50) {
      alert("Please stop");
    }

    if (count == 100) {
      alert("I SAID STOP!");
    }
  }
</script>

<h3 class="m-4">Total number you clicked {count}</h3>
<button
  class={`text-${colour} align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
  on:click={handleClick}
>
  Clicked
</button>
