<template>
<div></div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>


 <Form @submit.prevent="onSubmit">
        <div>
          <label for="login">Login</label>
          <Field id="login" name="Login" :rules="isRequired" />
          <ErrorMessage name="Login" />
        </div>

        <div>
          <label for="password">Password</label>
          <Field id="password" name="password" :rules="isRequired" />
          <ErrorMessage name="password" />
        </div>

        <button>Login</button>
      </Form>