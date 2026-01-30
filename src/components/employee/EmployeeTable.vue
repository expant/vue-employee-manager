<script setup lang="ts">
import EditIcon from '../ui/icons/EditIcon.vue';
import type { Employee } from '../../models/Employee';

defineProps<{ employees: Employee[] }>();
defineEmits<{ handleEdit: [Employee] }>();

const headers = ['Имя', 'Фамилия', 'Стаж', 'Возраст', 'Адрес', ''];
</script>

<template>
  <div class="table-wrapper">

    <!-- Desktop -->
    <table class="table">
      <thead class="table__head">
        <tr>
          <th v-for="header in headers" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody v-if="employees.length" class="table__body">
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.firstName }}</td>
          <td>{{ employee.lastName }}</td>
          <td>{{ employee.experience }}</td>
          <td>{{ employee.age }}</td>
          <td>{{ employee.address }}</td>
          <td class="edit-col">
            <button class="edit-button" type="button" @click="$emit('handleEdit', employee)">
              <EditIcon />
            </button>
          </td>
        </tr>
      </tbody>
      <tbody v-else class="table__body">
        <tr>
          <td colspan="6" class="empty">Список сотрудников пуст</td>
        </tr>
      </tbody>
    </table>

    <!-- Mobile -->
    <div class="table-list-mobile">
      <div v-for="employee in employees" :key="employee.id" class="table-list-mobile__item">
        <div class="table-list-mobile__head">
          <div class="table-list-mobile__fullname">{{ employee.firstName }} {{ employee.lastName }}</div>
          <button class="edit-button" type="button" @click="$emit('handleEdit', employee)">
            <EditIcon />
          </button>
        </div>
        <div class="table-list-mobile__body">
          <div><span class="table-list-mobile__label">Стаж: </span> {{ employee.experience }}</div>
          <div><span class="table-list-mobile__label">Возраст: </span> {{ employee.age }}</div>
          <div><span class="table-list-mobile__label">Адрес: </span> {{ employee.address }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-wrapper {
  width: 100%;
  background: #fff;
}

.table {
  width: 100%;
  table-layout: fixed;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  border-collapse: separate;
  border-spacing: 0;
}

.table__head {
  text-align: center;
  background: #f9fafb;
  border: none;
}

.table__head th {
  width: 20%;
  text-align: center;
  font-weight: 500;
  color: #6b7280;
}

.table__head th:nth-child(4) {
  width: 10%;
}

.table__head th:last-child {
  width: 5%;
}

.table__head th,
.table__body td {
  padding: 10px;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  max-width: 0;
  font-size: 15px;
}

.table__body tr:nth-child(even) {
  background: #F7F7F7;
}

.table__body tr:last-child td {
  border-bottom: none;
}

.table__body .empty {
  text-align: center;
  color: #6b7280;
  padding: 15px;
}

.edit-button {
  padding: 0;
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
}

.edit-button svg {
  width: 18px;
  height: 18px;
}

.edit-button:hover {
  color: #2563eb;
}

/* mobile */
.table-list-mobile {
  display: none;
  flex-direction: column;
  gap: 10px;
}

.table-list-mobile__item {
  padding: 15px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.table-list-mobile__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.table-list-mobile__fullname {
  font-weight: 500;
  color: #6b7280;
  font-size: 18px;
}

.table-list-mobile__body {
  text-align: left;
}

.table-list-mobile__body div:nth-child(odd) {
  background: #F7F7F7;
}

.table-list-mobile__body div {
  padding: 5px;
}

.table-list-mobile__label {
  font-weight: 600;
}

@media (max-width: 768px) {
  .table {
    display: none;
  }

  .table-list-mobile {
    display: flex;
  }
}
</style>