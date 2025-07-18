import React, { useState } from 'react';
import { Search, FileText, Download, Eye, Plus } from 'lucide-react';

const Medical = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState('all');

  const medicalRecords = [
    {
      id: 'MR001',
      patientId: 'P001',
      patientName: 'John Smith',
      recordType: 'Consultation',
      date: '2024-01-15',
      doctor: 'Dr. Wilson',
      department: 'Cardiology',
      diagnosis: 'Hypertension',
      status: 'Completed',
      attachments: 3,
      summary: 'Patient showing improvement with current medication regimen'
    },
    {
      id: 'MR002',
      patientId: 'P002',
      patientName: 'Sarah Johnson',
      recordType: 'Lab Report',
      date: '2024-01-14',
      doctor: 'Dr. Martinez',
      department: 'Laboratory',
      diagnosis: 'Complete Blood Count',
      status: 'Reviewed',
      attachments: 2,
      summary: 'All values within normal range'
    },
    {
      id: 'MR003',
      patientId: 'P003',
      patientName: 'Michael Brown',
      recordType: 'Surgery Report',
      date: '2024-01-10',
      doctor: 'Dr. Anderson',
      department: 'Surgery',
      diagnosis: 'Appendectomy',
      status: 'Completed',
      attachments: 5,
      summary: 'Successful laparoscopic appendectomy, patient recovering well'
    },
    {
      id: 'MR004',
      patientId: 'P004',
      patientName: 'Emily Davis',
      recordType: 'Radiology',
      date: '2024-01-16',
      doctor: 'Dr. Thompson',
      department: 'Radiology',
      diagnosis: 'Chest X-Ray',
      status: 'Pending Review',
      attachments: 1,
      summary: 'X-ray images awaiting radiologist review'
    },
    {
      id: 'MR005',
      patientId: 'P005',
      patientName: 'Robert Wilson',
      recordType: 'Emergency',
      date: '2024-01-16',
      doctor: 'Dr. Anderson',
      department: 'Emergency',
      diagnosis: 'Acute Chest Pain',
      status: 'Active',
      attachments: 4,
      summary: 'Patient under observation, ECG and cardiac enzymes ordered'
    }
  ];

  const filteredRecords = medicalRecords.filter(record => {
    const matchesSearch = record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.recordType.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPatient = selectedPatient === 'all' || record.patientId === selectedPatient;
    return matchesSearch && matchesPatient;
  });

  const uniquePatients = [...new Set(medicalRecords.map(record => ({ id: record.patientId, name: record.patientName })))];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Medical Records</h1>
          <p className="text-gray-600 mt-1">Access and manage patient medical records and documentation</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Add New Record
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
              placeholder="Search by patient name, diagnosis, or record type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="relative">
            <select
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="all">All Patients</option>
              {uniquePatients.map((patient) => (
                <option key={patient.id} value={patient.id}>{patient.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Records Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{medicalRecords.length}</div>
          <div className="text-sm text-gray-600">Total Records</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-green-600">
            {medicalRecords.filter(r => r.status === 'Completed').length}
          </div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {medicalRecords.filter(r => r.status === 'Pending Review').length}
          </div>
          <div className="text-sm text-gray-600">Pending Review</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-red-600">
            {medicalRecords.filter(r => r.status === 'Active').length}
          </div>
          <div className="text-sm text-gray-600">Active</div>
        </div>
      </div>

      {/* Medical Records List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Medical Records</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient & Record
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medical Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Doctor & Department
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
              {filteredRecords.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{record.patientName}</div>
                      <div className="text-sm text-gray-500">ID: {record.patientId}</div>
                      <div className="text-sm text-gray-500">{record.recordType} - {record.id}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs">
                      <div className="text-sm font-medium text-gray-900">{record.diagnosis}</div>
                      <div className="text-sm text-gray-500 truncate">{record.summary}</div>
                      <div className="text-xs text-gray-400 mt-1">{record.attachments} attachment(s)</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{record.doctor}</div>
                    <div className="text-sm text-gray-500">{record.department}</div>
                    <div className="text-xs text-gray-400">{new Date(record.date).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      record.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      record.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                      record.status === 'Pending Review' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-blue-600 hover:text-blue-900 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-green-600 hover:text-green-900 transition-colors">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-gray-600 hover:text-gray-900 transition-colors">
                        <FileText className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Medical;