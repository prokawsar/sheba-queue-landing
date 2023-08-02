<script>
  import Profile from '$lib/elements/profile.svelte';
</script>

<div id="team" class="py-10 w-full">
  <div class="container mx-auto px-10 flex flex-col gap-5 items-center">
    <h2 class="p-2 bg-violet-200 text-violet-800 rounded-3xl">Our Team</h2>
    <p class="text-2xl text-center">
      We possess an exceptionally skilled team <br /> diligently focused on maintaining
      the excellence of their deliverables.
    </p>
    <div class="flex flex-col sm:flex-row gap-20">
      <Profile
        name="Kawsar Ahmed"
        photoUrl="https://avatars.githubusercontent.com/u/9526172?v=4"
        title="Lead Engineer (Web)"
        profilesUrls={[
          { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prokawsar/' },
          { name: 'Github', url: 'https://github.com/prokawsar' },
        ]}
      />

      <Profile
        name="Rafsan Uddin Beg Rizan"
        title="Lead Engineer (Mobile)"
        photoUrl="https://avatars.githubusercontent.com/u/32144390?v=4"
        profilesUrls={[
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/rafsan-uddin-beg-rizan/',
          },
          { name: 'Github', url: 'https://github.com/RizanPSTU' },
        ]}
      />
    </div>
  </div>
</div>
