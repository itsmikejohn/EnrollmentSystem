<script lang="ts">
    import College from "./College.svelte";
    import SeniorHigh from "./SeniorHigh.svelte";
    import Requirement from "./Requirement.svelte";
	import { scale } from "svelte/transition";

    const selections = ["College", "Senior High Track", "Requirements" ];

    const dsComp = {
        activeItem: selections.indexOf("College"),
    }

    const selectHandler = (selected: string) => dsComp.activeItem = selections.indexOf(selected);

    
</script>

<main in:scale>
    <div class="flex flex-col sm:flex-row sm:justify-center gap-2 bg-pink-500 p-2">
        {#each selections as selection }
            <div class="p-2 text-white cursor-pointer hover:border-2 w-full text-center active:scale-95 active:font-semibold" role="button" tabindex="0"
            class:active={dsComp.activeItem === selections.indexOf(selection)}
            on:keydown={() => {}}
            on:click={() => selectHandler(selection)}
            >
                {selection}
            </div>
        {/each}
    </div>

    {#if dsComp.activeItem === 0}
        <College />
    {:else if dsComp.activeItem === 1}
        <SeniorHigh />
    {:else if dsComp.activeItem === 2}
        <Requirement />
    {/if}
</main>

<style>
    .active{
        background-color: yellow;
        color: black;
        font-weight: bold;
    }
</style>