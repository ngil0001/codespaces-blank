<script lang="ts">
    export let group: { name:string, items:string[] };
</script>
<div class="card p-5">
    <div class="font-medium">
        {group.name}
    </div>
    <div class="mt-3 flex flex-wrap gap-2">
        {#each group.items as i}
        <span class="badge">
            {i}
        </span>{/each}
    </div>
</div>
