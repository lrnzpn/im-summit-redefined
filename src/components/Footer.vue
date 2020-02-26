<template>
  <footer>
    <div class="footer center-wrapper">
      <div class="sm-wrapper">
        <a class="sm-icon fb" href="https://www.facebook.com/MISAIMSummit"> </a>
        <a
          class="sm-icon twit"
          href="https://twitter.com/ateneomisa?lang=en"
        ></a>
        <a class="sm-icon ig" href="https://www.instagram.com/ateneomisa/"></a>
      </div>

      <div class="logo-wrapper">
        <div class="misa-logo"></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  height: 4.5em;
  background-color: $teal;
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    height: 3.5em;
  }
}

.sm-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  .sm-icon {
    height: 2em;
    width: 2em;
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 1.5em;

    @media screen and (max-width: 768px) {
      height: 1.5em;
      width: 1.5em;
      margin-right: 1em;
    }

    @media screen and (max-width: 768px) {
      margin-right: 0.75em;
    }
  }

  .fb {
    background-image: url("../assets/icons/Frame 27.png");
  }

  .twit {
    background-image: url("../assets/icons/Frame 28.png");
  }

  .ig {
    background-image: url("../assets/icons/Frame 26.png");
  }
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  .misa-logo {
    background-image: url("../assets/logos/white full logo 1.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 2em;
    width: 10em;

    @media screen and (max-width: 768px) {
      height: 1.5em;
      width: 7.5em;
    }
  }
}
</style>
