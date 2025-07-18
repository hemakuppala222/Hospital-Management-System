import React, { useState } from 'react';
import { Search, Plus, Filter, Package, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const inventoryItems = [
    {
      id: 'INV001',
      name: 'Surgical Masks',
      category: 'PPE',
      supplier: 'MedSupply Co.',
      currentStock: 2500,
      minStock: 500,
      maxStock: 5000,
      unitCost: 0.25,
      location: 'Storage A-1',
      lastRestocked: '2024-01-10',
      expiryDate: '2025-01-10',
      status: 'In Stock'
    },
    {
      id: 'INV002',
      name: 'Disposable Syringes 5ml',
      category: 'Medical Supplies',
      supplier: 'SyringeMax Inc.',
      currentStock: 150,
      minStock: 200,
      maxStock: 1000,
      unitCost: 0.15,
      location: 'Storage B-3',
      lastRestocked: '2024-01-05',
      expiryDate: '2026-01-05',
      status: 'Low Stock'
    },
    {
      id: 'INV003',
      name: 'Sterile Gauze Pads',
      category: 'Medical Supplies',
      supplier: 'WoundCare Ltd.',
      currentStock: 800,
      minStock: 300,
      maxStock: 1500,
      unitCost: 0.50,
      location: 'Storage A-5',
      lastRestocked: '2024-01-12',
      expiryDate: '2025-12-31',
      status: 'In Stock'
    },
    {
      id: 'INV004',
      name: 'Latex Gloves (Box)',
      category: 'PPE',
      supplier: 'SafeHands Corp.',
      currentStock: 0,
      minStock: 50,
      maxStock: 300,
      unitCost: 12.50,
      location: 'Storage A-2',
      lastRestocked: '2023-12-15',
      expiryDate: '2025-06-15',
      status: 'Out of Stock'
    },
    {
      id: 'INV005',
      name: 'IV Fluid Bags (1L)',
      category: 'Pharmaceuticals',
      supplier: 'FluidMed Solutions',
      currentStock: 300,
      minStock: 100,
      maxStock: 600,
      unitCost: 3.75,
      location: 'Pharmacy Storage',
      lastRestocked: '2024-01-14',
      expiryDate: '2024-06-14',
      status: 'Expiring Soon'
    },
    {
      id: 'INV006',
      name: 'Digital Thermometers',
      category: 'Equipment',
      supplier: 'TechMed Devices',
      currentStock: 45,
      minStock: 20,
      maxStock: 100,
      unitCost: 25.00,
      location: 'Equipment Room',
      lastRestocked: '2024-01-08',
      expiryDate: null,
      status: 'In Stock'
    }
  ];

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || item.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const totalItems = inventoryItems.reduce((sum, item) => sum + item.currentStock, 0);
  const lowStockItems = inventoryItems.filter(item => item.currentStock <= item.minStock && item.currentStock > 0).length;
  const outOfStockItems = inventoryItems.filter(item => item.currentStock === 0).length;
  const totalValue = inventoryItems.reduce((sum, item) => sum + (item.currentStock * item.unitCost), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600 mt-1">Manage medical supplies, equipment, and stock levels</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Add New Item
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search items by name or supplier..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="relative">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="all">All Categories</option>
              <option value="ppe">PPE</option>
              <option value="medical supplies">Medical Supplies</option>
              <option value="pharmaceuticals">Pharmaceuticals</option>
              <option value="equipment">Equipment</option>
            </select>
            <Filter className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Inventory Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{totalItems.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Items</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-yellow-600">{lowStockItems}</div>
          <div className="text-sm text-gray-600">Low Stock Alerts</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-red-600">{outOfStockItems}</div>
          <div className="text-sm text-gray-600">Out of Stock</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-green-600">${totalValue.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Value</div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Inventory Items</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock Levels
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Financial Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location & Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Package className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.category}</div>
                        <div className="text-sm text-gray-500">{item.supplier}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Current: {item.currentStock}</div>
                    <div className="text-sm text-gray-500">Min: {item.minStock}</div>
                    <div className="text-sm text-gray-500">Max: {item.maxStock}</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className={`h-2 rounded-full ${
                          item.currentStock <= item.minStock ? 'bg-red-500' :
                          item.currentStock <= item.minStock * 1.5 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${Math.min((item.currentStock / item.maxStock) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Unit: ${item.unitCost}</div>
                    <div className="text-sm text-gray-500">
                      Total: ${(item.currentStock * item.unitCost).toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.location}</div>
                    <div className="text-sm text-gray-500">
                      Restocked: {new Date(item.lastRestocked).toLocaleDateString()}
                    </div>
                    {item.expiryDate && (
                      <div className="text-sm text-gray-500">
                        Expires: {new Date(item.expiryDate).toLocaleDateString()}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-1">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full w-fit ${
                        item.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                        item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                        item.status === 'Out of Stock' ? 'bg-red-100 text-red-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {item.status}
                      </span>
                      {item.currentStock <= item.minStock && item.currentStock > 0 && (
                        <div className="flex items-center text-yellow-600">
                          <TrendingDown className="h-3 w-3 mr-1" />
                          <span className="text-xs">Reorder Soon</span>
                        </div>
                      )}
                      {item.currentStock === 0 && (
                        <div className="flex items-center text-red-600">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          <span className="text-xs">Urgent</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex flex-col space-y-1">
                      <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                        Update Stock
                      </button>
                      <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors">
                        Reorder
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stock Alerts and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Stock Alerts</h3>
          <div className="space-y-3">
            {inventoryItems
              .filter(item => item.currentStock <= item.minStock || item.status === 'Expiring Soon')
              .map((item) => (
                <div key={item.id} className="flex items-center p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-600">
                      {item.currentStock === 0 ? 'Out of stock' : 
                       item.currentStock <= item.minStock ? `Low stock: ${item.currentStock} units` : 
                       'Expiring soon'}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
              <Package className="inline h-4 w-4 mr-2" />
              Generate Purchase Order
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
              <TrendingUp className="inline h-4 w-4 mr-2" />
              Stock Movement Report
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg bg-yellow-50 text-yellow-700 hover:bg-yellow-100 transition-colors">
              <AlertTriangle className="inline h-4 w-4 mr-2" />
              Review Expiring Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;