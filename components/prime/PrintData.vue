<template>
  <div class="grid w-full grid-cols-3 bg-slate-200">
    <div class="col-span-1">
      <div v-if="nameCount">
        <h2 class="text-2xl pb-4">Names Count</h2>
        <ul>
          <li v-for="(count, item) in nameCount" :key="item">
            {{ item }}: {{ count }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-span-1">
      <div v-if="countryCount">
        <h2 class="text-2xl pb-4">Country Count</h2>
        <ul>
          <li v-for="(count, item) in countryCount" :key="item">
            {{ item }}: {{ count }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-span-1">
      <div v-if="productCount">
        <h2 class="text-2xl pb-4">Product Count</h2>
        <ul>
          <li v-for="(count, item) in productCount" :key="item">
            {{ item }}: {{ count }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// FETCH DATA
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://mrhorrocks.github.io/data/fancensus/dataset.json"
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
</script>
