<script lang="ts">
	import { fly } from "svelte/transition";
    import { staticStates } from "$lib";
    let array_data = [
        {   
            name: "Home",
            url: "/",
        },

        {
            name: "Admission",
            url: "/Admission",
        },

        {
            name: "Guides",
            url: "/Guides",
        },

        {
            name: "Login",
            url: "/Login",
        }
    ]

   

    const dsComp = {
        showMenu: false,
    }


    const showMenu = () => dsComp.showMenu = !dsComp.showMenu;
    const backDrop = () => dsComp.showMenu = false;
    const captureClick = (url: string) =>
    {
        $staticStates.activeItem = url;
        dsComp.showMenu = false;
    }

    
    
</script>

<nav class="bg-gradient-to-bl p-2 from-blue-500 to-blue-700 fixed w-full top-0 left-0 right-0 z-10">
    <!--Mobile++ POV-->
    <div class="hidden mx-auto  sm:max-w-2xl sm:flex sm:flex-row-reverse gap-2">
        {#each array_data as item }
            <a href={item.url}  class="p-2 text-xl  hover:border-2 hover:rounded-2xl"
            class:active={$staticStates.activeItem === item.url}
            on:click={() => captureClick(item.url)}
            >{item.name}</a>
        {/each}
    </div>

    <!--Mobile POV-->
    <div class="flex flex-col gap-1 float-right sm:hidden p-3 rounded-full transition-all active:bg-gradient-to-tr from-blue-300 to-blue-900" role="button" tabindex="0"
    on:keydown={() =>{}}
    on:click={showMenu}
    >
        <div class="w-6 border-b-4 border-pink-800"></div>
        <div class="w-6 border-b-4 border-pink-800"></div>
        <div class="w-6 border-b-4 border-pink-800"></div>
    </div>

    {#if dsComp.showMenu}
        <!--Mobile Menu -->
        <div class="fixed left-0 right-0 top-0 bottom-0 sm:hidden" role="menu" tabindex="0"
        on:keydown={() =>{}}
        on:click|self={backDrop}
        >
            <div class="fixed top-0 right-0 bottom-0 bg-gradient-to-bl p-2 from-blue-900 to-blue-700 z-10" transition:fly={{x:200, duration:700}}>
                <div class="flex flex-col gap-1 float-left sm:hidden px-3 py-4 rounded-full transition-all active:bg-gradient-to-tr from-blue-300 to-blue-900" role="button" tabindex="0"
                on:keydown={() =>{}}
                on:click={showMenu}
                >
                    <div class="w-6 border-b-4 border-pink-800 rotate-45"></div>
                    <div class="w-6 border-b-4 border-pink-800 rotate-[-45deg] absolute"></div>
                </div>
        
        
                <div class="flex flex-col mt-20" role="menu">
                    {#each array_data as item }
                        <a href={item.url} class="p-2 text-xl hover:rounded-2xl" role="menuitem" tabindex="0"
                        class:active={$staticStates.activeItem === item.url}
                        on:click={() => captureClick(item.url)}
                        >{item.name}</a>
                    {/each}
                </div>
            </div>
        </div>
    {/if}

</nav>

<style>
    .active{
        background-color: yellow;
        border-radius: 5rem;
        transition: all;
        color: black;
    }
</style>


