import { Configuration, IdentityApi } from "@ory/client"

const identityApi = new IdentityApi(
  new Configuration({
    basePath: `https://${process.env.ORY_PROJECT_SLUG}.projects.oryapis.com`,
    apiKey: `${process.env.ORY_ACCESS_TOKEN}`,
  }),
)

export async function GetIdentitySessions(
  identityId: string,
  active?: boolean,
) {
  // highlight-start
  return await identityApi.listIdentitySessions({
    id: identityId,
    active: active,
  })
  // highlight-end
}