import React, { useState } from 'react';
import { Search, Plus, Filter, TestTube, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Laboratory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const labTests = [
    {
      id: 'LAB001',
      patientId: 'P001',
      patientName: 'John Smith',
      testType: 'Complete Blood Count',
      category: 'Hematology',
      orderedBy: 'Dr. Wilson',
      orderedDate: '2024-01-15',
      sampleCollected: '2024-01-15 09:30',
      status: 'Completed',
      results: 'Normal',
      priority: 'Routine',
      technician: 'Lab Tech A'
    },
    {
      id: 'LAB002',
      patientId: 'P002',
      patientName: 'Sarah Johnson',
      testType: 'Lipid Panel',
      category: 'Chemistry',
      orderedBy: 'Dr. Martinez',
      orderedDate: '2024-01-14',
      sampleCollected: '2024-01-14 14:15',
      status: 'In Progress',
      results: 'Pending',
      priority: 'Routine',
      technician: 'Lab Tech B'
    },
    {
      id: 'LAB003',
      patientId: 'P005',
      patientName: 'Robert Wilson',
      testType: 'Cardiac Enzymes',
      category: 'Chemistry',
      orderedBy: 'Dr. Anderson',
      orderedDate: '2024-01-16',
      sampleCollected: '2024-01-16 15:45',
      status: 'In Progress',
      results: 'Pending',
      priority: 'STAT',
      technician: 'Lab Tech C'
    },
    {
      id: 'LAB004',
      patientId: 'P003',
      patientName: 'Michael Brown',
      testType: 'Liver Function Tests',
      category: 'Chemistry',
      orderedBy: 'Dr. Anderson',
      orderedDate: '2024-01-10',
      sampleCollected: '2024-01-10 11:20',
      status: 'Completed',
      results: 'Elevated ALT',
      priority: 'Routine',
      technician: 'Lab Tech A'
    },
    {
      id: 'LAB005',
      patientId: 'P004',
      patientName: 'Emily Davis',
      testType: 'Thyroid Function',
      category: 'Endocrinology',
      orderedBy: 'Dr. Thompson',
      orderedDate: '2024-01-16',
      sampleCollected: null,
      status: 'Sample Pending',
      results: 'Pending',
      priority: 'Routine',
      technician: 'Unassigned'
    }
  ];

  const filteredTests = labTests.filter(test => {
    const matchesSearch = test.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.testType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || test.status.toLowerCase().replace(' ', '') === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalTests = labTests.length;
  const completedTests = labTests.filter(test => test.status === 'Completed').length;
  const inProgressTests = labTests.filter(test => test.status === 'In Progress').length;
  const pendingTests = labTests.filter(test => test.status === 'Sample Pending').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Laboratory Management</h1>
          <p className="text-gray-600 mt-1">Manage lab tests, results, and sample processing</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Order New Test
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
              placeholder="Search by patient name, test type, or lab ID..."
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
              <option value="completed">Completed</option>
              <option value="inprogress">In Progress</option>
              <option value="samplepending">Sample Pending</option>
            </select>
            <Filter className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Laboratory Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{totalTests}</div>
          <div className="text-sm text-gray-600">Total Tests</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-green-600">{completedTests}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-yellow-600">{inProgressTests}</div>
          <div className="text-sm text-gray-600">In Progress</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-red-600">{pendingTests}</div>
          <div className="text-sm text-gray-600">Sample Pending</div>
        </div>
      </div>

      {/* Lab Tests Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Laboratory Tests</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Test & Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Test Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Timeline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status & Results
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTests.map((test) => (
                <tr key={test.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <TestTube className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{test.id}</div>
                        <div className="text-sm text-gray-500">{test.patientName}</div>
                        <div className="text-sm text-gray-500">ID: {test.patientId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{test.testType}</div>
                    <div className="text-sm text-gray-500">{test.category}</div>
                    <div className="text-sm text-gray-500">Ordered by: {test.orderedBy}</div>
                    <div className="text-sm text-gray-500">Tech: {test.technician}</div>
                    {test.priority === 'STAT' && (
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 mt-1">
                        STAT
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      Ordered: {new Date(test.orderedDate).toLocaleDateString()}
                    </div>
                    {test.sampleCollected ? (
                      <div className="text-sm text-gray-500">
                        Sample: {new Date(test.sampleCollected).toLocaleString()}
                      </div>
                    ) : (
                      <div className="text-sm text-red-500">Sample not collected</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2 mb-2">
                      {test.status === 'Completed' && <CheckCircle className="h-4 w-4 text-green-500" />}
                      {test.status === 'In Progress' && <Clock className="h-4 w-4 text-yellow-500" />}
                      {test.status === 'Sample Pending' && <AlertCircle className="h-4 w-4 text-red-500" />}
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        test.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        test.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {test.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-900">
                      Results: {test.results}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex flex-col space-y-1">
                      {test.status === 'Completed' && (
                        <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors">
                          View Results
                        </button>
                      )}
                      {test.status === 'In Progress' && (
                        <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                          Update Status
                        </button>
                      )}
                      {test.status === 'Sample Pending' && (
                        <button className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors">
                          Collect Sample
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions and Test Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">
              <TestTube className="inline h-4 w-4 mr-2" />
              Schedule Sample Collection
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors">
              <CheckCircle className="inline h-4 w-4 mr-2" />
              Review Pending Results
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg bg-yellow-50 text-yellow-700 hover:bg-yellow-100 transition-colors">
              <Clock className="inline h-4 w-4 mr-2" />
              Generate Daily Report
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Categories</h3>
          <div className="space-y-3">
            {['Hematology', 'Chemistry', 'Microbiology', 'Immunology', 'Endocrinology'].map((category, index) => {
              const categoryCount = labTests.filter(test => test.category === category).length;
              return (
                <div key={category} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">{category}</span>
                  <span className="text-sm text-gray-500">{categoryCount} tests</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratory;