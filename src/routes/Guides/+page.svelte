<script lang="ts">
	import { scale } from "svelte/transition";


</script>

<main class="flex flex-col gap-2 text-center" in:scale>
    <p>Everything you see here is sample only and it is not connected to database yet.</p>

    <p>This fullstack system is forsale @ 3k PHP email me at eviotamikejohnb@gmail.com or chat me direclty on facebook

        <b class="text-blue-500 underline cursor-pointer" on:click={() => window.open("https://www.facebook.com/mike.eviota/")}
        role="button" tabindex="0"
        on:keydown={() => {}}
        >Mikey boy</b>

    </p>

    <p class="text-red-500">Additional charge if you want custom functionality that is not included in the system</p>

    <p>Stacks use: SvelteKit, TailwindCSS, Firebase noSQL or Supabase SQL</p>
    
</main>