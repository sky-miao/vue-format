import * as types from '../mutationTypes'

const state = {
  one: 1
}
// getters
// Gets the properties coming out from under this module
const getters = {
  // chartData: state => state.chartData
}

// actions
const actions = {
}

// mutations
// state modification
const mutations = {
  [types.ONE] (state, one) {
    state.one = one
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
