<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';
  export let padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  export let center: boolean = true;
  export let as: 'div' | 'section' | 'main' | 'article' = 'div';
</script>

{#if as === 'section'}
  <section
    class="container-app"
    class:container-sm={size === 'sm'}
    class:container-lg={size === 'lg'}
    class:container-xl={size === 'xl'}
    class:container-full={size === 'full'}
    class:px-4={padding === 'sm'}
    class:px-6={padding === 'md'}
    class:px-8={padding === 'lg'}
    class:px-0={padding === 'none'}
    class:mx-auto={center}
  >
    <slot />
  </section>
{:else if as === 'main'}
  <main
    class="container-app"
    class:container-sm={size === 'sm'}
    class:container-lg={size === 'lg'}
    class:container-xl={size === 'xl'}
    class:container-full={size === 'full'}
    class:px-4={padding === 'sm'}
    class:px-6={padding === 'md'}
    class:px-8={padding === 'lg'}
    class:px-0={padding === 'none'}
    class:mx-auto={center}
  >
    <slot />
  </main>
{:else if as === 'article'}
  <article
    class="container-app"
    class:container-sm={size === 'sm'}
    class:container-lg={size === 'lg'}
    class:container-xl={size === 'xl'}
    class:container-full={size === 'full'}
    class:px-4={padding === 'sm'}
    class:px-6={padding === 'md'}
    class:px-8={padding === 'lg'}
    class:px-0={padding === 'none'}
    class:mx-auto={center}
  >
    <slot />
  </article>
{:else}
  <div
    class="container-app"
    class:container-sm={size === 'sm'}
    class:container-lg={size === 'lg'}
    class:container-xl={size === 'xl'}
    class:container-full={size === 'full'}
    class:px-4={padding === 'sm'}
    class:px-6={padding === 'md'}
    class:px-8={padding === 'lg'}
    class:px-0={padding === 'none'}
    class:mx-auto={center}
  >
    <slot />
  </div>
{/if}
