<script>
    import Checkout from "../lib/Checkout.svelte";
    import Scaffold from "../lib/Scaffold.svelte";
</script>


<main>
    <div class="h-[7vh]">
        <Scaffold showBody={false} />
    </div>
    <div class="h-[91vh] overflow-y-scroll remove-scrollbar border-t-2 pt-2 border-gray-300">
        <Checkout />
    </div>
</main>