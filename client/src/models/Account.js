export class Account {
  /**
   * @typedef AccountData
   * @property {string} id
   * @property {string} email
   * @property {string} name
   * @property {string} picture
   * @property {string} skills
   * @param {AccountData} data
   */
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.skills = data.skills
    // TODO add additional properties if needed
  }
}
