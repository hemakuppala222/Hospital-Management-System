import React, { useState } from 'react';
import { Search, Plus, Filter, Package, AlertTriangle, TrendingDown, Pill } from 'lucide-react';

const Pharmacy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const medications = [
    {
      id: 'MED001',
      name: 'Amoxicillin 500mg',
      category: 'Antibiotic',
      manufacturer: 'PharmaCorp',
      batchNumber: 'AMX-2024-001',
      expiryDate: '2025-12-15',
      stock: 150,
      minStock: 50,
      unitPrice: 2.50,
      location: 'A-12',
      status: 'In Stock'
    },
    {
      id: 'MED002',
      name: 'Metformin 1000mg',
      category: 'Diabetes',
      manufacturer: 'DiabCare Inc',
      batchNumber: 'MET-2024-005',
      expiryDate: '2025-08-20',
      stock: 25,
      minStock: 30,
      unitPrice: 1.75,
      location: 'B-05',
      status: 'Low Stock'
    },
    {
      id: 'MED003',
      name: 'Lisinopril 10mg',
      category: 'Cardiovascular',
      manufacturer: 'CardioMed',
      batchNumber: 'LIS-2024-012',
      expiryDate: '2025-11-30',
      stock: 200,
      minStock: 75,
      unitPrice: 3.25,
      location: 'C-08',
      status: 'In Stock'
    },
    {
      id: 'MED004',
      name: 'Ibuprofen 400mg',
      category: 'Pain Relief',
      manufacturer: 'PainFree Pharma',
      batchNumber: 'IBU-2024-008',
      expiryDate: '2024-03-15',
      stock: 80,
      minStock: 40,
      unitPrice: 0.95,
      location: 'D-15',
      status: 'Expiring Soon'
    },
    {
      id: 'MED005',
      name: 'Aspirin 81mg',
      category: 'Cardiovascular',
      manufacturer: 'HeartCare Labs',
      batchNumber: 'ASP-2024-020',
      expiryDate: '2026-01-10',
      stock: 0,
      minStock: 100,
      unitPrice: 0.50,
      location: 'A-03',
      status: 'Out of Stock'
    }
  ];

  const filteredMedications = medications.filter(med => {
    const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         med.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || med.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const totalStock = medications.reduce((sum, med) => sum + med.stock, 0);
  const lowStockCount = medications.filter(med => med.stock <= med.minStock && med.stock > 0).length;
  const outOfStockCount = medications.filter(med => med.stock === 0).length;
  const expiringSoon = medications.filter(med => {
    const expiryDate = new Date(med.expiryDate);
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
    return expiryDate <= threeMonthsFromNow;
  }).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Pharmacy Management</h1>
          <p className="text-gray-600 mt-1">Manage medication inventory, prescriptions, and stock levels</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Add Medication
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
              placeholder="Search medications by name or manufacturer..."
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
              <option value="antibiotic">Antibiotic</option>
              <option value="diabetes">Diabetes</option>
              <option value="cardiovascular">Cardiovascular</option>
              <option value="pain relief">Pain Relief</option>
            </select>
            <Filter className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Inventory Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{totalStock}</div>
          <div className="text-sm text-gray-600">Total Stock Items</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-yellow-600">{lowStockCount}</div>
          <div className="text-sm text-gray-600">Low Stock Alerts</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-red-600">{outOfStockCount}</div>
          <div className="text-sm text-gray-600">Out of Stock</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-orange-600">{expiringSoon}</div>
          <div className="text-sm text-gray-600">Expiring Soon</div>
        </div>
      </div>

      {/* Medication Inventory */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Medication Inventory</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medication
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Batch Details
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
              {filteredMedications.map((medication) => (
                <tr key={medication.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Pill className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{medication.name}</div>
                        <div className="text-sm text-gray-500">{medication.category}</div>
                        <div className="text-sm text-gray-500">{medication.manufacturer}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Stock: {medication.stock} units</div>
                    <div className="text-sm text-gray-500">Min: {medication.minStock} units</div>
                    <div className="text-sm text-gray-500">Price: ${medication.unitPrice}</div>
                    <div className="text-sm text-gray-500">Location: {medication.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Batch: {medication.batchNumber}</div>
                    <div className="text-sm text-gray-500">
                      Expires: {new Date(medication.expiryDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-1">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full w-fit ${
                        medication.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                        medication.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                        medication.status === 'Out of Stock' ? 'bg-red-100 text-red-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {medication.status}
                      </span>
                      {medication.stock <= medication.minStock && medication.stock > 0 && (
                        <div className="flex items-center text-yellow-600">
                          <TrendingDown className="h-3 w-3 mr-1" />
                          <span className="text-xs">Low Stock</span>
                        </div>
                      )}
                      {medication.stock === 0 && (
                        <div className="flex items-center text-red-600">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          <span className="text-xs">Reorder Now</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
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

      {/* Alerts and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Stock Alerts</h3>
          <div className="space-y-3">
            {medications
              .filter(med => med.stock <= med.minStock || new Date(med.expiryDate) <= new Date(Date.now() + 90 * 24 * 60 * 60 * 1000))
              .map((med) => (
                <div key={med.id} className="flex items-center p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{med.name}</p>
                    <p className="text-xs text-gray-600">
                      {med.stock <= med.minStock ? `Low stock: ${med.stock} units` : 'Expiring soon'}
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
              Generate Reorder Report
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
              <Pill className="inline h-4 w-4 mr-2" />
              Process New Prescription
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

export default Pharmacy;