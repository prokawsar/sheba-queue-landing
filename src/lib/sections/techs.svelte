<script>
  const techs = [
    {
      name: 'Svelte',
      logo: 'https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.svg',
    },
    {
      name: 'SvelteKit',
      logo: 'https://repository-images.githubusercontent.com/354583933/72c58c80-9727-11eb-98b2-f352fded32b9',
    },
    {
      name: 'React',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png',
    },
    {
      name: 'Next.js',
      logo: 'https://seeklogo.com/images/N/nextjs-logo-963D40B71E-seeklogo.com.png',
    },
    {
      name: 'Tailwind',
      logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
    },
    {
      name: 'JavaScript',
      logo: 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
    },
    {
      name: 'TypeScript',
      logo: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png',
    },
    {
      name: 'Flutter',
      logo: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg',
    },
    {
      name: 'Android',
      logo: 'https://www.vectorlogo.zone/logos/android/android-official.svg',
    },
    {
      name: 'iOS',
      logo: 'https://www.vectorlogo.zone/logos/apple/apple-tile.svg',
    },
  ];

  $: techs1 = techs.slice(0, techs.length / 2);
  $: techs2 = techs.slice(techs.length / 2, techs.length);
</script>

<div id="our-tech" class="bg-gray-100 py-10 w-full">
  <div
    class="container mx-auto flex flex-col gap-4 justify-center items-center"
  >
    <h2 class="p-2 bg-violet-200 text-violet-800 rounded-3xl">
      Technology we expert in
    </h2>
    <p class="text-3xl text-center">Better performance, Better Management</p>

    <div class="hidden sm:flex flex-col sm:flex-row gap-2">
      {#each techs as tech}
        <div
          class="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
        >
          <img src={tech.logo} class="h-9 w-10" alt="" />
          <p class="text-xl">{tech.name}</p>
        </div>
      {/each}
    </div>

    <div class="grid grid-cols-2 gap-3 sm:hidden">
      <div class="flex flex-col sm:flex-row gap-2 sm:hidden">
        {#if techs.length}
          {#each techs1 as tech}
            <div
              class="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
            >
              <img src={tech.logo} class="h-9 w-10" alt="" />
              <p class="text-xl">{tech.name}</p>
            </div>
          {/each}
        {/if}
      </div>

      <div class="flex flex-col sm:flex-row gap-2 sm:hidden">
        {#if techs.length}
          {#each techs2 as tech}
            <div
              class="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
            >
              <img src={tech.logo} class="h-9 w-10" alt="" />
              <p class="text-xl">{tech.name}</p>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</div>
