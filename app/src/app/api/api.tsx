
export interface Api{
  id: number,
  name: string,
  description: string,
  image: string,
  objectives: string,
  goals: string,
  impact: string,
}

export const Dados = async () => {
  const response = await fetch('https://my-json-server.typicode.com/brasilcursinhos/fake-rest-api/programs')
  const api = await response.json()
  return api
}
