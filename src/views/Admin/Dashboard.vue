<template>
  <section class="p-4">
    <div
      class="fixed top-0 left-0 right-0 h-screen flex justify-center items-center p-4 bg-black bg-opacity-75 z-20 overflow-auto"
      v-show="showForm"
    >
      <form
        action="#"
        class="max-w-md bg-white p-4 rounded-lg"
        @submit.prevent="addPerson"
      >
        <h2 class="text-blue-600 text-2xl">Add Person</h2>
        <label>
          <span>Name</span>
          <input type="text" placeholder="" v-model="name" />
        </label>
        <label>
          <span>Room No.</span>
          <select name="" id="" v-model="roomNo">
            <option v-for="i in 15" :key="i + i * i" :value="i">
              {{ i }}
            </option>
          </select>
        </label>
        <label>
          <span>Date</span>
          <input type="date" name="" id="" v-model="date" />
        </label>
        <label>
          <span>Time</span>
          <input type="time" v-model="time" />
        </label>
        <div>
          <span>Phone number</span>
          {{phoneN}}
          <vue-tel-input
           v-model="phoneN"
           @input="checkPhone"
            :class="isCorrect ? 'valid' : 'invalid'"
            @validate="validateNumber"
            dynamicPlaceholder
            enabledCountryCode
            mode="national"
          ></vue-tel-input>
        </div>
        <label>
          <span>Address</span>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            v-model="address"
          ></textarea>
        </label>

        <button class="add" disabled="disableButton">ADD</button>

        {{ phoneN }}
      </form>
    </div>
    <div>
      <div class="flex justify-end my-4">
        <button
          class="h-10 w-10 flex justify-center items-center rounded-full transform duration-300  hover:scale-105"
          style=" background: #7c79f3; color: #fff"
          @click="toggleForm"
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>

      <table class="w-full">
        <thead>
          <tr>
            <td>S/N</td>
            <td>Name</td>
            <td>Room No</td>
            <td>Date</td>
            <td>Time</td>
            <td>Phone No.</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, idx) in allPersons" :key="idx">
            <td>{{ idx }}</td>
            <td>{{ person.name }}</td>
            <td>{{ person.roomNo }}</td>
            <td>{{ person.date }}</td>
            <td>{{ person.time }}</td>
            <td>{{ person.phoneNum }}</td>
            <td>
              {{ person.address }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { computed, defineComponent, reactive, ref, toRefs } from "vue";


export default defineComponent({
  components: {
  },
  data() {
    return {
      name: "",
      roomNo: "",
      date: "",
      time: "",
      value: "",
      address: "",
      phoneN: '',
      isCorrect: true,
      allPersons: [],
      showForm: false
    };
  },
  methods: {
    validateNumber(data) {
      this.isCorrect = !!data.valid;
    },
    toggleForm () {
        this.showForm = !this.showForm;
      },
   
  }
  //   setup() {

  //     const disableButton = computed(() => {
  //       return (
  //         clientData.name == "" ||
  //         clientData.roomNo == "" ||
  //         clientData.date == "" ||
  //         clientData.time == "" ||
  //         clientData.address == ""
  //       );
  //     });

  //     const toggleForm = () => {
  //       showForm.value = !showForm.value;
  //     };

  //     const addPerson = () => {
  //       allPersons.value.push({
  //         name: clientData.name,
  //         roomNo: clientData.roomNo,
  //         date: clientData.date,
  //         time: clientData.time,
  //         phoneNum: phoneNum.value,
  //         address: clientData.address
  //       });

  //       clientData.name = "";
  //       clientData.roomNo = "";
  //       clientData.date = "";
  //       clientData.time = "";
  //       clientData.phoneNum = "";
  //       clientData.address = "";

  //       showForm.value = !showForm.value;
  //       console.log(allPersons);
  //     };

  //     const validateNumber = data => {
  //       isCorrect.value = !!data.valid;
  //     };

  //     return {
  //       showForm,
  //       toggleForm,
  //       ...toRefs(clientData),
  //       disableButton,
  //       addPerson,
  //       allPersons,
  //       validateNumber,
  //       isCorrect
  //     };
  //   }
});
</script>

<style>
label {
  margin: 0.75rem 0;
  display: block;
}

label span {
  display: block;
}

input,
select,
option textarea {
  background: #fffbfb;
  border: 1px solid #e5e5e5;
  height: 42px;
  padding: 0 1rem;
  outline: none;
  display: block;
  width: 100%;

  @apply rounded-lg;
}

textarea {
  max-height: 120px;
  resize: none;
  padding: 1rem;
  width: 100%;
}

table {
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
}

table thead {
  background: #eaeeee;
  font-weight: 500;
}
thead {
  text-transform: uppercase;
  color: #737373;
}

table td {
  padding: 10px 5px;
  width: fit-content;
}

table td a {
  text-decoration: none;
  color: #5661cf;
}

tbody tr:nth-of-type(even) {
  background: #f7fdfd;
}

.vue-tel-input {
  height: 40px;
  width: 100%;
  margin-bottom: 25px;
  border: 0.5px solid #e8e8e8;
  border-radius: 5px;
  background: #f3f3f5;
}

.vue-tel-input:focus-within {
  border: 2px solid #18a0fb;
  box-shadow: none;
}

.vue-tel-input.invalid {
  border: 2px solid #f94d53;
}

.vue-tel-input .vti__input {
  background-color: #f3f3f3;
}

button.add {
  height: 48px;
  width: 100%;
  transition: 300ms ease-in;
  background: #7c79f3;
  outline: none;
}

button.add:hover {
  transform: scale(1.05);
  background-color: #4744f2;
}

button.add:active {
  transform: scale(0.95);
  background-color: #1b18f5;
}

button.add:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
