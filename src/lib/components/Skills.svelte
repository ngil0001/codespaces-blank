<script lang="ts">
  import Badge from "./Badge.svelte";

  export let group: { name: string; items: string[] };
  export let variant: 'default' | 'primary' | 'secondary' = 'default';
  export let animated: boolean = true;
  export let staggerDelay: number = 100;
</script>

<div class="skills-card card p-6 animate-fade-in">
  <div class="skills-header mb-4">
    <h3 class="text-lg font-semibold text-neutral-900 dark:text-white">
      {group.name}
    </h3>
  </div>

  <div class="skills-grid">
    {#each group.items as item, index}
      <div
        class="skill-item"
        class:animate-stagger-1={animated && index % 4 === 0}
        class:animate-stagger-2={animated && index % 4 === 1}
        class:animate-stagger-3={animated && index % 4 === 2}
        class:animate-stagger-4={animated && index % 4 === 3}
        style={animated ? `animation-delay: ${index * staggerDelay}ms` : ''}
      >
        <Badge variant={variant} size="sm">
          {item}
        </Badge>
      </div>
    {/each}
  </div>
</div>

