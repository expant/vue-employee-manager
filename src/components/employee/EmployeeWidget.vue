<script setup lang="ts">
import Modal from '../ui/Modal.vue';
import EmployeeForm from './EmployeeForm.vue';
import EmployeeTable from './EmployeeTable.vue';
import { useModal } from '../../composables/useModal';
import { useEmployee } from '../../composables/useEmployee';
import type { Employee } from '../../models/Employee';

const { isOpen, open, close } = useModal();
const { employees, selectedEmployee, addEmployee, editEmployee } = useEmployee();

const resetEmployeeModal = () => {
  selectedEmployee.value = null;
  close();
}

const openEditEmployeeModal = (employee: Employee) => {
  selectedEmployee.value = employee;
  open();
}

const submitEmployeeForm = (employee: Employee) => {
  if (selectedEmployee.value) {
    editEmployee(employee);
  } else {
    addEmployee(employee);
  }

  resetEmployeeModal();
}
</script>

<template>
  <div class="employee-widget">
    <h1 class="title">Менеджер сотрудников</h1>

    <button class="btn" @click="open" type="button">Добавить сотрудника</button>

    <EmployeeTable :employees="employees" @handle-edit="openEditEmployeeModal" />

    <Modal :is-open="isOpen" @close="resetEmployeeModal">
      <EmployeeForm :employee="selectedEmployee" @submit="submitEmployeeForm" />
    </Modal>
  </div>
</template>

<style scoped>
.employee-widget {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 50px;
}
</style>