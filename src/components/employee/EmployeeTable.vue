<script setup lang="ts">
import EditIcon from '../ui/icons/EditIcon.vue';

defineProps(['employees']);
</script>

<template>
  <div class="table-wrapper">
    <table class="employee-table">
      <thead class="employee-table__title">
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Стаж</th>
          <th>Возраст</th>
          <th>Адрес</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="employee-table__body">
        <template v-if="employees.length">
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.firstName }}</td>
            <td>{{ employee.lastName }}</td>
            <td>{{ employee.experience }}</td>
            <td>{{ employee.age }}</td>
            <td>{{ employee.address }}</td>
            <td class="edit-col">
              <button class="edit-button" type="button">
                <EditIcon />
              </button>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="6" class="empty">Список сотрудников пуст</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrapper {
  min-height: 300px;
  max-height: 600px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  overflow-y: auto;
}

.employee-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
}

.employee-table__title {
  background: #f9fafb;
  text-align: center;
}

.employee-table th,
.employee-table td {
  padding: 10px 12px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

th {
  font-weight: 500;
  color: #6b7280;
}

.employee-table__body tr:last-child td {
  border-bottom: none;
}

.employee-table__body tr td[colspan] {
  text-align: center;
  color: #6b7280;
  padding: 16px;
}

.edit-button {
  width: 100%;
  height: 100%;
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

.edit-col:hover .edit-button {
  color: #2563eb;
}

.edit-col:hover {
  background: #f9fafb;
}

.empty {
  text-align: center;
  color: #6b7280;
  padding: 24px;
}
</style>