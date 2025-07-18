import React, { useState } from 'react';
import { Search, Plus, Filter, DollarSign, FileText, Download, AlertCircle } from 'lucide-react';

const Billing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const billingRecords = [
    {
      id: 'INV001',
      patientId: 'P001',
      patientName: 'John Smith',
      date: '2024-01-15',
      amount: 1250.00,
      status: 'Paid',
      paymentMethod: 'Insurance',
      insuranceProvider: 'Blue Cross',
      services: ['Consultation', 'ECG', 'Blood Test'],
      dueDate: '2024-01-30'
    },
    {
      id: 'INV002',
      patientId: 'P002',
      patientName: 'Sarah Johnson',
      date: '2024-01-14',
      amount: 850.00,
      status: 'Pending',
      paymentMethod: 'Self Pay',
      insuranceProvider: null,
      services: ['Lab Tests', 'Consultation'],
      dueDate: '2024-01-29'
    },
    {
      id: 'INV003',
      patientId: 'P003',
      patientName: 'Michael Brown',
      date: '2024-01-10',
      amount: 12500.00,
      status: 'Partially Paid',
      paymentMethod: 'Insurance',
      insuranceProvider: 'Aetna',
      services: ['Surgery', 'Anesthesia', 'Room Charges', 'Post-op Care'],
      dueDate: '2024-01-25'
    },
    {
      id: 'INV004',
      patientId: 'P004',
      patientName: 'Emily Davis',
      date: '2024-01-16',
      amount: 420.00,
      status: 'Pending',
      paymentMethod: 'Insurance',
      insuranceProvider: 'Cigna',
      services: ['Dermatology Consultation', 'Biopsy'],
      dueDate: '2024-01-31'
    },
    {
      id: 'INV005',
      patientId: 'P005',
      patientName: 'Robert Wilson',
      date: '2024-01-16',
      amount: 3200.00,
      status: 'Overdue',
      paymentMethod: 'Self Pay',
      insuranceProvider: null,
      services: ['Emergency Care', 'Diagnostic Tests', 'Monitoring'],
      dueDate: '2024-01-16'
    }
  ];

  const filteredRecords = billingRecords.filter(record => {
    const matchesSearch = record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || record.status.toLowerCase().replace(' ', '') === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalRevenue = billingRecords.reduce((sum, record) => sum + record.amount, 0);
  const paidAmount = billingRecords.filter(r => r.status === 'Paid').reduce((sum, record) => sum + record.amount, 0);
  const pendingAmount = billingRecords.filter(r => r.status === 'Pending' || r.status === 'Partially Paid').reduce((sum, record) => sum + record.amount, 0);
  const overdueAmount = billingRecords.filter(r => r.status === 'Overdue').reduce((sum, record) => sum + record.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Billing & Payments</h1>
          <p className="text-gray-600 mt-1">Manage patient billing, invoices, and payment processing</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Create Invoice
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
              placeholder="Search by patient name or invoice ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="partiallypaid">Partially Paid</option>
              <option value="overdue">Overdue</option>
            </select>
            <Filter className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">${totalRevenue.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Revenue</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-green-600">${paidAmount.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Paid Amount</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-yellow-600">${pendingAmount.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Pending Amount</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-red-600">${overdueAmount.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Overdue Amount</div>
        </div>
      </div>

      {/* Billing Records */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Billing Records</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice & Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Services
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount & Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRecords.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{record.id}</div>
                      <div className="text-sm text-gray-500">{record.patientName}</div>
                      <div className="text-sm text-gray-500">ID: {record.patientId}</div>
                      <div className="text-xs text-gray-400">{new Date(record.date).toLocaleDateString()}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs">
                      {record.services.map((service, index) => (
                        <div key={index} className="text-sm text-gray-600">• {service}</div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{record.paymentMethod}</div>
                    {record.insuranceProvider && (
                      <div className="text-sm text-gray-500">{record.insuranceProvider}</div>
                    )}
                    <div className="text-xs text-gray-400">
                      Due: {new Date(record.dueDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      ${record.amount.toLocaleString()}
                    </div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      record.status === 'Paid' ? 'bg-green-100 text-green-800' :
                      record.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      record.status === 'Partially Paid' ? 'bg-blue-100 text-blue-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {record.status}
                    </span>
                    {record.status === 'Overdue' && (
                      <div className="flex items-center mt-1">
                        <AlertCircle className="h-3 w-3 text-red-500 mr-1" />
                        <span className="text-xs text-red-600">Payment overdue</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-blue-600 hover:text-blue-900 transition-colors">
                        <FileText className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-green-600 hover:text-green-900 transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-yellow-600 hover:text-yellow-900 transition-colors">
                        <DollarSign className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
              Generate Monthly Report
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
              Process Insurance Claims
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg bg-yellow-50 text-yellow-700 hover:bg-yellow-100 transition-colors">
              Send Payment Reminders
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Insurance</span>
              <span className="font-medium">65%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Self Pay</span>
              <span className="font-medium">25%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Credit Card</span>
              <span className="font-medium">10%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Outstanding Invoices</h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600">
              {filteredRecords.filter(r => r.status === 'Overdue' || r.status === 'Pending').length}
            </div>
            <div className="text-sm text-gray-600">Require attention</div>
            <button className="mt-3 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm">
              Review Outstanding
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;