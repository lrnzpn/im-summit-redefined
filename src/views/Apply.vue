<template>
  <div id="apply">
    <div class="apply">
      <div class="center-wrapper">
        <div class="app-form">
          <div class="app-header">
            <h1>application form</h1>
          </div>
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)" ref="form">
              <div class="team">
                <div class="team-header">
                  <h1>Team Information</h1>
                  <hr />
                </div>
                <div class="team-info">
                  <div class="app-row">
                    <ValidationProvider
                      name="Team Name"
                      rules="required|alpha"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="teamName">Team Name</label>
                      <input v-model="teamName" type="text" name="teamName" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="University"
                      rules="required|alpha"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="university">University</label>
                      <input v-model="university" type="text" name="university" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="app-row">
                    <ValidationProvider
                      name="Team Leader"
                      rules="required|alpha"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="teamLeader">Team Leader</label>
                      <input v-model="teamLeader" type="text" name="teamLeader" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="Mobile Number"
                      rules="required|numeric"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="mobileNumber">Mobile Number</label>
                      <input v-model="mobileNumber" type="text" name="mobileNumber" />
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
                      <input v-model="yearCourse" type="text" name="yearCourse" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="Email"
                      rules="required|email"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="email">Email Address</label>
                      <input v-model="email" type="text" name="email" />
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
                      rules="required|alpha"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="mem1">Member 1</label>
                      <input v-model="mem1" type="text" name="mem1" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="Member 2"
                      rules="required|alpha"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="mem2">Member 2</label>
                      <input v-model="mem2" type="text" name="mem2" />
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
                      <input v-model="yc1" type="text" name="yc1" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="Year & Course"
                      rules="required"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="yc2">Year & Course</label>
                      <input v-model="yc2" type="text" name="yc2" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="app-row">
                    <ValidationProvider
                      name="University"
                      rules="required|alpha"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="uni1">University</label>
                      <input v-model="uni1" type="text" name="uni1" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="University"
                      rules="required|alpha"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="uni2">University</label>
                      <input v-model="uni2" type="text" name="uni2" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <!-- optional -->
                  <div class="app-row" style="margin-top:5%;">
                    <ValidationProvider
                      name="Member 3"
                      rules="alpha"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="mem3">Member 3</label>
                      <input v-model="mem3" type="text" name="mem3" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="Member 4"
                      rules="alpha"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="mem4">Member 4</label>
                      <input v-model="mem4" type="text" name="mem4" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="app-row">
                    <ValidationProvider name="Year & Course" v-slot="{ errors }" class="flex-start">
                      <label for="yc3">Year & Course</label>
                      <input v-model="yc3" type="text" name="yc3" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider name="Year & Course" v-slot="{ errors }" class="flex-end">
                      <label for="yc4">Year & Course</label>
                      <input v-model="yc4" type="text" name="yc4" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="app-row">
                    <ValidationProvider
                      name="University"
                      rules="alpha"
                      v-slot="{ errors }"
                      class="flex-start"
                    >
                      <label for="uni3">University</label>
                      <input v-model="uni3" type="text" name="uni3" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>

                    <ValidationProvider
                      name="University"
                      rules="alpha"
                      v-slot="{ errors }"
                      class="flex-end"
                    >
                      <label for="uni4">University</label>
                      <input v-model="uni4" type="text" name="uni4" />
                      <span>{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
                <div class="im">
                  <ValidationProvider name="IM Question" rules="required" v-slot="{ errors }">
                    <label for="im">What is Information Management (IM)?</label>
                    <textarea v-model="im" name="im" />
                    <span>{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="terms">
                  <input type="checkbox" v-model="checked" name="checked" />
                  <label for="checkbox">I accept the terms and conitions and privacy policy.</label>
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
import axios from "axios";

export default {
  data() {
    return {
      teamName: "",
      teamLeader: "",
      yearCourse: "",
      university: "",
      mobileNumber: null,
      email: "",
      mem1: "",
      yc1: "",
      uni1: "",
      mem2: "",
      yc2: "",
      uni2: "",
      mem3: "",
      yc3: "",
      uni3: "",
      mem4: "",
      yc4: "",
      uni4: "",
      im: "",
      checked: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.checked !== true) {
        console.log("zzz");
      } else {
        console.log(this.teamLeader + " " + this.checked);
        const formData = new FormData(this.$refs["form"]);
        const data = {};
        for (let [key, val] of formData.entries()) {
          Object.assign(data, { [key]: val });
        }
        console.log(data);
        axios
          .post(
            "https://script.google.com/macros/s/AKfycbyhJuRnL7XanCyo7Tq91JrDHd9Zr2cYoFfM7582CMM1gWP2CJ9-/exec",
            data
          )
          .then(res => {
            console.log(res.request.response);
          });
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
