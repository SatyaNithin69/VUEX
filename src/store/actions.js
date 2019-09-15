export default {
  ADD_PET: (context, payload) => {
    context.commit("APPEND_PET", payload);
  }
};
