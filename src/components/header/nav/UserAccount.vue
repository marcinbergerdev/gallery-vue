<template>
   <a href="#">
      <Icon class='user-icon' icon="ant-design:user-outlined" />
   </a>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
	components: {
		Icon,
	},
};
</script>

<style lang="scss" scoped>
.user-icon {
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 20px;
  color: #fff;
}

</style>