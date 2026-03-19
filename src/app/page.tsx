import { getHomepageData } from "@/lib/data"

const HomePage =  async () => {
  const { articles} = await getHomepageData()
 const {edtorpicksecondary} = articles
 console.log(edtorpicksecondary)

  return (
    <div>Home Page</div>
  )
}

export default HomePage