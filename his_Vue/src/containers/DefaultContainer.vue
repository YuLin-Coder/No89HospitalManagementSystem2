<template>
  <div class="app">
    <app-header fixed>
      <b-navbar-nav class="md-auto">
        <DefaultDropdownNav/>
      </b-navbar-nav>
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="img/brand/logo.svg" width="80" height="40" alt="CoreUI Logo">
        <!--<img class="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo">-->
      </b-link>
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item v-for="(item, index) in nav" :key ="index" class="px-3" :to="item.url" active-class="text-primary">
          {{item.name}}
        </b-nav-item>
      </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <DefaultHeaderDropdownAccnt/>
        </b-navbar-nav>
    </app-header>
    <div class="app-body">
      <main class="main">
        <div class="row mt-3"></div>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
    <TheFooter>
      <!--footer-->
      <div>
        <span class="ml-1">Copyright &copy; 2021 <a href="https://coreui.io">医院</a>.</span>
      </div>
      <div class="ml-auto">
        <span class="mr-1">Powered by</span>
        <a href="https://coreui.io">CoreUI for Vue</a>
      </div>
    </TheFooter>
  </div>
</template>

<script>
import nav from '../nav'
import { Header as AppHeader, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
import DefaultAside from './DefaultAside'
import DefaultHeaderDropdownAccnt from './DefaultHeaderDropdownAccnt'
import {mapState} from 'vuex'
import DefaultDropdownNav from './DefaultDropdownNav'

export default {
  name: 'DefaultContainer',
  components: {
    DefaultDropdownNav,
    AsideToggler,
    AppHeader,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DefaultAside,
    DefaultHeaderDropdownAccnt,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  data () {
    return {}
  },
  computed: {
    name () {
      return this.$route.name
    },
    ...mapState('common', ['curr_user_type']),
    nav(){
      return nav.items[this.curr_user_type]
    }
  }
}
</script>
