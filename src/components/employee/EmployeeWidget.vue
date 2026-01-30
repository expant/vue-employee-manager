<script setup lang="ts">
import Modal from '../ui/Modal.vue';
import EmployeeForm from './EmployeeForm.vue';
import EmployeeTable from './EmployeeTable.vue';
import { useModal } from '../../composables/useModal';
import { useEmployee } from '../../composables/useEmployee';
import type { Employee } from '../../models/Employee';

const { isOpen, open, close } = useModal();
const { employees, selectedEmployee, addEmployee, editEmployee } = useEmployee();

// сброс формы
const resetEmployeeForm = () => {
  selectedEmployee.value = null;
  close();
}

// запуск формы в режиме редактирования
const openEditEmployeeForm = (employee: Employee) => {
  selectedEmployee.value = employee;
  open();
}

// функция определяет в каком режиме запускать форму (создания/редактирования)
// и после выполнения выбранной функции сбрасывает форму
const submitEmployeeForm = (employee: Employee) => {
  if (selectedEmployee.value) {
    editEmployee(employee);
  } else {
    addEmployee(employee);
  }

  resetEmployeeForm();
}
</script>

<template>
  <div class="employee-widget">
    <h1 class="title">Менеджер сотрудников</h1>

    <!-- Кнопка добавления сотрудника -->
    <button @click="open" class="btn btn-primary btn-add-employee" type="button">
      Добавить сотрудника
    </button>

    <!-- Таблица сотрудников -->
    <EmployeeTable :employees="employees" @handle-edit="openEditEmployeeForm" />

    <!-- Модальное окно с формой -->
    <Modal :is-open="isOpen" @close="resetEmployeeForm">
      <EmployeeForm :employee="selectedEmployee" @submit="submitEmployeeForm" />
    </Modal>
  </div>
</template>

<style scoped>
.employee-widget {
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  text-align: center;
}

.title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 50px;
}

.btn-add-employee {
  margin-bottom: 20px;
}

/* mobile */
@media (max-width: 768px) {
  .employee-widget {
    padding: 20px;
  }

  .title {
    font-size: 24px;
  }

  .btn-add-employee {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>