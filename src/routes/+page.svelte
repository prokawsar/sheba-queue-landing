<script>
  import Hero from '$lib/sections/hero.svelte';
  import About from '$lib/sections/about.svelte';
  import Contact from '$lib/sections/contact.svelte';
  import Projects from '$lib/sections/projects.svelte';
  import Reveiw from '$lib/sections/reveiw.svelte';
  import Team from '$lib/sections/team.svelte';
  import Techs from '$lib/sections/techs.svelte';
</script>

<div class="w-screen flex flex-col items-center mx-auto">
  <Hero />
  <!-- <About /> -->
  <Techs />
  <!-- <Projects /> -->
  <!-- <Reveiw /> -->
  <Team />
  <Contact />
</div>

<svelte:head>
  <title>Sheba Queue | Software Agency</title>
</svelte:head>
