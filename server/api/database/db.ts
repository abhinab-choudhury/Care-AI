import mongoose from 'mongoose';
import { DATABASE_CONNECTION_STRING, DATABASE_NAME } from '../utils/secrets';
import ApiError from '../utils/api-error-handler';

const DATABASE_CONNECTION_URL = `${DATABASE_CONNECTION_STRING}/${DATABASE_NAME}?retryWrites=true&w=majority`;

export default async function db_connect() {
  try {
    const connectionInstance = await mongoose.connect(DATABASE_CONNECTION_URL);
    console.log('MongoDB Running on PORT:', connectionInstance.connection.port);
  } catch (error) {
    throw new ApiError(500, 'Failed to Connect MongoDB Database');
  }
}
