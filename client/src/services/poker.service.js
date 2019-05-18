import axios from 'axios'

const url = process.env.VUE_APP_API_URL

class PokerService {
  static create (data) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(`${url}/create`, data)
        resolve(res)
      } catch (e) {
        reject(e.response)
      }
    })
  }
}
export default PokerService