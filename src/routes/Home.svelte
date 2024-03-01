<script>
  import FluidGrid from "../lib/FluidGrid.svelte";
  import Scaffold from "../lib/Scaffold.svelte";
  import get_photos from "../assets/fn"
  const getAll = (async ()=>{
    const images = await get_photos("cloth")
    const men = await get_photos("Men cloth")
    const women = await get_photos("Women cloth")
    const newArrival = await get_photos("New cloth")

    return {images, men, women, newArrival}
  })();
  const imageHeight = "h-[30vh]";
  
</script>

<main>
  {#await getAll}
    <div></div>
  {:then all} 
    <div class="h-[10vh]">
        <Scaffold />
    </div>
    <div class="h-[88vh] overflow-y-scroll scroll-smooth remove-scrollbar">
      <div class="flex justify-center">
        <div class="relative">        
          <div class="h-[80vh] w-[100vw] md:w-[80vw]">
            <img src={all.images[0].src.original} class="h-full w-full" alt={all.images[0].alt}/>
          </div>
          <div class="absolute bottom-8 left-8">
            <h1 class="my-10 font-bold text-white text-4xl md:text-6xl">The Spring Edit</h1>
            <a href="/details/women" class="bg-blue-700 p-2 rounded-md font-bold text-white mx-1">Explore women's</a>
            <a href="/details/men" class="bg-gray-200 p-2 rounded-md font-bold text-black mx-1"> Explore men's</a>
          </div>
        </div>
      </div>
      <FluidGrid images={all.newArrival} {imageHeight} mobileOverFlow={true}/>
      <FluidGrid images={all.men} {imageHeight} heading={"Men"} mobileOverFlow={true}/>
      <FluidGrid images={all.women} {imageHeight} heading={"Women"} mobileOverFlow={true}/>
      <FluidGrid images={all.images} {imageHeight} heading={"Personalised for you"} mobileOverFlow={true}/>
    </div>
  {/await}
</main>
