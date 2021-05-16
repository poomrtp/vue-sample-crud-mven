<template>
  <div>
    <!-- navbar -->
    <nav
      class="navbar navbar-light bg-light justify-content-between flex-nowarp flex-row"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">MEVN</router-link>
        <ul class="nav navbar flex-row float-right">
          <li class="nav-item">
            <router-link to="/view" class="nav-link"
              >View Student List</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/create" class="nav-link"
              >Create Student</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- content -->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
