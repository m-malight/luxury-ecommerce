<script>
  import FluidGrid from "../lib/FluidGrid.svelte";
  import Scaffold from "../lib/Scaffold.svelte";
  import get_photos from "../assets/fn"
  const getImages = get_photos("Cloth");
  const imageHeight = "h-[30vh]";
  
</script>

<main>
  {#await getImages}
    <div></div>
  {:then images} 
    <div class="h-[10vh]">
        <Scaffold />
    </div>
    <div class="h-[88vh] overflow-y-scroll scroll-smooth remove-scrollbar">
      <div class="flex justify-center">
        <div class="relative">        
          <div class="h-[80vh] w-[100vw] md:w-[80vw]">
            <img src={images[0].src.original} class="h-full w-full" alt={images[0].alt}/>
          </div>
          <div class="absolute bottom-8 left-8">
            <h1 class="my-10 font-bold text-white text-4xl md:text-6xl">The Spring Edit</h1>
            <a href="/details/women" class="bg-blue-700 p-2 rounded-md font-bold text-white mx-1">Explore women's</a>
            <a href="/details/men" class="bg-gray-200 p-2 rounded-md font-bold text-black mx-1"> Explore men's</a>
          </div>
        </div>
      </div>
      <FluidGrid {images} {imageHeight} heading={"Personalised for you"} mobileOverFlow={true}/>
      <FluidGrid {images} {imageHeight} heading={"Men"} mobileOverFlow={true}/>
      <FluidGrid {images} {imageHeight} heading={"Women"} mobileOverFlow={true}/>
    </div>
  {/await}
</main>
