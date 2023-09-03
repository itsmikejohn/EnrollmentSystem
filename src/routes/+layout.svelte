<script lang="ts">
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import Nav from '$lib/Components/Nav.svelte';

	import { page } from '$app/stores';
	import { staticStates } from '$lib';
	import { onMount } from 'svelte';

	onMount(() => {
		$staticStates.activeItem = $page.route.id;
		console.log($staticStates.activeItem)
	})

</script>

<main>
	<Nav />
	<div class="mt-20 mx-auto sm:max-w-2xl p-2 sm:p-0">
		<slot />
	</div>
</main>
