<template>
  <div id="app">
    <div class="container">
      <form action="" method="post" @submit.prevent="onCreate">
        <fieldset>
          <h1>Registration Form</h1>

          <!-- Additional example of showing required * -->
          <label for="username">
            Full name <span v-if="isRequired('fullName')">*</span>
          </label>
          <p class="field field-icon">
            <label for="username"
              ><span><i class="fas fa-user"></i></span
            ></label>
            <input
              type="text"
              name="username"
              id="username"
              :class="{ error: hasError('fullName') }"
              placeholder="Mark Ulrich"
              v-model="$v.formData.fullName.$model"
            />
          </p>
          <ErrorMsg :visible="hasError('fullName')">
            <p v-if="!$v.formData.fullName.required">
              Field is required
            </p>
            <p v-else-if="!$v.formData.fullName.hasAlphaAndSpaces">
              Field should contain only letters!
            </p>
            <p v-else-if="!$v.formData.fullName.hasTwoNames">
              Field must contain two names separated by a space
            </p>
            <p v-else-if="!$v.formData.fullName.isCapitalized">
              Both names should be capitalized!
            </p>
          </ErrorMsg>

          <!-- Additional example of showing required * -->
          <label for="email">
            Email <span v-if="isRequired('email')">*</span>
          </label>
          <p class="field field-icon">
            <label for="email"
              ><span><i class="fas fa-envelope"></i></span
            ></label>
            <input
              type="text"
              name="email"
              id="email"
              :class="{ error: hasError('email') }"
              placeholder="marg@gmial.com"
              v-model="$v.formData.email.$model"
            />
          </p>
          <ErrorMsg :visible="hasError('email')">
            <p v-if="!$v.formData.email.required">
              Field is required
            </p>
            <p v-else>
              Email is not valid!
            </p>
          </ErrorMsg>

          <p class="field field-icon">
            <label for="tel">
              <span><i class="fas fa-phone"></i></span>
            </label>
            <select name="tel" id="telPrefix" class="tel">
              <option value="1">+359</option>
            </select>
            <input
              type="text"
              name="tel"
              id="tel"
              placeholder="888 888"
              :class="{ error: hasError('phone') }"
              v-model="$v.formData.phone.$model"
            />
          </p>
          <ErrorMsg :visible="hasError('phone')">
            <p v-if="!$v.formData.phone.required">
              Field is required
            </p>
            <p v-else-if="!$v.formData.phone.numeric">
              Telephone is not valid!
            </p>
            <p
              v-else-if="
                !$v.formData.phone.minLength || !$v.formData.phone.maxLength
              "
            >
              Should contain 9 numbers
            </p>
          </ErrorMsg>

          <p class="field field-icon">
            <label for="building"
              ><span><i class="fas fa-building"></i></span
            ></label>
            <select
              name="building"
              id="building"
              class="building"
              v-model="formData.professions"
            >
              <option value="1">Designer</option>
              <option value="2">Software Engineer</option>
              <option value="3">Accountant</option>
              <option value="4">Manager</option>
              <option value="5">Other</option>
            </select>
          </p>

          <p class="field field-icon">
            <label for="password"
              ><span><i class="fas fa-lock"></i></span
            ></label>
            <input
              type="password"
              name="password"
              id="password"
              :class="{ error: hasError('password') }"
              placeholder="******"
              v-model="$v.formData.password.$model"
            />
          </p>
          <p>Current pass is: {{ formData.password }}</p>
          <ErrorMsg :visible="hasError('password')">
            <p v-if="!$v.formData.password.required">
              Field is required
            </p>
            <p v-else-if="!$v.formData.password.alphaNum">
              The password should contain only characters and numbers!
            </p>
            <p v-else-if="!$v.formData.password.minLength">
              Should contain at least
              {{ $v.formData.password.$params.minLength.min }} characters
            </p>
            <p v-else-if="!$v.formData.password.maxLength">
              Should contain at least
              {{ $v.formData.password.$params.maxLength.max }} characters
            </p>
          </ErrorMsg>

          <p class="field field-icon">
            <label for="re-password"
              ><span><i class="fas fa-lock"></i></span
            ></label>
            <input
              type="password"
              name="re-password"
              id="re-password"
              placeholder="******"
              :class="{ error: hasError('confirmPass') }"
              v-model="$v.formData.confirmPass.$model"
            />
          </p>
          <ErrorMsg :visible="hasError('confirmPass')">
            <p v-if="!$v.formData.confirmPass.required">
              Field is required
            </p>
            <p v-else>
              The password does not match!
            </p>
          </ErrorMsg>

          <p>Current confirmPass is: {{ formData.confirmPass }}</p>

          <p>
            <button>Create Account</button>
          </p>

          <p class="text-center">
            Have an account?
            <a href="">Log In</a>
          </p>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
// To DO
// - The full name input field must contain two names (letters only) separated by a space.
//   Both should start with a capital letter.
// - The email input field must be a valid email address.
// - The phone number input field must be a 9-digit number.
// - The select list with options should contain only the following professions – Accountant, Designer, Software
//   Engineer, Manager, Other
// - The password input field must be between 3 and 16 symbols and must contain only letters and digits.
// - Both passwords must match
import {
  required,
  email,
  numeric,
  minLength,
  maxLength,
  alphaNum,
  sameAs,
} from "vuelidate/lib/validators";
import {
  hasAlphaAndSpaces,
  hasTwoNames,
  isCapitalized,
} from "./customValidators/fullName";
import ErrorMsg from "./components/ErrorMsg.vue";

export default {
  name: "App",
  components: {
    ErrorMsg,
  },
  data() {
    return {
      formData: {
        fullName: "",
        email: "",
        phone: "",
        professions: [],
        password: "",
        confirmPass: "",
      },
    };
  },
  validations: {
    formData: {
      fullName: {
        required,
        hasAlphaAndSpaces,
        hasTwoNames,
        isCapitalized,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
        numeric,
        minLength: minLength(9),
        maxLength: maxLength(9),
      },
      password: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(16),
        alphaNum,
      },
      confirmPass: {
        required,
        sameAs: sameAs("password"),
      },
    },
  },
  methods: {
    onCreate() {
      this.$v.$touch();
      const { formData } = this.$v;
      console.log("invalid", this.$v.$invalid, formData.phone);
    },
    hasError(field) {
      return this.$v.formData[field].$error;
    },
    isRequired(field) {
      const hasField = Object.prototype.hasOwnProperty.call(
        this.$v.formData,
        field
      );
  
      if (!hasField) return false;
      const selectedField = this.$v.formData[field];
      const isReq = Object.prototype.hasOwnProperty.call(
        selectedField,
        "required"
      );
      return isReq;
    },
  },
  mounted() {
    const fontAwsomeScript = document.createElement("script");
    fontAwsomeScript.setAttribute(
      "src",
      "https://kit.fontawesome.com/3cd69e2433.js"
    );
    document.head.appendChild(fontAwsomeScript);
  },
};
</script>

<style>
@import url("./assets/style.css");
</style>
