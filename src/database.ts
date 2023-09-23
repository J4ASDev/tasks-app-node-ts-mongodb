import { connect } from 'mongoose'

class Database {
  private connection: string;

  constructor(connection: string) {
    this.connection = connection
  }

  connect = () => {
    return connect(this.connection)
  }
}

export default Database
