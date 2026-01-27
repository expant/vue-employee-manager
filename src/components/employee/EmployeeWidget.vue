<script setup lang="ts">
import EmployeeTable from './EmployeeTable.vue';
import type { Employee } from '../../models/Employee';

const employees: Employee[] = [{
  id: 1,
  firstName: 'Ivan',
  lastName: 'Petrov',
  experience: '2 years',
  age: 24,
  address: 'Moscow',
},
{
  id: 2,
  firstName: 'Anna',
  lastName: 'Smirnova',
  experience: '5 years',
  age: 30,
  address: 'Saint Petersburg',
},
{
  id: 3,
  firstName: 'Dmitry',
  lastName: 'Ivanov',
  experience: '1 year',
  age: 22,
  address: 'Kazan',
},
{
  id: 4,
  firstName: 'Elena',
  lastName: 'Kuznetsova',
  experience: '7 years',
  age: 35,
  address: 'Novosibirsk',
},
{
  id: 5,
  firstName: 'Sergey',
  lastName: 'Volkov',
  experience: '3 years',
  age: 28,
  address: 'Yekaterinburg',
},
{
  id: 6,
  firstName: 'Olga',
  lastName: 'Sokolova',
  experience: '10 years',
  age: 40,
  address: 'Samara',
},
{
  id: 7,
  firstName: 'Alexey',
  lastName: 'Morozov',
  experience: '4 years',
  age: 29,
  address: 'Perm',
},
{
  id: 8,
  firstName: 'Maria',
  lastName: 'Popova',
  experience: '6 years',
  age: 33,
  address: 'Ufa',
},
{
  id: 9,
  firstName: 'Nikolay',
  lastName: 'Fedorov',
  experience: '8 years',
  age: 38,
  address: 'Chelyabinsk',
},
{
  id: 10,
  firstName: 'Ekaterina',
  lastName: 'Lebedeva',
  experience: '2 years',
  age: 26,
  address: 'Sochi',
},];
</script>

<template>
  <div class="employee-container">
    <EmployeeTable :employees="employees" />
  </div>
</template>

<style scoped></style>