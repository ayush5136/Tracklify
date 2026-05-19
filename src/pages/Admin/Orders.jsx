import React, { useState } from "react";

export default function Orders({ orders, setOrders, categories }) {
  const isEmpty = orders.length === 0;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    productname: "",
    category: "",
    quantity: "",
    date: "",
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOrders([formData,...orders ]);
    setIsModalOpen(false);
    setFormData({ name: "", productname: "", category: "", quantity: "" });
  };
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Orders</h1>
          <p className="text-slate-500">Track and manage customer orders</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/10"
        >
          Add Orders
        </button>
      </div>

      {isEmpty ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-slate-300">🛒</span>
          </div>
          <h3 className="text-lg font-semibold text-slate-800">
            No orders yet
          </h3>
          <p className="text-slate-500 mt-1">
            When customers buy products, they will appear here.
          </p>
        </div>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={index} className="bg-amber-100 rounded-2xl border border-slate-200 shadow-sm  mb-3">
             <table className="w-full text-sm text-left rounded-2xl overflow-hidden  text-slate-500 dark:text-slate-400">
              <thead className="text-md font-bold text-slate-700 uppercase dark:bg-slate-700 dark:text-slate-400">
                <tr>
                  <th className="p-4">Customer Name</th>
                  <th className="p-4">Product Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-amber-200 text-black text-lg">
                  <td className="p-4">{order.name}</td>
                  <td className="p-4">{order.productname}</td>
                  <td className="p-4">{order.category || "N/A"}</td>
                  <td className="p-4">{order.quantity}</td>
                  <td className="p-4">{order.date || "N/A"}</td>
                </tr>
              </tbody>
             </table>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800">
                Add New Order
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-full"
              >
                ✕
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <form
                id="add-category-form"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="block text-md font-bold text-slate-700 mb-1">
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    placeholder="Enter customer name..."
                  />
                </div>

                <div>
                  <label className="block text-md font-bold text-slate-700 mb-1">
                    Product Name
                  </label>
                  <input
                    name="productname"
                    required
                    rows="3"
                    value={formData.productname}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    placeholder="Enter product name..."
                  />
                </div>

                <div>
                  <label className="block text-md font-bold text-slate-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none bg-white"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat, index) => (
                      <option key={index} value={cat.name || cat}>
                        {cat.name || cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-between">
                  <div>
                    <label className="block text-md font-bold text-slate-700 mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                      placeholder="Enter quantity..."
                    />
                  </div>
                  <div>
                    <label className="block text-md font-bold text-slate-700 mb-1">
                      Enter date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-3 bg-slate-50/50">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="add-category-form"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium shadow-lg shadow-blue-900/10"
              >
                Add Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
