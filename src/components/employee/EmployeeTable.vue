<script setup lang="ts">
import EditIcon from '../ui/icons/EditIcon.vue';
import type { Employee } from '../../models/Employee';

// объявление пропса списка сотрудников и события редактирования сотрудника
defineProps<{ employees: Employee[] }>();
defineEmits<{ handleEdit: [Employee] }>();

const headers = ['Имя', 'Фамилия', 'Стаж', 'Возраст', 'Адрес', ''];
</script>

<template>
  <div class="table-wrapper">

    <!-- Десктопная версия: таблица сотрудников -->
    <table class="table">
      <thead class="table__head">
        <tr>
          <th v-for="header in headers" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>

      <tbody v-if="employees.length" class="table__body">

        <!-- Использование цикла для вывода списка сотрудников -->
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
    
      <!-- Если массив сотрудников пуст, рендерится информирующий об этом текст -->
      <tbody v-else class="table__body">
        <tr>
          <td colspan="6" class="empty">Список сотрудников пуст</td>
        </tr>
      </tbody>
    </table>

    <!-- Мобильная версия: список сотрудников-->
    <div v-if="employees.length" class="list-mobile">

      <!-- Использование цикла для вывода списка сотрудников -->
      <div v-for="employee in employees" :key="employee.id" class="list-mobile__item">
        <div class="list-mobile__head">
          <div class="list-mobile__fullname">{{ employee.firstName }} {{ employee.lastName }}</div>
          <button class="edit-button" type="button" @click="$emit('handleEdit', employee)">
            <EditIcon />
          </button>
        </div>
        <div class="list-mobile__body">
          <div><span class="list-mobile__label">Стаж: </span> {{ employee.experience }}</div>
          <div><span class="list-mobile__label">Возраст: </span> {{ employee.age }}</div>
          <div><span class="list-mobile__label">Адрес: </span> {{ employee.address }}</div>
        </div>
      </div>
    </div>

    <!-- Если массив сотрудников пуст, рендерится информирующий об этом текст -->
    <div v-else class="list-mobile__empty">
      Список сотрудников пуст
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

.table__head th:last-child {
  width: 10%;
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
.list-mobile {
  display: none;
  flex-direction: column;
  gap: 10px;
}

.list-mobile__item {
  padding: 15px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.list-mobile__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.list-mobile__fullname {
  font-weight: 500;
  color: #6b7280;
  font-size: 18px;
}

.list-mobile__body {
  text-align: left;
}

.list-mobile__body div:nth-child(odd) {
  background: #F7F7F7;
}

.list-mobile__body div {
  padding: 5px;
}

.list-mobile__label {
  font-weight: 600;
}

.list-mobile__empty {
  display: none;
  text-align: center;
  margin-top: 20px;
  color: #6b7280;
}

@media (max-width: 768px) {
  .table {
    display: none;
  }

  .list-mobile {
    display: flex;
  }

  .list-mobile__empty {
    display: block;
  }
}
</style>