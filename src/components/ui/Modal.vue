<script setup lang="ts">
import { Teleport } from 'vue';
import CloseIcon from './icons/CloseIcon.vue';

defineProps(['isOpen']);
defineEmits(['close']);
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="overlay" @click.self="$emit('close')">
      <div class="modal">
        <button class="btn btn--icon btn--close" type="button" @click="$emit('close')">
          <CloseIcon />
        </button>
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  background-color: #fff;
  padding: 16px;
  padding-top: 25px;
  border-radius: 8px;
}

.btn--close {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>