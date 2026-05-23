import React, { useState } from "react";
import { EllipsisVertical } from "lucide-react";

export default function Products({
  products,
  setProducts,
  categories
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    imageUrl: "",
    description: "",
  });

  const isEmpty = products.length === 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isEditingPanel){
      const updatedProducts = products.map((product) => 
        product.id === isEditingPanel.id ? formData : product
      );
      setProducts(updatedProducts);
      setIsEditingPanel(null);
      setOpenOptionId(null);
    }else{
      const newProduct = {
        id: Date.now(),
        ...formData,
        price: parseFloat(formData.price) || 0,
      };
      setProducts([...products, newProduct]);
    }
    setIsModalOpen(false);
    setFormData({
      name: "",
      price: "",
      category: "",
      imageUrl: "",
      description: "",
    });
  };
  const [isEditingPanel, setIsEditingPanel] = useState(null);
  const [openOptionId, setOpenOptionId] = useState(null);
  
  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    setOpenOptionId(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Products</h1>
          <p className="text-slate-500">Manage your product inventory</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/10"
        >
          Add Product
        </button>
      </div>

      {/* Main Content */}
      {isEmpty ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-slate-300 text-2xl">📦</span>
          </div>
          <h3 className="text-lg font-semibold text-slate-800">
            No products found
          </h3>
          <p className="text-slate-500 mt-1">
            Start adding products to your store.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              <button
                onClick={() => setOpenOptionId(product.id=== openOptionId ? null : product.id)}
                className="absolute top-1 right-1 text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-full"
              >
                <EllipsisVertical />
              </button>
              {openOptionId === product.id && (
                <div className="absolute top-11 right-0 z-10 bg-slate-100 rounded-lg shadow-lg ">
                  <div className="py-1">
                    <button
                    onClick={() => {setIsEditingPanel(product);
                      setIsModalOpen(true);
                      setFormData(product);
                    }}
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-400 hover:rounded hover:cursor-pointer w-full text-left transition-colors duration-300">
                      Edit
                    </button>
                    <button
                    onClick={() => handleDelete(product.id)}
                     className="block px-4 py-2 text-sm text-slate-700 hover:bg-red-400 hover:rounded hover:cursor-pointer  w-full text-left transition-colors duration-300">
                      Delete
                    </button>
                  </div>
                </div>
              )}
              <div className="aspect-4/3 bg-white flex items-center justify-center overflow-hidden">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG36.png"
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className="font-semibold text-slate-800 truncate pr-2"
                    title={product.name}
                  >
                    {product.name}
                  </h3>
                  <span className="font-bold text-green-600">
                    ₹{product.price}
                  </span>
                </div>
                {product.category ? (
                  <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg mb-3 self-start">
                    {product.category}
                  </span>
                ) : (
                  <span className="inline-block px-1 py-2 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg mb-3 self-start">
                    Category Not Added
                  </span>
                )}
                <p className="text-sm text-slate-500 line-clamp-2 mt-auto truncate">
                  {product.description || "No description provided."}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          {/* Modal Content */}
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h2 className="text-xl font-bold text-slate-800">
                {isEditingPanel ? "Edit Product" : "Add New Product"}
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
                id="add-product-form"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    placeholder="e.g. Wireless Headphones"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Price *
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        ₹
                      </span>
                      <input
                        type="number"
                        name="price"
                        required
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Image URL
                  </label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"
                    placeholder="Brief description of the product..."
                  ></textarea>
                </div>
              </form>
            </div>

            <div className="px-6 py-4 border-t border-slate-100 flex justify-end gap-3 bg-slate-50/50">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="add-product-form"
                className="px-5 py-2.5 rounded-xl font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/10 transition-colors"
              >
                {isEditingPanel ?   "Save Changes" : "Add Product"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
