import Sidebar from "./UI/Sidebar/Sidebar";
import Card from "./UI/Card/Card";


export default function Home() {
  return (
   <div>
      <div className="flex flex-row p-10 h-[100vh]">
        <Sidebar/>
          <section className="flex-1 shadow-xl bg-white h-full overflow-scroll no-scrollbar">
            <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-4 gap-4 justify-center content-center p-4 ">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
          </section>
      </div>
   </div>
  );
}
