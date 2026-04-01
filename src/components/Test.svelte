<script lang="ts">
  import {activeElement} from "runed"
  import {IsMounted} from "runed"

  let inputElement = $state<HTMLInputElement | undefined>()

  const mounted = new IsMounted()

  $inspect(mounted.current)
</script>

<input bind:this={inputElement} />

{#if activeElement.current === inputElement}
  The input element is active!
{/if}
