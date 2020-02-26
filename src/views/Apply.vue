<template>
  <div id="apply">
    <div class="apply">
      <div class="center-wrapper">
        <div class="app-form">
          <div class="app-header">
            <h1>application form</h1>
          </div>
          <ValidationObserver>
            <form id="appform" ref="form" @submit.prevent="onSubmit">
              <div class="team">
                <div class="team-header">
                  <h1>Team Information</h1>
                  <hr />
                </div>
                <div class="team-info">
                  <div class="app-row">
                    <ValidationProvider
                      name="Team Name"
                      rules="required"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="teamName">Team Name</label>
                      <input type="text" name="TeamName" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="University"
                      rules="required"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="university">University</label>
                      <input type="text" name="TeamLeaderUniversity" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="app-row">
                    <ValidationProvider
                      name="Team Leader"
                      rules="required"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="teamLeader">Team Leader</label>
                      <input type="text" name="TeamLeader" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="Mobile Number"
                      rules="required|numeric"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="mobileNumber">Mobile Number</label>
                      <input type="text" name="MobileNumber" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="app-row">
                    <ValidationProvider
                      name="Year & Course"
                      rules="required"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="yearCourse">Year & Course</label>
                      <input type="text" name="Course" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="Email"
                      rules="required|email"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="email">Email Address</label>
                      <input type="text" name="Email" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
              </div>
              <div class="member">
                <div class="mem-header">
                  <h1>Member Information</h1>
                  <hr />
                </div>
                <div class="mem-info">
                  <!-- required -->
                  <div class="app-row">
                    <ValidationProvider
                      name="Member 1"
                      rules="required"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="mem1">Member 1</label>
                      <input type="text" name="FirstMemberName" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="Member 2"
                      rules="required"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="mem2">Member 2</label>
                      <input type="text" name="SecondMemberName" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="app-row">
                    <ValidationProvider
                      name="Year & Course"
                      rules="required"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="yc1">Year & Course</label>
                      <input type="text" name="FirstMemberCourse" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="Year & Course"
                      rules="required"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="yc2">Year & Course</label>
                      <input type="text" name="SecondMemberCourse" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="app-row">
                    <ValidationProvider
                      name="University"
                      rules="required"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="uni1">University</label>
                      <input type="text" name="FirstMemberUniversity" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="University"
                      rules="required"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="uni2">University</label>
                      <input type="text" name="SecondMemberUniversity" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <!-- optional -->
                  <div class="app-row" style="margin-top:5%;">
                    <ValidationProvider
                      name="Member 3"
                      rules=""
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="mem3">Member 3</label>
                      <input type="text" name="ThirdMemberName" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="Member 4"
                      rules=""
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="mem4">Member 4</label>
                      <input type="text" name="FourthMemberName" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="app-row">
                    <ValidationProvider
                      name="Year & Course"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="yc3">Year & Course</label>
                      <input type="text" name="ThirdMemberCourse" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="Year & Course"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="yc4">Year & Course</label>
                      <input type="text" name="FourthMemberCourse" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="app-row">
                    <ValidationProvider
                      name="University"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="uni3">University</label>
                      <input type="text" name="ThirdMemberUniversity" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="University"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="uni4">University</label>
                      <input type="text" name="FourthMemberUniversity" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
                <div class="im">
                  <ValidationProvider
                    name="IM Question"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <label for="im">What is Information Management (IM)?</label>
                    <textarea name="WhatisIM" />
                    <span>{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="terms">
                  <input type="checkbox" v-model="checked" />
                  <label for="checkbox"
                    >I accept the terms and conditions and privacy
                    policy.</label
                  >
                </div>
                <div class="btn-container">
                  <button type="submit" class="btn-navy">apply</button>
                </div>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  },

  methods: {
    onSubmit: function() {
      if (this.checked !== true) {
        alert("Please accept the terms and conditions.");
      } else {
        alert("Your application form has been sent!");

        const formData = new FormData(this.$refs["form"]);

        var request;

        if (request) {
          request.abort();
        }

        var serializedData = $("form").serialize();
        console.log(serializedData);

        request = $.ajax({
          url:
            "https://script.google.com/a/obf.ateneo.edu/macros/s/AKfycbw3UuupD1tJrxG95qNSS_X573NnzWZkiro0Efk6/exec",
          type: "post",
          data: serializedData
        });

        request.done(function(response, textStatus, jqXHR) {
          console.log(textStatus);
          console.log(jqXHR);
          location.reload();
        });

        request.fail(function(jqXHR, textStatus, errorThrown) {
          console.error(
            "The following error occurred: " + textStatus,
            errorThrown
          );
        });

        request.always(function() {
          $inputs.prop("disabled", false);
        });

        event.preventDefault();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.flex-start {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.flex-end {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
}

#apply {
  .apply {
    background: $orange-gradient;
    padding: 5% 0;
    .app-form {
      width: 100%;
      .app-header {
        padding: 2% 0;
        background-color: $gray;

        h1 {
          text-transform: uppercase;
          text-align: left;
          color: $navy;
          font-size: $font-size--6;
          letter-spacing: 0.15em;
          font-weight: bold;
          width: 90%;
          margin: 0 auto;
        }
      }

      form {
        width: 100%;
        background-color: $white;
        box-shadow: 7px 7px 5px rgba(0, 0, 0, 0.25);

        .team,
        .member {
          width: 90%;
          margin: 0 auto;
          .team-header,
          .mem-header {
            padding-top: 5%;
            h1 {
              text-align: left;
              color: $navy;
              font-size: $font-size--6;
              font-weight: 500;
              @media screen and (max-width: 768px) {
                font-size: $font-size--5;
              }
            }

            hr {
              border: 1px solid $navy;
            }
          }
        }

        .app-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3%;
          span {
            width: 100%;
            label {
              width: 90%;
              display: block;
              text-align: left;
              color: $navy;
              font-style: italic;
              font-weight: 300;
              font-size: $font-size--5;
              @media screen and (max-width: 768px) {
                font-size: $font-size--4;
              }
            }

            input {
              width: 90%;
              display: block;
              border: 1px solid $navy;
            }

            span {
              display: flex;
              width: 90%;
              background-color: $light-orange;
            }
          }
        }
      }

      .im {
        margin-top: 5%;
        span {
          width: 100%;
          margin-bottom: 2%;
          label {
            display: block;
            text-align: left;
            color: $navy;
            font-style: italic;
            font-weight: 300;
            font-size: $font-size--5;
            @media screen and (max-width: 768px) {
              font-size: $font-size--4;
            }
          }

          textarea {
            width: 100%;
            display: block;
            border: 1px solid $navy;
          }

          span {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $light-orange;
          }
        }
      }

      .terms {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 2%;

        label {
          color: $navy;
          font-style: italic;
          font-weight: 300;
          font-size: $font-size--4;
          margin: 0;
          @media screen and (max-width: 768px) {
            font-size: $font-size--3;
          }
        }

        input {
          border: 1px solid $navy;
          margin-right: 10px;
        }
      }
    }

    .btn-container {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-bottom: 5%;

      button {
        padding: 10px 45px;

        &:hover {
          text-decoration: none;
          background-color: $navy;
          color: $white;
        }
      }
    }
  }
}
</style>
