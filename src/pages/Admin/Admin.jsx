import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Dashboard from "./Dashboard";
import Category from "./Category";
import Products from "./Products";
import Orders from "./Orders";

export default function Admin() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([ ]);
  const [orders, setOrders] = useState([]);




  return (
    <div className="flex overflow-auto h-full bg-slate-50">
      {/* Sidebar Section */}
      <div className="flex-none">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/category" element={<Category categories={categories} setCategories={setCategories} />} />
              <Route path="/products" element={<Products products={products} setProducts={setProducts} categories={categories} setCategories={setCategories} />} />
              <Route path="/orders" element={<Orders orders={orders} setOrders={setOrders} categories={categories}  />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}
