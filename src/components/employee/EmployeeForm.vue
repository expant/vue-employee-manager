<script setup lang="ts">
import { reactive, watch } from 'vue';
import type { Employee } from '../../models/Employee';

const props = defineProps<{
  employee: Employee | null;
}>();

const emit = defineEmits<{ submit: [Employee] }>();

const experienceOptions = [
  'Менее 1 года',
  '1–3 года',
  '3–5 лет',
  '5+ лет',
];

// Дефолтное состояние формы
const form = reactive<Employee>({
  id: 0,
  firstName: '',
  lastName: '',
  experience: '',
  age: null,
  address: '',
});

// отслеживание состояния выбранного сотрудника (selectedEmployee)
// при каждом изменении выполняется копирование данных selectedEmployee в форму
watch(
  () => props.employee,
  (value) => {
    if (!value) return;
    Object.assign(form, value);
  },
  { immediate: true }
);
</script>

<template>
  <form class="form" @submit.prevent="emit('submit', form)">
  
    <div class="row">
      <div class="field">
        <label for="firstName">Имя</label>
        <input id="firstName" v-model.trim="form.firstName" type="text" required />
      </div>

      <div class="field">
        <label for="lastName">Фамилия</label>
        <input id="lastName" v-model.trim="form.lastName" type="text" required />
      </div>
    </div>

    <div class="field">
      <label for="experience">Стаж</label>
      <select id="experience" v-model.trim="form.experience" required>
        <option value="" disabled>Выберите стаж</option>
        <option v-for="option in experienceOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>

    <div class="field">
      <label for="age">Возраст</label>
      <input id="age" v-model="form.age" type="number" min="18" max="100" required />
    </div>

    <div class="field">
      <label for="address">Адрес</label>
      <input id="address" v-model.trim="form.address" type="text" required />
    </div>

    <div class="actions">
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </div>
  
  </form>
</template>

<style scoped>
.row,
.form {
  display: flex;
  gap: 12px;
}

.row {
  width: 100%;
  flex-wrap: wrap;
}

.field,
.form {
  flex-direction: column;
}

.field {
  display: flex;
  flex: 1;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}

/* mobile */
@media (max-width: 768px) {
  .btn {
    width: 100%;
  }
}
</style>