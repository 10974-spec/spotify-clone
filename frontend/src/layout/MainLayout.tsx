import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Outlet } from "react-router-dom"
import LeftSidebar from "./components/LeftSidebar"
import FriendsActavity from "./components/FriendsActavity"


const MainLayout = () => {

    const isMobile = false

  return <div className="h-screen bg-black text-white flex flex-col">
<ResizablePanelGroup direction="horizontal" className="flex-1 flex h-full overflow-hidden p-2">
    {/* =====LEFT SIDEBAR===== */}
    <ResizablePanel defaultSize={20} minSize={isMobile? 0 : 10} maxSize={30}>
            <LeftSidebar/>
    </ResizablePanel>
    <ResizableHandle className="w-2 bg-black rounded-lg transition-colors"/>
    {/* =====MAIN CONTENT===== */}
    <ResizablePanel defaultSize={80} minSize={isMobile? 80 : 60}>
            <Outlet/>
    </ResizablePanel>
     <ResizableHandle className="w-2 bg-black rounded-lg transition-colors"/>
    {/* =====RIGHT SIDEBAR===== */}
    <ResizablePanel defaultSize={20} minSize={0} maxSize={25} collapsedSize={0}>
         <FriendsActavity/>
    </ResizablePanel>
</ResizablePanelGroup>


  </div>
}

export default MainLayout