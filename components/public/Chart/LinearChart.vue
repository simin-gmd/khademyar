<template>
    <div>
        <apexchart :key="series" height="400" width="100%" :options="options" :series="series"></apexchart>

    </div>
</template>
<script setup>
const options = ref({
    chart: {
        stacked: true,
        toolbar: {
            show: true
        },
        type: "bar",
    },
});
const series = ref([
    {
        name: "غیبت ",
        data: [3, 2, 5, 7, 8, 9, 1, 5, 8, 8, 9, 7],
        color: '#F44336',


    }, {
        name: "حضور",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        color: '#40BABA',

    }]
);

</script>