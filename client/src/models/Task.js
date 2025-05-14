export class Task {
  constructor(data) {
    this.id = data.name
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.description = data.description
    this.location = data.location
    this.title = data.title
    this.proprosedPrice = data.proprosedPrice
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }
}