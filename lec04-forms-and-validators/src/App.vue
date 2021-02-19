<template>
  <div class="container d-flex pt-5">
    <p v-if="isLoading">Please wait, still loading ...</p>
    <form class="flex-fill" @submit.prevent="handleFormSubmit">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h1>Registration</h1>
          <hr />
          <!-- Simple example -->
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="$v.formData.email.$model"
            />
            <p>Selected email is: {{ formData.email }}</p>

            <div class="alert alert-danger" v-if="$v.formData.email.$error">
              <p v-if="!$v.formData.email.required">Email is required</p>
              <p v-if="!$v.formData.email.email">Email is invalid</p>
            </div>
          </div>

          <!-- Component example using props -->
          <!-- <EmailInput
            :email="formData.email"
            @onInput="formData.email = $event"
          />
          <p>Selected email via props is: {{ formData.email }}</p> -->

          <!-- Component example using v-model -->
          <!-- <CustomEmail v-model="formData.secondEmail" />
          <p>Selected email via v-model is: {{ formData.secondEmail }}</p> -->

          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model="$v.formData.password.$model"
            />
            <p>Selected password is: {{ formData.password }}</p>

            <div class="alert alert-danger" v-if="$v.formData.password.$error">
              <p v-if="!$v.formData.password.required">Field is required</p>
              <p v-if="!$v.formData.password.minLength">
                Password must have min
                {{ $v.formData.password.$params.minLength.min }} characters
              </p>
              <p v-if="!$v.formData.password.maxLength">
                Password must have max
                {{ $v.formData.password.$params.maxLength.max }} characters
              </p>
            </div>
          </div>

          <div class="form-group">
            <label for="confPassword">Confirm Password</label>
            <input
              type="password"
              id="confPassword"
              class="form-control"
              v-model="$v.formData.confirmedPassword.$model"
            />
            <p>Confirmed password is: {{ formData.confirmedPassword }}</p>

            <div
              class="alert alert-danger"
              v-if="$v.formData.confirmedPassword.$error"
            >
              The password does not match!
            </div>
          </div>

          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model.number="$v.formData.age.$model"
            />
            <p>Selected password is: {{ formData.age }}</p>
            <div class="alert alert-danger" v-if="$v.formData.age.$error">
              <p v-if="!$v.formData.age.required">Age is required</p>
              <p v-if="!$v.formData.age.minValue">
                Age should have min value
                {{ $v.formData.age.$params.minValue.min }}
              </p>
            </div>
          </div>

          <!---->
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="description">Description</label> <br />
          <textarea
            id="description"
            rows="5"
            class="form-control"
            v-model="$v.formData.description.$model"
          ></textarea>
          <p>Selected description is: {{ formData.description }}</p>
          <p class="alert alert-danger" v-if="$v.formData.description.$error">
            Description should have max
            {{ $v.formData.description.$params.maxLength.max }} characters
          </p>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <div class="form-group">
            <h3>Skill Set</h3>
            <label for="js" v-for="set in skillSets" :key="set.id">
              <input
                type="checkbox"
                :id="set.id"
                :value="set.name"
                :name="set.name"
                v-model="formData.skillSet"
              />
              {{ set.name }}
            </label>
            <p>
              Selected skillSets are:
              <span v-for="skill in formData.skillSet" :key="skill">{{
                skill
              }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label v-for="gender in genders" :key="gender.id" :for="gender.id">
            <input
              type="radio"
              :id="gender.id"
              :value="gender.id"
              v-model="formData.gender"
            />
            {{ gender.name }}
          </label>
          <p>Gender is: {{ formData.gender }}</p>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group"
        >
          <label for="country">Country</label>
          <select id="country" class="form-control" v-model="formData.country">
            <option v-for="(country, i) in countries" :key="i">
              {{ country }}
            </option>
          </select>
          <p>Selected country is: {{ formData.country }}</p>
        </div>
      </div>
      <hr />
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <button
            type="submit"
            :disabled="isSubmitDisabled"
            class="btn btn-primary"
          >
            Submit!
          </button>
        </div>
      </div>
    </form>
    <form class="flex-fill" v-if="isSubmitted">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-heading">Your Data</h4>
            </div>
            <div class="panel-body">
              <p>Mail: {{ formData.email }}</p>
              <p>Password: {{ formData.password }}</p>
              <p>Age: {{ formData.age }}</p>
              <p>Description: {{ formData.description }}</p>
              <p><strong>Skill Set?</strong></p>
              <ul>
                <li v-for="skill in formData.skillSet" :key="skill">
                  {{ skill }}
                </li>
              </ul>
              <p>Gender: {{ formData.gender }}</p>
              <p>Country: {{ formData.country }}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// ToDO Validation:
// 1) Email - required and email validator
// 2) Password – required, minLength(4), maxLength(16), alphanumerical characters
// 3) Age – required, minValue(18)
// 4) Description – maxValue(100)
// 5) Show UI Messages for errors
// 6) Bonus: Add confirm password
const skillSets = [
  {
    id: "js",
    name: "JavaScript",
  },
  {
    id: "csharp",
    name: "C#",
  },
  {
    id: "java",
    name: "Java",
  },
  {
    id: "php",
    name: "PHP",
  },
];
const countries = ["Bulgaria", "Germany", "England"];
const genders = [
  {
    id: "male",
    name: "Male",
  },
  {
    id: "female",
    name: "Female",
  },
];

// import EmailInput from "./components/EmailInput.vue";
// import CustomEmail from "./components/CustomEmail.vue";

import {
  required,
  email,
  minLength,
  maxLength,
  alphaNum,
  minValue,
  sameAs,
} from "vuelidate/lib/validators";

export default {
  name: "App",
  // components: {
  //   EmailInput,
  //   CustomEmail,
  // },
  data() {
    return {
      isLoading: false,
      isSubmitted: false,
      skillSets,
      genders,
      countries,
      formData: {
        description: "",
        skillSet: [],
        gender: "",
        country: "",
        email: "",
        secondEmail: "",
        password: "",
        confirmedPassword: "",
        age: 0,
      },
    };
  },
  validations: {
    formData: {
      email: { required, email },
      password: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(16),
        alphaNum,
      },
      confirmedPassword: {
        sameAs: sameAs("password"),
      },
      description: { maxLength: maxLength(100) },
      age: {
        required,
        minValue: minValue(18),
      },
    },
  },
  computed: {
    isSubmitDisabled() {
      return this.$v.$invalid;
    },
  },
  methods: {
    async mockDataBaseCall() {
      this.isLoading = true;
      try {
        const res = await fetch("/form-submit", {
          method: "POST",
          body: JSON.stringify(this.formData),
        });
        console.log("success !", res);
      } catch (e) {
        console.error("Unsuccess!", e);
      }
      this.isLoading = false;
    },
    async handleFormSubmit() {
      this.isSubmitted = true;
      this.$v.$touch();
      if (!this.$v.$invalid) {
        await this.mockDataBaseCall();
      }
    },
  },
};
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
</style>
