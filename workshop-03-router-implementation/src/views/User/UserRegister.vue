<template>
  <div>
    <NaviHeader />
    <div class="container">
      <form action="" method="post" @submit.prevent="onCreate">
        <fieldset>
          <h1>Registration Form</h1>
          <p class="field field-icon">
            <label for="username"
              ><span><i class="fas fa-user"></i></span
            ></label>
            <input
              type="text"
              name="username"
              id="username"
              :class="{ error: hasError('fullName') }"
              placeholder="Mark_Ulrich"
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
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  alphaNum,
  sameAs,
} from "vuelidate/lib/validators";
import {
  hasAlphaAndSpaces,
  hasTwoNames,
  isCapitalized,
} from "@/customValidators/fullName";
import ErrorMsg from "@/components/ErrorMsg.vue";
import NaviHeader from "./components/NaviHeader";

export default {
  name: "App",
  components: {
    ErrorMsg,
    NaviHeader,
  },
  data() {
    return {
      formData: {
        fullName: "",
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
@import url("../../assets/form-style.css");
</style>
