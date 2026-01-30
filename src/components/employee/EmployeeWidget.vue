<script setup lang="ts">
import Modal from '../ui/Modal.vue';
import EmployeeForm from './EmployeeForm.vue';
import EmployeeTable from './EmployeeTable.vue';
import { useModal } from '../../composables/useModal';
import { useEmployee } from '../../composables/useEmployee';
import type { Employee } from '../../models/Employee';

const { isOpen, open, close } = useModal();
const { selectedEmployee, addEmployee, editEmployee } = useEmployee();

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

// const employees: Employee[] = [
//   {
//     id: 1,
//     firstName: 'Антон',
//     lastName: 'Елагин',
//     experience: '3–5 лет',
//     age: 25,
//     address: 'Тверь, ул. Тверская'
//   },
//   {
//     id: 2,
//     firstName: 'Ирина',
//     lastName: 'Соколова',
//     experience: '1–3 года',
//     age: 23,
//     address: 'Москва, ул. Профсоюзная'
//   },
//   {
//     id: 3,
//     firstName: 'Максим',
//     lastName: 'Кузнецов',
//     experience: '5+ лет',
//     age: 32,
//     address: 'Санкт-Петербург, Невский пр.'
//   },
//   {
//     id: 4,
//     firstName: 'Ольга',
//     lastName: 'Иванова',
//     experience: 'Менее 1 года',
//     age: 21,
//     address: 'Казань, ул. Баумана'
//   },
//   {
//     id: 5,
//     firstName: 'Дмитрий',
//     lastName: 'Орлов',
//     experience: '3–5 лет',
//     age: 28,
//     address: 'Екатеринбург, ул. Ленина'
//   },
//   {
//     id: 6,
//     firstName: 'Алина',
//     lastName: 'Морозова',
//     experience: '1–3 года',
//     age: 24,
//     address: 'Нижний Новгород, ул. Большая Покровская'
//   },
//   {
//     id: 7,
//     firstName: 'Сергей',
//     lastName: 'Волков',
//     experience: '5+ лет',
//     age: 35,
//     address: 'Новосибирск, ул. Красный проспект'
//   },
//   {
//     id: 8,
//     firstName: 'Екатерина',
//     lastName: 'Павлова',
//     experience: '3–5 лет',
//     age: 27,
//     address: 'Самара, ул. Молодогвардейская'
//   },
//   {
//     id: 9,
//     firstName: 'Артём',
//     lastName: 'Фёдоров',
//     experience: '1–3 года',
//     age: 26,
//     address: 'Воронеж, ул. Плехановская'
//   },
//   {
//     id: 10,
//     firstName: 'Мария',
//     lastName: 'Белова',
//     experience: 'Менее 1 года',
//     age: 22,
//     address: 'Ярославль, ул. Свободы'
//   }
// ]
</script>

<template>
  <div class="employee-widget">
    <h1 class="title">Менеджер сотрудников</h1>

    <button @click="open" class="btn btn-primary btn-add-employee" type="button">
      Добавить сотрудника
    </button>

    <EmployeeTable :employees="employees" @handle-edit="openEditEmployeeModal" />

    <Modal :is-open="isOpen" @close="resetEmployeeModal">
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