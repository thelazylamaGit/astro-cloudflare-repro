<script lang="ts">
  import {activeElement} from "runed"
  import {IsMounted} from "runed"
  import {buttonVariants} from "src/lib/components/ui/button/index.js"
  import * as Tooltip from "$lib/components/ui/tooltip/index.js"

  //   const mounted = new IsMounted()

  //   $inspect(mounted.current)
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger class={buttonVariants({variant: "outline"})}>Hover</Tooltip.Trigger>
    <Tooltip.Content>
      <p>Add to library</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
