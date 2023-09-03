<script lang="ts">
    export let title = "btn_title";
    export let loader = false;
    export let loader_title = "loader_title";
    export let color = "bg-green-500";
    export let round = "rounded-md";
</script>

<button class="w-full text-white px-2 py-1 transition-all {color} {round} active:opacity-30 hover:opacity-60" disabled={loader}
on:click
>
    {#if loader}
        <div class="flex items-center gap-2 justify-center">
            <p>{loader_title}</p>
            <div class="w-4 h-4 border-2 border-b-green-500 animate-spin rounded-full"></div>
        </div>
    {:else}
        <p>{title}</p>
    {/if}
</button>
