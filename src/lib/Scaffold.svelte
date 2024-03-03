<script>
    import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte'
    import MdAccountBox from 'svelte-icons/md/MdAccountBox.svelte'
    import FaShoppingBag from 'svelte-icons/fa/FaShoppingBag.svelte'
    import TiThMenu from 'svelte-icons/ti/TiThMenu.svelte'
    import FaAsterisk from 'svelte-icons/fa/FaAsterisk.svelte'
    import MdClose from 'svelte-icons/md/MdClose.svelte'
    export let active = "";
    export let showBody = true;
    let mobileMenu = false
    const handle_click = () => mobileMenu = !mobileMenu
</script>

<div>
    {#if !mobileMenu}
        <div class="flex m-2 justify-between">
            <div class="flex items-center">
                <a href="/" class="w-7"><FaAsterisk /></a>
                <a href="/" class="font-bold px-3">Luxury</a>
                {#if showBody}
                    <div class="hidden md:block">
                        <a href="/details/New" class={`font-semibold text-sm px-3 ${active === "New" ? "border-b-2 border-black" : ""}`}>New</a>
                        <a href="/details/Women" class={`font-semibold text-sm px-3 ${active === "Women" ? "border-b-2 border-black" : ""}`}>Women</a>
                        <a href="/details/Men" class={`font-semibold text-sm px-3 ${active === "Men" ? "border-b-2 border-black" : ""}`}>Men</a>
                        <a href="/details/Jewelry" class={`font-semibold text-sm px-3 ${active === "Jewelry" ? "border-b-2 border-black" : ""}`}>Jewelry</a>
                        <a href="/details/Watches" class={`font-semibold text-sm px-3 ${active === "Watches" ? "border-b-2 border-black" : ""}`}>Watches</a>
                        <a href="/details/Beauty" class={`font-semibold text-sm px-3 ${active === "Beauty" ? "border-b-2 border-black" : ""}`}>Beauty</a>
                    </div>
                {/if}
            </div>
            {#if showBody}
                <div class="flex items-center gap-3">
                    <div class="flex px-1 items-center bg-white rounded-md md:bg-gray-200">
                        <div class="w-7 text-gray-400">
                            <IoIosSearch />
                        </div>
                        <input type="search" class="p-1 bg-gray-200 hidden outline-none rounded-md md:block" placeholder="Search"/>
                    </div>
                    <div class="w-8 text-gray-400">
                        <MdAccountBox />
                    </div>
                    <a href="/checkout" class="w-5"><FaShoppingBag/></a>
                    <button class="w-9 md:hidden" on:click={handle_click}>
                        <TiThMenu/>
                    </button>
                </div>
            {/if}
        </div>
    {:else}
        <div class="flex flex-col items-center gap-3 py-2 bg-black text-white z-10 relative">
            <button class="absolute right-8 top-4 w-9" on:click={handle_click}><MdClose /></button>
            <a href="/details/New" class={`font-semibold text-sm px-3 ${active === "New" ? "border-b-2 border-black" : ""}`}>New</a>
            <a href="/details/Women" class={`font-semibold text-sm px-3 ${active === "Women" ? "border-b-2 border-black" : ""}`}>Women</a>
            <a href="/details/Men" class={`font-semibold text-sm px-3 ${active === "Men" ? "border-b-2 border-black" : ""}`}>Men</a>
            <a href="/details/Jewelry" class={`font-semibold text-sm px-3 ${active === "Jewelry" ? "border-b-2 border-black" : ""}`}>Jewelry</a>
            <a href="/details/Watches" class={`font-semibold text-sm px-3 ${active === "Watches" ? "border-b-2 border-black" : ""}`}>Watches</a>
            <a href="/details/Beauty" class={`font-semibold text-sm px-3 ${active === "Beauty" ? "border-b-2 border-black" : ""}`}>Beauty</a>

        </div>
    {/if}
</div>