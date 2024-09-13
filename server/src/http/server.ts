import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { createGoalRoute } from './routes/create-goal'
import { createCompletionRoute } from './routes/create-completion'
import { getPendingGoalsRoute } from './routes/get-pending-goals'

const app = fastify().withTypeProvider<ZodTypeProvider>()

// Add schema validator and serializer
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(getPendingGoalsRoute)
app.register(createGoalRoute)
app.register(createCompletionRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🌐 HTTP Server running on http://localhost:3333')
  })
