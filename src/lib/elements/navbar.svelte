<script>
  import Menu from '$lib/icons/menu.svelte';
  import { quintOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';

  let showMobileMenu = false;

  const openMenu = () => {
    showMobileMenu = !showMobileMenu;
  };
</script>

<div class="bg-gray-100 fixed top-0 w-full z-20">
  <div
    class="container mx-auto flex flex-row w-full sm:justify-between items-center"
  >
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="sm:hidden mr-2" on:click={() => openMenu()} on:keydown>
      <Menu />
    </div>
    <div class="w-52">
      <img src="/images/logo.png" alt="logo" class="p-2" />
    </div>
    <div class="hidden sm:flex flex-row gap-4 sm:-ml-10">
      <a class="" href="/">Home</a>
      <!-- <a href="/#about">About</a> -->
      <a href="/#our-tech">Our Technology</a>
      <a href="/#our-work">Our Work</a>
      <a href="/#team">Team</a>
      <a href="/#contact">Contact</a>
    </div>
    <a
      href="#contact"
      class="hidden sm:block rounded-3xl border-[1.5px] px-3 py-2 border-gray-300"
    >
      Contact Us
    </a>

    {#if showMobileMenu}
      <div
        transition:slide={{
          delay: 150,
          duration: 300,
          easing: quintOut,
          axis: 'y',
        }}
        class="absolute w-[97%] left-[6px] h-60 p-4 bg-gray-100 shadow-lg rounded-md top-16"
      >
        <div class="flex flex-col gap-4">
          <a class="" href="/" on:click={openMenu}>Home</a>
          <!-- <a href="/#about">About</a> -->
          <a href="/#our-tech" on:click={openMenu}>Our Technology</a>
          <a href="/#our-work" on:click={openMenu}>Our Work</a>
          <a href="/#team" on:click={openMenu}>Team</a>
          <a href="/#contact" on:click={openMenu}>Contact</a>
        </div>
      </div>
    {/if}
  </div>
</div>
