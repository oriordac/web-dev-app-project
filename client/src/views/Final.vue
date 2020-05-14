<template>
<div class="final">
    <h1 class="title">{{ Final.State.Test[0].Name}}</h1>
</div>
</template>

<script>
import Final from "../models/Final";
export default {
    data: () => ({
        Final
    }),
    created() {
        Final.Init()
    }
}
</script>

<style>

</style>