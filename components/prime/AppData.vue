<template>
  <!-- Primeview data table -->
  <DataTable
    :value="gameData"
    sortField="countrycode"
    :sortOrder="1"
    scrollable
    scrollHeight="700px"
    tableStyle="min-width: 50rem"
    resizableColumns
    columnResizeMode="fit"
    showGridlines
    :reorderableColumns="true"
    :options="columns"
    ref="dt"
    v-model:filters="filters"
    paginator
    :rows="10"
    :rowsPerPageOptions="[5, 10, 20, 50]"
    stripedRows
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink NextPageLink LastPageLink RowsPerPageDropdown"
    currentPageReportTemplate="{first} to {last} of {totalRecords}"
  >
    <template #header>
      <div
        class="flex flex-row flex-wrap justify-between bg-gray-200 p-2 rounded-md"
      >
        <InputText
          v-model="filters['global'].value"
          placeholder="Search"
          class="p-1"
        />

        <MultiSelect
          :modelValue="selectedColumns"
          :options="columns"
          optionLabel="header"
          @update:modelValue="onToggle"
          display="chip"
          placeholder="Select Columns"
          class="p-1 bg-sky-200"
        />

        <Button
          label="Export to CSV"
          @click="exportCSV($event)"
          class="py-1 px-5 bg-sky-500 text-white hover:bg-sky-700"
        />
      </div>
    </template>
    <template #empty>
      <div class="flex justify-center p-10">No data found.</div>
    </template>

    <!-- Display columns -->
    <Column
      v-for="(col, index) of selectedColumns"
      :field="col.field"
      :header="col.header"
      :sortable="col.sortable"
      :key="col.field + '_' + index"
    >
    </Column>
  </DataTable>
  <!-- Countries Bar chart -->
  <ChartsBarCountries />

  <!-- Product cards -->
  <h2 class="font-semibold text-lg my-8 text-blue-800">Products</h2>
  <div class="card-container">
    <Card
      class="m-1.5 bg-slate-100"
      v-for="(count, item) in productCount"
      :key="item"
    >
      <template #title>
        <div class="text-sm">
          {{ item }}
        </div>
      </template>
      <template #content>
        <p class="m-0 text-lg">{{ count }}</p>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { FilterMatchMode } from "primevue/api";

// FETCH DATA
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://www.fancensus.com/test/dataset1.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch game data");
    }
    const data = await response.json();
    gameData.value = data;
    // Count occurrences of each unique value
    nameCount.value = countNames(data);
    countryCount.value = countCountry(data);
    productCount.value = countProduct(data);
    return;
  } catch (error) {
    console.error(error);
  }
};
onMounted(fetchData);
// REFERENCE FOR THE DATATABLE
const gameData = ref([]);
// FETCH DATA

// COUNTS
const nameCount = ref({});
const countryCount = ref({});
const productCount = ref({});

// COUNT NAMES.value IN JSON
const countNames = data => {
  const nameCount = {};

  data.forEach(item => {
    const name = item.name;
    nameCount[name] = (nameCount[name] || 0) + 1;
  });
  // console.log("NAMES", nameCount);
  return nameCount;
};

// COUNT COUNTRY.value IN JSON
const countCountry = data => {
  const countryCount = {};

  data.forEach(item => {
    const countrycode = item.countrycode;
    countryCount[countrycode] = (countryCount[countrycode] || 0) + 1;
  });
  // console.log("COUNTRIES", countryCount);
  return countryCount;
};

// COUNT PRODUCT.value IN JSON
const countProduct = data => {
  const productCount = {};

  data.forEach(item => {
    const product = item.product;
    productCount[product] = (productCount[product] || 0) + 1;
  });
  // console.log("PRODUCTS", productCount);
  return productCount;
};

// SEARCH FILTER
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  countrycode: {
    value: null,
    matchMode: FilterMatchMode.STARTS_WITH,
  },
  product: { value: null, matchMode: FilterMatchMode.IN },
  date: { value: null, matchMode: FilterMatchMode.EQUALS },
  headline: { value: null, matchMode: FilterMatchMode.EQUALS },
});

// COL DEFINITION
const columns = ref([
  { field: "name", header: "Name", sortable: true },
  { field: "countrycode", header: "Country", sortable: true },
  { field: "product", header: "Product", sortable: true },
  { field: "date", header: "Date", sortable: true },
  { field: "headline", header: "Headline", sortable: true },
]);
// COL DEFINITION

// SELECT COLS
const selectedColumns = ref(columns.value);
const onToggle = val => {
  selectedColumns.value = columns.value.filter(col => val.includes(col));
};
// SELECT COLS

// EXPORT CSV
const dt = ref();
const exportCSV = () => {
  dt.value.exportCSV();
};
// EXPORT CSV
</script>

<style lang="scss">
.card-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
