<template>
    <div>
        <NavHeaderVue></NavHeaderVue>
            <router-view></router-view>
        <NavFooterVue></NavFooterVue>
        
    </div>
</template>

<script>
import NavHeaderVue from '../components/NavHeader.vue'
import NavFooterVue from '../components/NavFooter.vue'

export default {
    
}
</script>