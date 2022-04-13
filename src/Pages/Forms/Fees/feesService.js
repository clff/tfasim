import { ref, computed } from 'vue';

const feesService = {
  state: {
    feesModel: ref({
      client: {
        firstName: null,
        lastName: null,
        id: null
      },
      lawyer: {
        firstName: null,
        lastName: null,
        id: null
      }
    }),
    counter: ref(0),
    formSteps: ref([
      { text: 'פרטי עורך הדין', value: 'lawyerInfo', linkable: true },
      { text: 'פרטי לקוח', value: 'clientInfo', linkable: false }
    ])
  },
  methods: {
    previousStep () {
      feesService.state.counter.value--;
    },
    nextStep () {
      feesService.state.counter.value++;
    },
    currentStep: computed(() => {
      return feesService.state.formSteps.value[feesService.state.counter.value];
    })
  }
};

export default feesService;
