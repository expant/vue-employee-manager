<script setup lang="ts">
import EmployeeTable from './EmployeeTable.vue';
import EmployeeForm from './EmployeeForm.vue';
import Modal from '../ui/Modal.vue';
import { useModal } from '../../composables/useModal';
import { useEmployee } from '../../composables/useEmployee';
import type { Employee } from '../../models/Employee';

const { isOpen, open, close } = useModal();
const { employees, selectedEmployee, addEmployee, editEmployee } = useEmployee();

const handleEdit = (employee: Employee) => {
  selectedEmployee.value = employee;
  open();
}

const handleSubmitForm = (employee: Employee) => {
  close();
  
  if (selectedEmployee.value) {
    editEmployee(employee);
    return;
  }
  addEmployee(employee);
}

const handleCloseModal = () => {
  selectedEmployee.value = null;
  close();
}
</script>

<template>
  <div class="employee-container">
    <button class="btn" @click="open" type="button">Добавить сотрудника</button>

    <EmployeeTable :employees="employees" @handle-edit="handleEdit"/>

    <Modal :is-open="isOpen" @close="handleCloseModal">
      <EmployeeForm @submit="handleSubmitForm" @closeModal="handleCloseModal" :employee="selectedEmployee"/>
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