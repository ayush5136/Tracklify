import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, ShoppingBag, ListTree, ClipboardList, LogOut } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { path: "/admin", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { path: "/admin/category", icon: <ListTree size={20} />, label: "Category" },
    { path: "/admin/products", icon: <ShoppingBag size={20} />, label: "Products" },
    { path: "/admin/orders", icon: <ClipboardList size={20} />, label: "Orders" },
  ];

  return (
    <aside className="w-64 bg-slate-900 h-full text-slate-300 flex flex-col border-r border-slate-800 sticky top-0">
      <div className="p-6">
        <h2 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          TrackLify
        </h2>
        <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Admin Panel</p>
      </div>

      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === "/admin" && location.pathname === "/admin/");
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                      : "hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span className={`${isActive ? "text-white" : "text-slate-400 group-hover:text-blue-400"} transition-colors`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all duration-200">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
