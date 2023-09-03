<script lang="ts">
	import Button from "$lib/Components/Button.svelte";
	import { scale, fly } from "svelte/transition";
    import { staticStates } from "$lib";

</script>

<main in:scale>
    <div class="p-4 sm:max-w-lg mx-auto flex flex-col gap-2">
        <h1 class="h1 text-center p-2" in:fly={{y:-100, duration:500}}>Forgot password</h1>
        <p class="text-center text-green-300">An email will be sent containing the password reset link</p>
        <input type="email" placeholder="Email" class="input" in:fly={{x:-80, duration:500}}/>
        <div class="flex" in:fly={{y:80, duration:500}}>
            <div class="w-full"></div>
            <Button round="rounded-2xl" title="Send" />
            <div class="w-full"></div>
        </div>

    
        <div class="flex gap-2 justify-center mt-2">
            <p>Already recovered?</p>
            <button class="font-semibold hover:text-pink-500 active:scale-95"
            on:click={() => $staticStates.showRecover = false}
            >Login here</button>
        </div>
            
    </div>
</main>