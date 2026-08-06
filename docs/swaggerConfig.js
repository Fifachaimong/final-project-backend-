import swaggerJSDoc from "swagger-jsdoc"

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API Material Management',
    version: '1.0.0',
  },
  servers: [
    {
        url: 'http://localhost:3000',
        description: 'server api '
    }
  ]
}

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)
export default swaggerSpec