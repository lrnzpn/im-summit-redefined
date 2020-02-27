<template>
  <div id="mechanics">
    <div class="timeline">
      <div class="timeline-header">
        <div class="center-wrapper">
          <h1>timeline</h1>
        </div>
      </div>
      <div class="timeline-body">
        <div class="center-wrapper">
          <div class="timeline-mechanics">
            <div class="tl-row">
              <div class="mechanics-card">
                <div class="mech-container">
                  <div class="mech-date">
                    <span>feb</span>
                    <span class="date">26</span>
                  </div>
                  <div class="mech-icons">
                    <div class="bird logo-img"></div>
                    <div class="sheets logo-img"></div>
                  </div>
                  <div class="mech-info">Early Bird Applications</div>
                </div>
              </div>
              <div class="mechanics-card">
                <div class="mech-container">
                  <div class="mech-date">
                    <span>Mar</span>
                    <span class="date">14</span>
                  </div>
                  <div class="mech-icons">
                    <div class="bird logo-img"></div>
                    <div class="sheets logo-img"></div>
                    <div class="exclamation logo-img"></div>
                  </div>
                  <div class="mech-info">
                    <span>Last Day</span>
                    <br />Early Bird Applications
                  </div>
                </div>
              </div>
              <div class="mechanics-card">
                <div class="mech-container">
                  <div class="mech-date">
                    <span>Mar</span>
                    <span class="date">15</span>
                  </div>
                  <div class="mech-icons">
                    <div class="sheets logo-img"></div>
                  </div>
                  <div class="mech-info">Regular Applications</div>
                </div>
              </div>
            </div>
            <div class="tl-row">
              <div class="mechanics-card">
                <div class="mech-container">
                  <div class="mech-date">
                    <span>Apr</span>
                    <span class="date">15</span>
                  </div>
                  <div class="mech-icons">
                    <div class="sheets logo-img"></div>
                    <div class="exclamation logo-img"></div>
                  </div>
                  <div class="mech-info">
                    <span>Last Day</span>
                    <br />Regular Applications
                  </div>
                </div>
              </div>
              <div class="mechanics-card">
                <div class="mech-container">
                  <div class="mech-date">
                    <span>Apr</span>
                    <span class="date">15</span>
                  </div>
                  <div class="mech-icons">
                    <div class="cash logo-img"></div>
                    <div class="exclamation logo-img"></div>
                  </div>
                  <div class="mech-info">
                    <span>Last Day</span>
                    <br />Payments
                  </div>
                </div>
              </div>
              <div class="mechanics-card">
                <div class="mech-container">
                  <div class="mech-date triple">
                    <div class="im-date-container">
                      <span>Apr</span>
                      <span class="date">18</span>
                    </div>
                    <div class="im-date-container">
                      <span>Apr</span>
                      <span class="date">25</span>
                    </div>
                    <div class="im-date-container">
                      <span>May</span>
                      <span class="date">2</span>
                    </div>
                  </div>
                  <div class="mech-icons">
                    <div class="im-icon logo-img"></div>
                  </div>
                  <div class="mech-info">IM Summit: Redefined</div>
                </div>
              </div>
            </div>
            <div class="timeline-instructions center-wrapper">
              <ul class="timeline-bulletpoints">
                <li class="tl-bp">
                  <span id="line-divider" class="line-1"></span>
                  <div class="num-container">
                    <div class="one logo-img"></div>
                  </div>
                  <div>Form a team with 3-5 members. Members of a team need not be from the same course or university.</div>
                </li>
                <li class="tl-bp">
                  <span id="line-divider" class="line-2"></span>
                  <div class="num-container">
                    <div class="two logo-img"></div>
                  </div>
                  <div>Complete the application form with your team and answer the given question about information management.</div>
                </li>
                <li class="tl-bp">
                  <span id="line-divider" class="line-3"></span>
                  <div class="num-container">
                    <div class="three logo-img"></div>
                  </div>
                  <div>
                    Pay the required participation fee per member to the Project Treasurer.
                    <ul>
                      <li>P400/member for early bird applicants</li>
                      <li>P500/member for regular applicants</li>
                    </ul>More information about payment will be sent to the team leader’s email.
                  </div>
                </li>
                <li class="tl-bp">
                  <div class="num-container">
                    <div class="four logo-img"></div>
                  </div>
                  <div>Attend the talks and business case competition.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.triple {
  width: 70%;
  display: flex;
  justify-content: space-evenly !important;
  align-items: center;
  flex-direction: row !important;
  margin: 0 auto;
  .im-date-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

#mechanics {
  .timeline-header {
    background-color: $light-orange;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      text-transform: uppercase;
      color: navy;
      text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
      font-weight: 500;
      text-align: left;
      font-size: $font-size--6;
    }
  }

  .timeline-body {
    background-image: url("../assets/background/Group 11.png");
    background-repeat: no-repeat;
    background-position: center;

    .timeline-mechanics {
      background-color: $gray;
      box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      top: -50px;

      .tl-row {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        padding-top: 5%;
        width: 100%;
        margin: 0 auto;

        @media screen and (max-width: 1199px) {
          width: 95%;
        }

        @media screen and (max-width: 768px) {
          flex-direction: column;
          padding-top: 0;
        }

        @media screen and (max-width: 575px) {
          width: 90%;
        }

        .mechanics-card {
          background-color: $offwhite--2;
          box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          height: 400px;
          width: 300px;
          display: flex;
          justify-content: center;
          align-items: center;

          @media screen and (max-width: 1199px) {
            width: 250px;
          }

          @media screen and (max-width: 991px) {
            width: 200px;
          }

          @media screen and (max-width: 768px) {
            height: 100%;
            width: 100%;
            margin: 5% 0;
          }

          @media screen and (max-width: 575px) {
          }

          .mech-container {
            width: 100%;
            height: 300px;

            @media screen and (max-width: 768px) {
              padding: 5% 0;
              height: 100%;
            }

            div {
              margin-bottom: 20px;
            }

            .mech-date {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;

              span {
                font-size: $font-size--6;
                text-transform: uppercase;

                @media screen and (max-width: 1199px) {
                }

                @media screen and (max-width: 991px) {
                  font-size: $font-size--5;
                }
              }

              .date {
                font-size: $font-size--7;
                border: 1px solid $black;
                border-radius: 50%;
                height: 50px;
                width: 50px;

                @media screen and (max-width: 991px) {
                  font-size: $font-size--6;
                  height: 40px;
                  width: 40px;
                }
              }
            }

            .mech-icons {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 50px;
              width: 60%;
              margin: 0 auto;

              .bird {
                background-image: url("../assets/icons/icons8-bird-96 2.png");
              }

              .sheets {
                background-image: url("../assets/icons/icons8-separate-by-using-blank-sheets-100 2.png");
              }

              .exclamation {
                background-image: url("../assets/icons/icons8-exclamation-mark-90 1.png");
              }

              .cash {
                background-image: url("../assets/icons/icons8-get-cash-100 1.png");
              }

              .im-icon {
                background-image: url("../assets/logos/logo.png");
              }
            }
          }

          .mech-info {
            margin: 0 auto;
            width: 50%;
            font-size: $font-size--6;
            font-style: italic;
            font-weight: 300;

            @media screen and (max-width: 991px) {
              font-size: $font-size--5;
            }

            span {
              font-weight: bold;
            }
          }
        }
      }
    }

    .timeline-bulletpoints {
      padding: 5% 0;

      .tl-bp {
        width: 100%;
        display: flex;
        margin-bottom: 1%;

        .logo-img {
          height: 50px;
          width: 50px;
          margin-right: 20px;

          @media screen and (max-width: 768px) {
            height: 40px;
            width: 40px;
          }
        }

        .one {
          background-image: url("../assets/icons/icons8-1st-100 1.png");
        }

        .two {
          background-image: url("../assets/icons/icons8-circled-2-100 1.png");
        }

        .three {
          background-image: url("../assets/icons/icons8-circled-3-100 1.png");
        }

        .four {
          background-image: url("../assets/icons/icons8-circled-4-100 1.png");
        }

        div {
          font-size: $font-size--6;
          text-align: left;

          @media screen and (max-width: 991px) {
            font-size: $font-size--5;
          }

          @media screen and (max-width: 768px) {
            font-size: $font-size--4;
          }

          @media screen and (max-width: 575px) {
            font-size: $font-size--3;
          }

          ul {
            list-style-type: none;
          }
        }
      }
      #line-divider {
        position: absolute;
        top: 46px;
        left: 24px;
        border-right: 2px solid $black;

        @media screen and (max-width: 768px) {
          top: 36px;
          left: 19px;
        }
      }

      .line-1 {
        height: calc(100% - 30px);

        @media screen and (max-width: 1199px) {
          height: calc(100% - 35px);
        }

        @media screen and (max-width: 768px) {
          height: calc(100% - 28px);
        }
      }

      .line-2 {
        height: calc(100% - 30px);

        @media screen and (max-width: 1199px) {
          height: calc(100% - 35px);
        }

        @media screen and (max-width: 768px) {
          height: calc(100% - 28px);
        }
      }

      .line-3 {
        height: calc(100% - 30px);
        @media screen and (max-width: 1199px) {
          height: calc(100% - 35px);
        }

        @media screen and (max-width: 768px) {
          height: calc(100% - 28px);
        }
      }
    }
  }
}
</style>
