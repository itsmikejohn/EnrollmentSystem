<script lang="ts">
    import { staticStates } from "$lib";
	import { fly, scale } from "svelte/transition";

    const forwardSearch = (searchParams: string) =>
    {
        window.open(`https://www.google.com/search?q=${searchParams}&sca_esv=562336811&source=hp&ei=kX_0ZOfBKf-N2roPvLisqA0&iflsig=AD69kcEAAAAAZPSNoS6NHHFSKxzqotmSoo2-vX7vNYZc&ved=0ahUKEwinzrL8u46BAxX_hlYBHTwcC9UQ4dUDCAk&uact=5&oq=${searchParams}&gs_lp=Egdnd3Mtd2l6IgVIZWxsbzIIEC4YgAQYsQMyCxAuGIAEGLEDGIMBMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMgsQABiABBixAxiDATIIEC4YgAQYsQMyCxAAGIAEGLEDGIMBMggQLhiABBixAzIIEAAYgAQYsQNInh1Q8BVYgRtwAXgAkAEAmAG5AaAB5wOqAQM0LjG4AQPIAQD4AQGoAgrCAhAQABgDGI8BGOoCGIwDGOUCwgIQEC4YAxiPARjqAhiMAxjlAsICBRAAGIAEwgILEC4YigUYsQMYgwHCAggQABiKBRixA8ICCxAAGIoFGLEDGIMBwgIIEC4YsQMYgAQ&sclient=gws-wiz`)
    }
</script>

<main in:scale>
    {#each $staticStates.seniorHigh as seniorHigh }
        <div class="card p-2 shadow-lg shadow-black mt-5">
            <h1 class=" p-2 h4 text-center">{seniorHigh.title}</h1>
            <div class="mt-2 p-2">
                {#each seniorHigh.courses as courses }
                    <div class="max-w-fit mt-2">
                        <button class="p-2 transition-all hover:underline w-full text-left hover:text-pink-500" on:click={() => forwardSearch(courses)}>{courses}</button>
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</main>