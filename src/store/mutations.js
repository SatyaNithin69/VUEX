export default {
  APPEND_PET: (state, payload) => {
    state[payload.species].push(payload.pet);
  }
};
