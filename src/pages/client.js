import client from "@sanity/client"
export default client({
  projectId: "90bvbhqt",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-08"
})