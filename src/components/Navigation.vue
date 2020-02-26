<template>
  <div id="navigation">
    <b-navbar toggleable="lg" class="center-wrapper">
      <b-navbar-brand href="/">
        <div class="logo-container">
          <div class="imsummit-logo"></div>
          <span>IM Summit: Redefined</span>
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" :class="{ active: isActive }" @click="burgerX">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for="link in links" :key="link.id" :href="link.page" class="nav-link">
            {{
            link.text
            }}
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0,
      links: [
        {
          id: 0,
          text: "About",
          page: "/about"
        },
        {
          id: 1,
          text: "Mechanics",
          page: "/mechanics"
        },
        {
          id: 2,
          text: "FAQ",
          page: "/faq"
        },
        {
          id: 3,
          text: "Apply",
          page: "/apply"
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("resize", function() {
      if (window.innerWidth > 991) {
        document.querySelector(".navbar-toggler").classList.remove("active");
      }
    });
  },
  methods: {
    burgerX: function() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
#navigation {
  background-color: $teal;
  position: fixed;
  z-index: 9999;
  width: 100%;

  nav {
    padding: 0.5rem 0;
  }

  .nav-link {
    color: rgba(255, 255, 255, 0.8);
    margin-left: 4em;
    font-size: $font-size--4;
    text-transform: uppercase;
    padding-right: 0;
    padding-left: 0;

    @media screen and (max-width: 991px) {
      margin-left: 0;
    }

    @media screen and (max-width: 575px) {
      font-size: $font-size--3;
    }

    &:hover,
    &:active {
      color: $white;
    }
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .imsummit-logo {
      height: 2em;
      width: 3em;
      background-image: url("../assets/logos/logo.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }

    span {
      margin-left: 3%;
      color: $white;
      text-transform: uppercase;
      text-align: center;
      font-size: $font-size--4;

      @media screen and (max-width: 575px) {
        font-size: $font-size--3;
      }

      @media screen and (max-width: 375px) {
        font-size: $font-size--2;
      }
    }
  }
}

.router-link-exact-active {
  color: $white !important;
}

// override burger menu.nav-bar
.navbar-toggler {
  padding: 0.5rem 0.75rem;
  border-color: rgba(255, 255, 255, 0.1) !important;
  .icon-bar {
    display: block;
    width: 24px;
    height: 3px;
    border-radius: 1px;
    background-color: $white;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
      background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .icon-bar + .icon-bar {
    margin-top: 6px;
  }
}

.active span.icon-bar:nth-child(1) {
  -webkit-transform: translateY(0) rotate(0);
  transform: translateY(0) rotate(0);
}
.active span.icon-bar:nth-child(2) {
  opacity: 1;
}
.active span.icon-bar:nth-child(3) {
  -webkit-transform: translateY(0) rotate(0);
  transform: translateY(0) rotate(0);
}
.active span.icon-bar {
  -webkit-transition: all 300ms;
  transition: all 300ms;
}
.active span.icon-bar:nth-child(1) {
  -webkit-transform: translateY(300%) rotate(45deg);
  transform: translateY(300%) rotate(45deg);
}
.active span.icon-bar:nth-child(2) {
  opacity: 0;
}
.active span.icon-bar:nth-child(3) {
  -webkit-transform: translateY(-300%) rotate(-45deg);
  transform: translateY(-300%) rotate(-45deg);
}
</style>
