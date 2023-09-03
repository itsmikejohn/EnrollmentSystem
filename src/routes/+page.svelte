<script lang="ts">
	import { goto } from "$app/navigation";
	import { staticStates } from "$lib";
	import Button from "$lib/Components/Button.svelte";
	import { scale } from "svelte/transition";


</script>

<main in:scale>
	<div class="card p-4 flex flex-col gap-2 shadow-lg shadow-black">
		<h1 class="h3 text-center">Welcome to International State College PH Enrollment System Design and Implementation for Incoming Students for the Year 2023.</h1>
		<p class="text-center">Where simplicity meets efficiency! Let our friendly chat system guide you through the process seamlessly, making enrollment a breeze. Say goodbye to complexities and hello to hassle-free enrollment. Let's get started!"</p>
		
		<Button color="bg-gradient-to-br from-cyan-700 to-pink-500" title="Let's go!" on:click={() => {
			goto("/Login");
			$staticStates.activeItem = "/Login"
		}}/>
	</div>
</main>