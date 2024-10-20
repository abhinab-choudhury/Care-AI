class ApiResponse {
  statusCode: number;
  message: string;
  data: object;

  constructor(
    statusCode: number,
    message: string = 'Something went wrong',
    data: object = {}
  ) {
    this.statusCode = statusCode || 200;
    this.data = data || {};
    this.message = message || 'Successful';
  }
}

export default ApiResponse;
