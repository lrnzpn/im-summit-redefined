<template>
  <div id="home">
    <section id="redefine">
      <div class="redefine-bg">
        <div class="redefine-text">
          <div class="rdf-txt-wrapper">
            <span>redefine your limits</span>
            <div class="rdf-icon-container">
              <div class="im-icon"></div>
            </div>
            <router-link class="btn-white" to="/apply">apply now</router-link>
          </div>
        </div>
      </div>
    </section>
    <section id="about">
      <div class="center-wrapper">
        <div class="about-header">
          <h1>im summit 2020</h1>
        </div>
        <div class="about-content">
          <div class="abt-cntnt-wrapper">
            <div class="about-wrapper">
              <h3>A business competetion that brings IT and business together</h3>
            </div>
            <div class="about-sponsors">
              <div class="huawei-container">
                <div class="huawei-logo logo-img"></div>
                <span>Co-presenter</span>
              </div>
              <div class="ateneomisa-container">
                <div class="ateneomisa-logo logo-img"></div>
                <router-link class="btn-white" to="/about">about im summit</router-link>
              </div>
              <div class="unilever-container">
                <div class="unilever-logo logo-img"></div>
                <span>Co-presenter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="fees">
      <div class="center-wrapper">
        <div class="fees-wrapper">
          <div class="reg-header">
            <h1>registration fees</h1>
          </div>
          <div class="reg-fees-container">
            <div class="fee-box early">
              <div class="reg-type">
                <span class="rtype">early bird</span>
                <span class="rdur">{{ earlyStart }} - {{ earlyEnd }}</span>
              </div>
              <span class="price">{{ earlyPrice }}</span>
            </div>
            <div class="fee-box regular">
              <span class="price">{{ regPrice }}</span>
              <div class="reg-type">
                <span class="rtype">regular</span>
                <span class="rdur">{{ regStart }} - {{ regEnd }}</span>
              </div>
            </div>
          </div>
          <div class="reg-btn-container">
            <router-link class="btn-navy" to="/mechanics">mechanics</router-link>
          </div>
        </div>
      </div>
    </section>
    <section id="prize">
      <div class="center-wrapper">
        <div class="prize-header">
          <h1>get a chance to win</h1>
        </div>

        <div class="prize-wrapper">
          <span id="line-divider"></span>
          <div class="prize-container">
            <span class="prize">{{ first }}</span>
            <div class="ribbon-container">
              <div class="ribbon-first logo-img"></div>
            </div>
            <span class="place">champion</span>
          </div>
          <span id="line-divider"></span>
          <div class="prize-container">
            <span class="prize">{{ second }}</span>
            <div class="ribbon-container">
              <div class="ribbon-second logo-img"></div>
            </div>
            <span class="place">second</span>
          </div>
          <span id="line-divider"></span>
          <div class="prize-container">
            <span class="prize">{{ third }}</span>
            <div class="ribbon-container">
              <div class="ribbon-third logo-img"></div>
            </div>
            <span class="place">third</span>
          </div>
          <span id="line-divider"></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      earlyStart: "February 26",
      earlyEnd: "March 4",
      earlyPrice: 400,
      regStart: "March 5",
      regEnd: "March 18",
      regPrice: 500,
      first: "35,000",
      second: "15,000",
      third: "10,000"
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  padding-bottom: 5%;
}

#redefine {
  width: 100%;
  .redefine-bg {
    background-image: url("../assets/background/Grouped Filter.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 70vh;

    @media screen and (max-width: 991px) {
      height: 60vh;
    }

    .redefine-text {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: inherit;

      .rdf-txt-wrapper {
        width: 100%;
        margin: 0 auto;

        @media screen and (max-width: 768px) {
          width: 95%;
        }
      }

      span {
        font-size: $font-size--5 * 3;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0.2em;

        @media screen and (max-width: 1199px) {
          font-size: $font-size--5 * 2;
        }

        @media screen and (max-width: 768px) {
          font-size: $font-size--5 * 1.5;
          margin-bottom: 0;
        }

        @media screen and (max-width: 575px) {
          font-size: $font-size--6;
        }
      }

      .rdf-icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        .im-icon {
          background-image: url("../assets/logos/logo.png");
          background-repeat: no-repeat;
          background-size: contain;
          width: 75px;
          height: 75px;
        }
      }
    }
  }
}

#about {
  background-image: url("../assets/background/Group 9.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center 75%;

  .about-header {
    margin-bottom: 3%;
    h1 {
      font-size: $font-size--6;
      color: $navy;
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 0.15em;

      @media screen and (max-width: 1199px) {
      }

      @media screen and (max-width: 991px) {
        font-size: $font-size--5;
      }

      @media screen and (max-width: 768px) {
      }

      @media screen and (max-width: 575px) {
      }
    }
  }

  .about-content {
    background-color: $teal;
    height: 350px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      height: 100%;
    }

    .abt-cntnt-wrapper {
      margin: 5% 0;

      @media screen and (max-width: 575px) {
        margin: 10% 0;
      }
    }

    .about-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      h3 {
        color: $white;
        letter-spacing: 0.1em;
        font-size: $font-size--6;
        margin: 0;

        @media screen and (max-width: 1199px) {
        }

        @media screen and (max-width: 991px) {
          font-size: $font-size--5;
        }

        @media screen and (max-width: 768px) {
        }

        @media screen and (max-width: 575px) {
          font-size: $font-size--4;
        }

        @media screen and (max-width: 375px) {
          font-size: $font-size--3;
        }
      }
    }

    .about-sponsors {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      margin: 0 auto;

      @media screen and (max-width: 575px) {
        margin: 0 auto;
        flex-direction: column;
      }

      span {
        color: $white;
        font-weight: 300;
        font-style: italic;
        font-size: $font-size--6;
        letter-spacing: 0.1em;

        @media screen and (max-width: 1199px) {
        }

        @media screen and (max-width: 991px) {
          font-size: $font-size--5;
        }

        @media screen and (max-width: 768px) {
          font-size: $font-size--4;
        }

        @media screen and (max-width: 575px) {
          font-size: $font-size--3;
        }
      }
      .logo-img {
        margin-bottom: 5%;
      }

      .huawei-container {
        order: 1;
        height: 80px;
        margin: 5% 0;
        .huawei-logo {
          background-image: url("../assets/logos/HW_POS_RBG_Vertical-150ppi 1.png");
        }

        @media screen and (max-width: 575px) {
          height: 60px;
        }

        @media screen and (max-width: 375px) {
          height: 50px;
          margin: 8% 0;
        }
      }

      .unilever-container {
        order: 3;
        height: 80px;
        margin: 5% 0;
        .unilever-logo {
          background-image: url("../assets/logos/Unilever Logo 1.png");
        }
        @media screen and (max-width: 575px) {
          height: 60px;
          order: 2;
        }

        @media screen and (max-width: 375px) {
          height: 50px;
          margin: 8% 0;
        }
      }

      .ateneomisa-container {
        order: 2;
        height: 75px;
        width: auto;
        margin: 5% 0;
        .ateneomisa-logo {
          background-image: url("../assets/logos/white full logo 1.png");
        }

        @media screen and (max-width: 575px) {
          order: 3;
          height: 60px;
        }

        @media screen and (max-width: 375px) {
          height: 40px;
          margin: 8% 0;
        }
      }
    }
  }
}

#fees {
  background-color: $offwhite--2;
  padding: 5% 0;
  margin-bottom: 5%;

  .fees-wrapper {
    border-right: 1px solid $alpha-teal;
    border-left: 1px solid $alpha-teal;

    .reg-header {
      h1 {
        font-size: $font-size--6;
        letter-spacing: 0.15em;
        color: $navy;
        font-weight: bold;
        text-transform: uppercase;

        @media screen and (max-width: 1199px) {
        }

        @media screen and (max-width: 991px) {
          font-size: $font-size--5;
        }

        @media screen and (max-width: 768px) {
        }

        @media screen and (max-width: 575px) {
        }
      }
    }

    .reg-fees-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      .early {
        @media screen and (max-width: 768px) {
          flex-direction: column-reverse;
        }
      }

      .regular {
        @media screen and (max-width: 768px) {
          flex-direction: column;
        }
      }

      .fee-box {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;

        @media screen and (max-width: 768px) {
          margin: 2.5% 0 5% 0;
        }

        span {
          color: $navy;
        }

        .price {
          font-size: $font-size--5 * 3;
          font-weight: bold;
          margin-bottom: 20px;

          @media screen and (max-width: 1199px) {
            font-size: $font-size--5 * 2;
          }

          @media screen and (max-width: 768px) {
            font-size: $font-size--5 * 1.5;
            margin-bottom: 0;
          }

          @media screen and (max-width: 575px) {
            font-size: $font-size--6;
          }
        }

        .reg-type {
          display: flex;
          flex-direction: column;
          width: 270px;
          @media screen and (max-width: 768px) {
            width: 100%;
          }

          .rtype {
            text-transform: uppercase;
            letter-spacing: 0.15em;
            font-size: $font-size--8;

            @media screen and (max-width: 1199px) {
              font-size: $font-size--7;
            }

            @media screen and (max-width: 991px) {
              font-size: $font-size--6;
            }

            @media screen and (max-width: 768px) {
              font-size: $font-size--5;
            }

            @media screen and (max-width: 575px) {
              font-size: $font-size--4;
            }
          }

          .rdur {
            font-size: $font-size--5;
            font-style: italic;

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
  }
}

#prize {
  .prize-header {
    h1 {
      font-size: $font-size--6;
      font-weight: 500;
      color: $orange;
      letter-spacing: 0.15em;
      text-transform: uppercase;

      @media screen and (max-width: 1199px) {
      }

      @media screen and (max-width: 991px) {
        font-size: $font-size--5;
      }

      @media screen and (max-width: 768px) {
      }

      @media screen and (max-width: 575px) {
      }
    }
  }

  .prize-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 575px) {
      flex-direction: column;
    }

    #line-divider {
      height: 150px;
      border-right: 1px solid $alpha-orange;

      @media screen and (max-width: 768px) {
        height: 125px;
      }

      @media screen and (max-width: 575px) {
        width: 150px;
        height: 0px;
        border-right: 0;
        border-bottom: 1px solid $alpha-orange;
      }
    }

    .prize-container {
      .prize {
        color: $orange;
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
        font-weight: 500;
        font-size: $font-size--5 * 3;

        @media screen and (max-width: 1199px) {
          font-size: $font-size--5 * 2;
        }

        @media screen and (max-width: 768px) {
          font-size: $font-size--5 * 1.5;
          margin-bottom: 0;
        }

        @media screen and (max-width: 575px) {
          font-size: $font-size--6;
        }
      }

      .place {
        color: $orange;
        font-size: $font-size--7;
        text-transform: uppercase;

        @media screen and (max-width: 991px) {
          font-size: $font-size--6;
        }
        @media screen and (max-width: 768px) {
          font-size: $font-size--5;
        }

        @media screen and (max-width: 575px) {
          font-size: $font-size--4;
        }
      }

      .ribbon-container {
        height: 80px;

        @media screen and (max-width: 768px) {
          height: 60px;
        }

        .ribbon-first {
          background-image: url("../assets/icons/Frame 31.png");
        }

        .ribbon-second {
          background-image: url("../assets/icons/Frame 32.png");
        }

        .ribbon-third {
          background-image: url("../assets/icons/Frame 33.png");
        }
      }
    }
  }
}
</style>
