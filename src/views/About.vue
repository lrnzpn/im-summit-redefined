<template>
  <div id="about">
    <div class="about center-wrapper">
      <section class="im-summit-about">
        <div class="im-summit-bg img-bg center">
          <div class="im-wrapper">
            <div class="im-icon-container center">
              <div class="im-icon logo-img"></div>
            </div>
            <div class="about-desc">
              <div class="about-header">
                <h1>IM Summit: Redefined</h1>
              </div>
              <div class="about-par">
                <p>
                  IM Summit is a three day conference/business case competition
                  that brings forth business and IT together to create real
                  value.
                  <br />
                  <br />With a 35,000 peso prize pool at stake, participants put
                  their experience and creativity to test and solve a real-life
                  business problems.
                  <br />
                  <br />Open to all majors not just IT and business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="misa-about">
        <div class="misa-bg img-bg center">
          <div class="misa-wrapper">
            <div class="misa-logo-container center">
              <div class="misa-logo logo-img"></div>
            </div>
            <div class="about-desc">
              <div class="about-header">
                <h1>Ateneo Management Information Systems Association</h1>
              </div>
              <div class="about-par">
                <p>
                  The Ateneo Management Information Systems Association (MISA)
                  is the Loyola School's premier Information Management
                  organization.
                  <br />
                  <br />It serves as the home organization of MIS-majors and IT
                  enthusiasts.
                  <br />
                  <br />Founded in 1994, it is now on it's 21st year of pursuing
                  its main advocacy: social transformation through information
                  management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="unilever-about">
        <div class="unilever-bg img-bg center">
          <div class="uni-wrapper">
            <div class="uni-icon-container center">
              <div class="uni-icon logo-img"></div>
            </div>
            <div class="about-desc">
              <div class="about-header">
                <h1>The Co-presenter: Unilever</h1>
              </div>
              <div class="about-par">
                <p>
                  Unilever is a British-Dutch multinational fast-moving consumer
                  goods (FMCG) corporation established in 1929.
                  <br />
                  <br />By making sustainable living common place, Unilever has
                  over 400 brands that give them a unique place in the lives of
                  people around the world.
                  <br />
                  <br />Their products consist of beverages, home care and
                  personal care products. Unilever's brands include Knorr,
                  Sunsilk, Cream Silk, Selecta, Domex, Ponds, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="huawei-about">
        <div class="huawei-bg img-bg center">
          <div class="huawei-wrapper">
            <div class="huawei-logo-container center">
              <div class="huawei-logo logo-img"></div>
            </div>
            <div class="about-desc">
              <div class="about-header">
                <h1>The Co-presenter: Huawei</h1>
              </div>
              <div class="about-par">
                <p>
                  Huawei is a leading global provider of information and
                  communications technology ( ICT ) infrastructure and smart
                  devices. With integrated solutions across four key domains –
                  telecom networks, IT, smart devices, and cloud services – we
                  are committed to bringing digital to every person, home and
                  organization for a fully connected, intelligent world.
                  <br />
                  <br />Huawei Philippines, established in 2003, is one of the
                  country's leading tech companies that not only focuses on
                  telecommunications but onto deeper aspects of technology with
                  the hopes of leading in innovation.
                  <br />
                  <br />Huawei is the global leader in telecoms with a great range of
                  products including mobile phones, tablets, watches and
                  wearables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  padding: 5% 0;
}

#about {
  .img-bg {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    border-radius: 10px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .im-summit-bg {
    background-image: url("../assets/background/DDI30-4 1.png");
    height: 550px;

    .im-icon-container {
      height: 70px;
      width: 100%;
      .im-icon {
        background-image: url("../assets/logos/logo.png");
      }
    }
  }

  .misa-bg {
    background-image: url("../assets/background/Rectangle 46.png");
    height: 550px;

    .misa-logo-container {
      height: 60px;
      width: 100%;
      .misa-logo {
        background-image: url("../assets/logos/white full logo 1.png");
      }

      @media screen and(max-width: 768px) {
        height: 40px;
      }
    }
  }

  .unilever-bg {
    background-image: url("../assets/background/shutterstock_370390046-2000x1200 1.png");
    height: 550px;
    .uni-icon-container {
      height: 80px;
      width: 100%;
      .uni-icon {
        background-image: url("../assets/logos/Unilever Logo 1.png");
      }

      @media screen and(max-width: 768px) {
        height: 60px;
      }
    }
  }

  .huawei-bg {
    background-image: url("../assets/background/home-image1 1.png");
    height: 550px;

    .huawei-logo-container {
      height: 60px;
      width: 100%;
      .huawei-logo {
        background-image: url("../assets/logos/HW_POS_RGB_Horizontal-150ppi 1.png");
      }

      @media screen and(max-width: 768px) {
        height: 40px;
      }
    }
  }

  .about-desc {
    color: $white;
    margin: 2.5% 5%;

    .about-header {
      text-align: center;
      h1 {
        font-weight: 600;

        font-size: $font-size--8;

        @media screen and (max-width: 991px) {
          font-size: $font-size--6;
        }

        @media screen and(max-width: 768px) {
          margin: 5% 0;
        }

        @media screen and (max-width: 575px) {
          font-size: $font-size--5;
        }

        @media screen and (max-width: 375px) {
          font-size: $font-size--4;
        }
      }
    }

    .about-par {
      text-align: left;
      p {
        font-size: $font-size--5;
        @media screen and (max-width: 768px) {
          font-size: $font-size--4;
        }

        @media screen and (max-width: 575px) {
          font-size: $font-size--3;
        }
      }
    }
  }
}
</style>
