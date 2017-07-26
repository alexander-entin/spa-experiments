// export default (state, o) => state.data[o.serviceId]

import { createSelector } from 'reselect'
import mockData from '../tools/mockData'

let data = (state, o) => state.data[o.serviceId]
export default createSelector(data, (data) => data && mockData())
