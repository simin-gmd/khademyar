<template>
    <div>
        <apexchart :key="series" height="400" width="100%" :options="options" :series="series"></apexchart>

    </div>
</template>
<script setup>
const options = ref({
    chart: {
        type: 'donut'
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            let value = val.toFixed() + '%'
            return value
        },

    },
    labels: ['پرداخت شده', 'پرداخت نشده']
});
const series = ref(
    [25, 75],
);

</script>