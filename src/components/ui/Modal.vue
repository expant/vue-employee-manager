<script setup lang="ts">
import { Teleport, Transition } from 'vue';
import CloseIcon from './icons/CloseIcon.vue';

defineProps<{ isOpen: boolean }>();
defineEmits<{ close: [] }>();
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="overlay" @click.self="$emit('close')">
        <div class="modal">
          <button class="btn btn-secondary  btn-icon btn-close" type="button" @click="$emit('close')">
            <CloseIcon />
          </button>
          <slot />
        </div>
      </div>
    </Transition>
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
  padding: 16px;
  padding-top: 25px;
  background-color: #fff;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal {
  transform: scale(0.95);
}

.modal-leave-to .modal {
  transform: scale(0.95);
}
</style>