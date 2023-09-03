<script lang="ts">
    import Login from "./Login.svelte";
    import Register from "./Register.svelte";
    import ForgotPws from "./ForgotPws.svelte";
    import { staticStates } from "$lib";
	import { scale } from "svelte/transition";
    
</script>

<main in:scale>
    {#if $staticStates.showReg}
        <Register />
    {:else if $staticStates.showRecover}
        <ForgotPws />
    {:else}
        <Login />
    {/if}
</main>