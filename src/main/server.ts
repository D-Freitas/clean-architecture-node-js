import { app, env } from '@/main/config'

const { port } = env

app.listen(port, () => process.stdout.write(`http://localhost:${port}`))
