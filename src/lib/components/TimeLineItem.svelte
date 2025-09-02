<script lang="ts"> export let e: { company:string; role:string; period:string; bullets:string[] };</script>
<li class="mb-10 ms-6">
  <span class="absolute -start-2.5 mt-1.5 flex size-5 items-center justify-center rounded-full border bg-white text-neutral-700 shadow-sm dark:bg-neutral-950 dark:text-neutral-300 dark:border-neutral-800">•</span>
  <div class="card p-5">
    <div class="flex flex-wrap items-center justify-between gap-2">
      <div class="font-semibold">{e.role}</div>
      <div class="text-xs text-neutral-500">{e.period}</div>
    </div>
    <div class="text-sm text-neutral-600 dark:text-neutral-400">{e.company}</div>
    <ul class="mt-3 grid list-disc gap-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
      {#each e.bullets as b}<li>{b}</li>{/each}
    </ul>
  </div>
</li>