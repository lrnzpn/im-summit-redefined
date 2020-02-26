<template>
  <div id="faq">
    <div class="faq">
      <div class="faq-header">
        <div class="center-wrapper">
          <h1>frequently asked questions</h1>
        </div>
      </div>
      <div class="faq-body">
        <div class="center-wrapper">
          <div class="faq-contents">
            <span id="line-divider"></span>
            <ul class="center-wrapper">
              <li>
                <span>Who can join IM Summit?</span>
                <p>
                  IM Summit is open to undergraduate students of all
                  universities within the metropolitan area. You don't have to
                  be an IT major to appy! Prior knowledge in IT is not required.
                </p>
              </li>
              <li>
                <span>Where will the event take place</span>
                <p>
                  Ateneo de Manila University
                  <br />
                  March 21, 2020 - {{ place }}
                  <br />
                  March 28, 2020 -
                  {{ place }}
                  <br />
                  April 4, 2020 - {{ place }}
                </p>
              </li>

              <li>
                <span>
                  Do I have to attend the talks to compete in the
                  competition?
                </span>
                <p>
                  Yes, the talks will be at March 28, 2020 (12:00nn - 5:00pm).
                  At least half of your group should be present in the talks in
                  order to compete in the competition. Should your members be
                  not available during the talks due to a valid reason, please
                  send an e-mail to misaimsummit@gmail.com.
                </p>
              </li>
              <li>
                <span>Is the pitching done individually or by group?</span>
                <p>
                  The pitching competition will be done in groups of 3-5 per
                  team.
                </p>
              </li>
              <li>
                <span>Should I bring my own food?</span>
                <p>
                  You can bring your own snacks, but lunch and snacks will be
                  provided, if any of your members have any dietary concerns,
                  please send us an e-mail indicating your team name to
                  misaimsummit@gmail.com.
                </p>
              </li>
              <li>
                <span>What does the fee include?</span>
                <p>The fee includes your food and kit for the event.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      place: "Escaler Hall"
    };
  }
};
</script>

<style lang="scss" scoped>
#faq {
  .faq-header {
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

  .faq-body {
    background-image: url("../assets/background/Group 10.png");
    background-repeat: no-repeat;
    background-position: center;

    .faq-contents {
      background-color: $gray;
      box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      top: -50px;

      ul {
        padding: 3% 0;
        text-align: left;

        span {
          font-size: 31.25px; // $font-size--7;
          font-style: italic;

          @media screen and(max-width: 991px) {
            font-size: 20px;
          }
        }

        p {
          font-size: 20px; // $font-size--5;
          margin-left: 20px;

          @media screen and(max-width: 991px) {
            font-size: 16px;
          }
        }

        li {
          color: $navy;
          font-size: 2.5em;

          @media screen and(max-width: 768px) {
            font-size: 2em;
          }

          @media screen and(max-width: 575px) {
            font-size: 1em;
          }
        }
      }
      #line-divider {
        position: absolute;
        top: 4%;
        left: 5.4%;
        height: 90%;
        border: 1px solid $navy;

        @media screen and (max-width: 1199px) {
          top: 3%;
          left: 4.5%;
          height: 92%;
        }

        @media screen and (max-width: 768px) {
          top: 3%;
          left: 4%;
          height: 92%;
        }

        @media screen and (max-width: 575px) {
          display: none;
        }
      }
    }
  }
}
</style>
