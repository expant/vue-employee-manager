<script setup lang="ts">
import { Teleport, Transition, watch } from 'vue';
import CloseIcon from './icons/CloseIcon.vue';

const props = defineProps<{ isOpen: boolean }>();
const emits = defineEmits<{ close: [] }>();

// Управляет тем будет ли отображаться скролл
watch(
  () => props.isOpen, 
  (value) => {
    document.body.style.overflow = value ? 'hidden' : ''
  }
);
</script>

<template>
  <!-- Teleport перемещает эту часть шаблона в конец DOM-узла body -->
  <Teleport to="body">

    <!-- Transition обеспечивает анимирование появления и угасания модального окна -->
    <Transition name="modal">
      <div v-if="isOpen" class="overlay" @click.self="emits('close')">
        <div class="modal">
          <button class="btn btn-secondary btn-close" type="button" @click="emits('close')">
            <CloseIcon />
          </button>
  
          <!--
            благодая слоту модальное окно может принимать любое допустимое содержимое шаблона,
            что обеспечивает переиспользуемость
          -->
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
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
  padding: 6px;
  line-height: 0;
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

.modal-enter-from .modal,
.modal-leave-to .modal {
  transform: scale(0.95);
}
</style>