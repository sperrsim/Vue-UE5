import { ref, reactive, toRefs } from 'vue';

export function useFetch(url, options) {
  const data = ref(null);
  const state = reactive({
    error: null,
    loading: false,
  });

  const fetchData1 = async () => {
    state.loading = true;
    try {
      console.log('... Fetching data ...');
      const res = await fetch(url, options);
      data.value = await res.json();
      
    } catch (e) {
      state.error = e;
    } finally {
      state.loading = false;
    }
  };

  fetchData1();
  console.log('data: ' + data.value);
  return { data, ...toRefs(state) };
}
