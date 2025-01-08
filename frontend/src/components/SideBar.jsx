import React from "react";
import SearchInput from "./sidebar/SearchInput";
// import Conversation from './sidebar/Conversation'
import Conversations from "./sidebar/Conversations";
import LogoutButton from "./sidebar/LogoutButton";

function SideBar() {
  return (
    
      
        <div className="border-r border-slate-500 p-4 flex flex-col">
          <div>
            <SearchInput />
          </div>
          <div className="divider px-3"></div>
          <Conversations />
          <LogoutButton />
        </div>
      
    
  );
}

export default SideBar;
// import React from 'react'
// import SearchInput from './sidebar/SearchInput'
// // import Conversation from './sidebar/Conversation'
// import Conversations from './sidebar/Conversations'

// function SideBar() {
//   return (
//     <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput/>
//             <div className='divider px-3'></div>
//             <Conversations/>
// 		</div>
//         </div>
//   )
// }

// export default SideBar
