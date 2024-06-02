<template>
    <div>
        <label :for="id">{{ label }}</label>
        <!-- <input v-model="birthDate" type="date" lang="fa" class="formkit-input form-control"
                                        id="bithDate" placeholder="'19/5/80'" /> -->

        <div class=" relative date">
            <input type="text" :id="id" class="date-input formkit-input" placeholder="لطفا یک تاریخ انتخاب نمایید" />
            <span @click="show = true" class="absolute left-2 top-3 z-10   ">
                <v-icon color="white" class="cursor-pointer  p-4 w-2 h-2 bg-[#12a0b0] rounded-full">mdi-calendar</v-icon>
            </span>
            <DatePicker @change="handleChange" v-model="date" :show="show" :custom-input="'#'+ id">
            </DatePicker>
        </div>

    </div>
</template>
<script setup>
const show = ref(false)
const dateRef = ref(new Date())


const props = defineProps(
    {
        id: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: false,
            default: () => "انتخاب تاریخ"
        },
        date: {
            type: Date,
            required: true,
            default: () => new Date()
        }
    }
)
const emit = defineEmits(["update"])
const handleChange = (value) => {
    emit('update', value)

}
// watch(() => date, (val) => {
//     console.log(val);
// })

const { label, date } = props
</script>
<style>
.date{
    z-index: 10000;
}
</style>