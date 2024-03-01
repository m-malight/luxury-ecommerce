<script>
    import get_photos, {capitalize} from "../assets/fn"
    import FluidGrid from "../lib/FluidGrid.svelte";
    import Scaffold from "../lib/Scaffold.svelte";

    export let slug;
    let capitalizedSlug = capitalize(slug);
    const getImages = get_photos(`${slug} cloth`);
</script>

<div>
    {#await getImages}
        <div></div>
    {:then images} 
        <div class="h-[10vh]">
            <Scaffold active={capitalizedSlug} />
        </div>
        <div class="h-[88vh] overflow-y-scroll remove-scrollbar">
            <FluidGrid {images} imageHeight={"h-[35vh]"} heading={capitalizedSlug} mobileOverFlow={false}/>
        </div>
    {/await}
</div>