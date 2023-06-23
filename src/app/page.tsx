import { AiFillQuestionCircle,AiFillCalendar } from "react-icons/ai";
import { HiUserGroup} from "react-icons/hi";
import Sidebar from "./components/Sidebar";
import { Article, ThreadBuilder, VideoType,Accordin } from "./components/Task";
import { fetchData } from "./lib/fetchData";
import { Data } from "./lib/type";

const Home = async () => {
  const data:Data = await fetchData()
  function getTaskAndAssetTitles(data:Data) {
    const taskAndAssetTitles = [data.tasks[0].task_title, ...data.tasks[0].assets.map((item) => item.asset_title)];
    return taskAndAssetTitles;
  }
  return (
    <>

    <Sidebar arr={getTaskAndAssetTitles(data)}/>
    <main className="max-w-6xl bg-white my-6 mx-auto min-h-screen">
      <h1 className="text-[#0029FF] text-3xl font-bold my-6">{data.title}</h1>
      <div className="bg-[#E9ECEF] text-black px-6 py-6 rounded-lg">
        <h2 className="text-xl font-semibold">{data.tasks[0].task_title}</h2>
        <p className="text-sm">{data.tasks[0].task_description}</p>
      </div>
      
      <section className="grid grid-cols-2 w-full gap-6">
        {
          data.tasks[0].assets.map((item) => {
            if (item.asset_content_type === "video") {
              return <VideoType title={item.asset_title} content={item.asset_content} description={item.asset_description} key={item.asset_id} />
            } else if (item.asset_content_type === "threadbuilder") {
              return <ThreadBuilder title={item.asset_title} description={item.asset_description} key={item.asset_id} />
            } else if (item.asset_type === "input_asset" && item.asset_content_type === "article") {
              return <Article title={item.asset_title} description={item.asset_description} key={item.asset_id} />
            } else if (item.asset_type === "display_asset" && item.asset_content_type === "article") {
              return <Accordin title={item.asset_title} description={item.asset_description} key={item.asset_id} />
            }
          })
        }
      </section>
      <div className="fixed right-3 bottom-3">
        <AiFillQuestionCircle className="w-16 h-16 mb-2 bg-blue-500 text-white rounded-full p-3"/>
        <HiUserGroup className="w-16 h-16 bg-blue-500 mb-2 text-white rounded-full p-3"/>
        <AiFillCalendar className="w-16 h-16 bg-blue-500 mb-2 text-white rounded-full p-3"/>
      </div>
    </main>
    </>
  )
}
export default Home