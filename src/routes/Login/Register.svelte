<script lang="ts">
	import Button from "$lib/Components/Button.svelte";
	import { scale, fly } from "svelte/transition";
    import { staticStates } from "$lib";

    const dsComp = {
        loader: false,
        domMsg: "",
        gender: "",
        nickname: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

</script>

<main in:scale>
    <div class="p-4 sm:max-w-lg mx-auto flex flex-col gap-2">
        <h1 class="h1 text-center p-2">Registration</h1>
        
        <div class="w-full" in:fly={{x:-80, duration:500}}>
            <p class="absolute py-2 px-3 text-slate-400 {dsComp.gender ? "hidden": ""}">Gender</p>
            <select class="select rounded-3xl w-full" bind:value={dsComp.gender}>
                <option>Male</option>
                <option>Female</option>
            </select>
            
        </div>

        <input type="text" placeholder="Nickname" class="input" bind:value={dsComp.nickname} in:fly={{x:80, duration:500}}/>
        <input type="email" placeholder="Email" class="input" bind:value={dsComp.email} in:fly={{x:-80, duration:500}}/>
        <input type="password" placeholder="Password" class="input" bind:value={dsComp.password} in:fly={{x:80, duration:500}}/>
        <input type="password" placeholder="Confirm Password" class="input" bind:value={dsComp.confirmPassword} in:fly={{x:-80, duration:500}}/>
        
        <div class="flex" in:fly={{y:-80, duration:500}}>
            <div class="w-full"></div>
            <Button round="rounded-2xl" title="Sign up" />
            <div class="w-full"></div>
        </div>
        <div class="flex gap-2 justify-center mt-2">
            <p in:fly={{x:-80, duration:500}}>Already registered?</p>
            <button class="font-semibold hover:text-pink-500 active:scale-95" in:fly={{x:80, duration:500}}
            on:click={() => $staticStates.showReg = false}
            >Login here</button>
        </div>
            
    </div>
</main>