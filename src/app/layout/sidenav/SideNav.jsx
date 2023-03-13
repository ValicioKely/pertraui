function SidenavLink({label}) {
    return (


        <li className=" text-center p-4 pr-16 text-blue-300 hover:text-blue-900 hover:border-blue-500 hover:border-solid hover:border-l-4 ease-in-out duration-200 ">
            <a href="/home">{label}</a>
        </li>
    )
}

function SidenavItem (props){
    return(
        <ul className="mt-12">
            {props.children}
        </ul>
    )
}

export default function Sidenav (){
    return (
       <div>
           <SidenavItem >
               <SidenavLink label="Live" />
               <SidenavLink label="Groups" />
               <SidenavLink label="Pages" />
               <SidenavLink label="Saved" />
           </SidenavItem>
       </div>
    )
}

