<script setup lang="ts">
import EmployeeTable from './EmployeeTable.vue';
import EmployeeForm from './EmployeeForm.vue';
import Modal from '../ui/Modal.vue';
import { useModal } from '../../composables/useModal';
import { useEmployee } from '../../composables/useEmployee';

const { isOpen, open, close } = useModal();
const { employees, addEmployee } = useEmployee();
</script>

<template>
  <div class="employee-container">

    <button class="btn" @click="open" type="button">Добавить сотрудника</button>

    <EmployeeTable :employees="employees" />

    <Modal :is-open="isOpen" @close="close">
      <EmployeeForm @submit="addEmployee" @closeModal="close" />
    </Modal>
  </div>
</template>

<style scoped>
.employee-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>