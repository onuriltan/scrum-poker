import axios from 'axios'

const url = process.env.VUE_APP_API_URL

class PokerService {
  static create (data) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(`${url}/createPoker`, data)
        resolve(res)
      } catch (e) {
        reject(e.response)
      }
    })
  }

  static getStories (pokerName) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}/getStories?poker=${pokerName}`)
        resolve(res)
      } catch (e) {
        reject(e.response)
      }
    })
  }

  static getVotes (storyName, pokerName) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}/getVotes?story=${storyName}&poker=${pokerName}`)
        resolve(res)
      } catch (e) {
        reject(e.response)
      }
    })
  }

  static getPokerURL (pokerName) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}/getPokerURL?poker=${pokerName}`)
        resolve(res)
      } catch (e) {
        reject(e.response)
      }
    })
  }
}
export default PokerService