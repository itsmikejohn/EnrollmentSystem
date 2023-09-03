<script lang="ts">
	import Button from "$lib/Components/Button.svelte";
	import { scale, fly } from "svelte/transition";
    import { staticStates } from "$lib";

</script>

<main in:scale>
    <div class="p-4 sm:max-w-lg mx-auto flex flex-col gap-2">
        <h1 class="h1 text-center p-2" in:fly={{y:-100, duration:500}}>Login</h1>
        <input type="email" placeholder="Email" class="input" in:fly={{x:-80, duration:500}}/>
        <input type="password" placeholder="Password" class="input" in:fly={{x:80, duration:500}}/>
        <div class="flex" in:fly={{y:80, duration:500}}>
            <div class="w-full"></div>
            <Button round="rounded-2xl" title="Login" />
            <div class="w-full"></div>
        </div>

        <div class="flex ">
            <div class="w-full text-right">
                <button class="font-semibold hover:text-pink-500 active:scale-95"
                on:click={() => $staticStates.showRecover = true}
                >Forgot password?</button>
            </div>
        </div>

        <div class="flex gap-2 justify-center mt-2">
            <p>New to this website?</p>
            <button class="font-semibold hover:text-pink-500 active:scale-95"
            on:click={() => $staticStates.showReg = true}
            >Sign up here</button>
        </div>
            
    </div>
</main>