<script lang="ts">
  export let variant: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' = 'default';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let animated: boolean = false;
  export let icon: string = '';
  export let dot: boolean = false;
</script>

<span
  class="badge"
  class:badge-primary={variant === 'primary'}
  class:badge-secondary={variant === 'secondary'}
  class:badge-success={variant === 'success'}
  class:badge-warning={variant === 'warning'}
  class:badge-error={variant === 'error'}
  class:badge-sm={size === 'sm'}
  class:badge-lg={size === 'lg'}
  class:animate-pulse={animated}
  role="status"
  aria-label="Badge"
>
  {#if dot}
    <span class="badge-dot" aria-hidden="true"></span>
  {/if}
  {#if icon}
    <span class="badge-icon" aria-hidden="true">{icon}</span>
  {/if}
  <slot />
</span>

