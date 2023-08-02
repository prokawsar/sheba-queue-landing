<script lang="ts">
  import Fa from 'svelte-fa';
  import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
  export let name = '',
    title = '',
    photoUrl = '#',
    profilesUrls: any = [],
    description = '';

  const icons: any = {
    Github: faGithub,
    LinkedIn: faLinkedin,
  };
</script>

<div
  class="rounded-3xl bg-slate-50 p-5 flex flex-col sm:flex-row items-center gap-3 shadow-lg hover:shadow-2xl"
>
  <div
    class:hidden={photoUrl == '#'}
    class="rounded-full h-24 sm:h-44 border shadow-md border-violet-400 sm:-ml-20 bg-white"
  >
    <img class="h-full rounded-full" src={photoUrl} alt="" />
  </div>

  <div class="flex flex-col justify-between gap-2">
    <div>
      <p class="text-3xl">{name}</p>
      <p class="text-xl">{title || 'Intern'}</p>
      <p class="text-sm">
        {description}
      </p>
    </div>
    <div class="flex flex-row items-center mt-10 gap-2">
      {#each profilesUrls as url}
        <a class="" href={url.url} target="_blank">
          <Fa icon={icons[url.name]} />
        </a>
      {/each}
    </div>
  </div>
</div>
