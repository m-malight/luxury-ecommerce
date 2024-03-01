<script>
  export let images = []
  export let imageHeight;
  export let overFlow = false;
  export let mobileOverFlow = false;
  export let heading = "";
</script>

<div class="flex justify-center">
  <div class="p-2 w-[100vw] md:w-[80vw]">  
    {#if heading}
      <div class="font-bold ml-2 text-3xl">{heading}</div>
    {/if}
    <div class={`flex scroll-smooth ${mobileOverFlow ? "justify-left": "flex-wrap"} overflow-x-scroll remove-scrollbar md:justify-left ${overFlow ? "" : "md:flex-wrap"}`}>
      {#each images as image, i (i)}
        <div class={`m-2 ${mobileOverFlow ? "": "w-[43vw]"} md:w-[14vw]`}>
          <div class={`${mobileOverFlow ? "w-[33vw]": "w-[43vw]"} w-[43vw] md:w-[14vw] ${imageHeight}`}>
            <img src={image.src.original} alt={image.alt} class="w-full h-full rounded-lg">
          </div>
          <p class="text-sm text-ellipsis overflow-x-hidden whitespace-nowrap">{image.alt}</p>
        </div>
      {/each}
    </div>
  </div>
</div>
