import React, { useState } from 'react';
import { Search, Plus, Filter, Bed, User, Clock, MapPin } from 'lucide-react';

const Wards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterWard, setFilterWard] = useState('all');

  const beds = [
    {
      id: 'B001',
      roomNumber: '101',
      ward: 'General Medicine',
      bedType: 'Standard',
      status: 'Occupied',
      patientId: 'P001',
      patientName: 'John Smith',
      admissionDate: '2024-01-10',
      assignedNurse: 'Nurse Johnson',
      condition: 'Stable',
      notes: 'Post-surgery recovery'
    },
    {
      id: 'B002',
      roomNumber: '102',
      ward: 'General Medicine',
      bedType: 'Standard',
      status: 'Available',
      patientId: null,
      patientName: null,
      admissionDate: null,
      assignedNurse: null,
      condition: null,
      notes: 'Ready for admission'
    },
    {
      id: 'B003',
      roomNumber: '201',
      ward: 'ICU',
      bedType: 'ICU',
      status: 'Occupied',
      patientId: 'P005',
      patientName: 'Robert Wilson',
      admissionDate: '2024-01-16',
      assignedNurse: 'Nurse Davis',
      condition: 'Critical',
      notes: 'Cardiac monitoring required'
    },
    {
      id: 'B004',
      roomNumber: '202',
      ward: 'ICU',
      bedType: 'ICU',
      status: 'Maintenance',
      patientId: null,
      patientName: null,
      admissionDate: null,
      assignedNurse: null,
      condition: null,
      notes: 'Equipment maintenance scheduled'
    },
    {
      id: 'B005',
      roomNumber: '301',
      ward: 'Pediatrics',
      bedType: 'Pediatric',
      status: 'Occupied',
      patientId: 'P006',
      patientName: 'Emma Thompson',
      admissionDate: '2024-01-14',
      assignedNurse: 'Nurse Wilson',
      condition: 'Stable',
      notes: 'Recovering from appendectomy'
    },
    {
      id: 'B006',
      roomNumber: '302',
      ward: 'Pediatrics',
      bedType: 'Pediatric',
      status: 'Available',
      patientId: null,
      patientName: null,
      admissionDate: null,
      assignedNurse: null,
      condition: null,
      notes: 'Cleaned and ready'
    },
    {
      id: 'B007',
      roomNumber: '401',
      ward: 'Maternity',
      bedType: 'Maternity',
      status: 'Occupied',
      patientId: 'P007',
      patientName: 'Sarah Martinez',
      admissionDate: '2024-01-15',
      assignedNurse: 'Nurse Brown',
      condition: 'Stable',
      notes: 'Post-delivery care'
    },
    {
      id: 'B008',
      roomNumber: '402',
      ward: 'Maternity',
      bedType: 'Maternity',
      status: 'Reserved',
      patientId: 'P008',
      patientName: 'Lisa Anderson',
      admissionDate: '2024-01-17',
      assignedNurse: 'Nurse Brown',
      condition: 'Scheduled',
      notes: 'Scheduled for delivery'
    }
  ];

  const filteredBeds = beds.filter(bed => {
    const matchesSearch = bed.roomNumber.includes(searchTerm) ||
                         (bed.patientName && bed.patientName.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesWard = filterWard === 'all' || bed.ward.toLowerCase() === filterWard.toLowerCase();
    return matchesSearch && matchesWard;
  });

  const totalBeds = beds.length;
  const occupiedBeds = beds.filter(bed => bed.status === 'Occupied').length;
  const availableBeds = beds.filter(bed => bed.status === 'Available').length;
  const occupancyRate = Math.round((occupiedBeds / totalBeds) * 100);

  const wardStats = [
    { name: 'General Medicine', total: 20, occupied: 15, available: 4, maintenance: 1 },
    { name: 'ICU', total: 12, occupied: 8, available: 2, maintenance: 2 },
    { name: 'Pediatrics', total: 15, occupied: 10, available: 5, maintenance: 0 },
    { name: 'Maternity', total: 10, occupied: 6, available: 3, maintenance: 1 },
    { name: 'Surgery', total: 8, occupied: 5, available: 2, maintenance: 1 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Ward & Bed Management</h1>
          <p className="text-gray-600 mt-1">Monitor bed occupancy, patient assignments, and ward status</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Admit Patient
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
              placeholder="Search by room number or patient name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="relative">
            <select
              value={filterWard}
              onChange={(e) => setFilterWard(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="all">All Wards</option>
              <option value="general medicine">General Medicine</option>
              <option value="icu">ICU</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="maternity">Maternity</option>
              <option value="surgery">Surgery</option>
            </select>
            <Filter className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Occupancy Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{totalBeds}</div>
          <div className="text-sm text-gray-600">Total Beds</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-red-600">{occupiedBeds}</div>
          <div className="text-sm text-gray-600">Occupied</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-green-600">{availableBeds}</div>
          <div className="text-sm text-gray-600">Available</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-purple-600">{occupancyRate}%</div>
          <div className="text-sm text-gray-600">Occupancy Rate</div>
        </div>
      </div>

      {/* Ward Statistics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Ward Overview</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wardStats.map((ward) => (
              <div key={ward.name} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">{ward.name}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Total Beds:</span>
                    <span className="font-medium">{ward.total}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Occupied:</span>
                    <span className="font-medium text-red-600">{ward.occupied}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Available:</span>
                    <span className="font-medium text-green-600">{ward.available}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Maintenance:</span>
                    <span className="font-medium text-yellow-600">{ward.maintenance}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(ward.occupied / ward.total) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    {Math.round((ward.occupied / ward.total) * 100)}% occupied
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bed Status Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Bed Status</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Room & Bed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient Information
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Care Details
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
              {filteredBeds.map((bed) => (
                <tr key={bed.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Bed className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Room {bed.roomNumber}</div>
                        <div className="text-sm text-gray-500">{bed.ward}</div>
                        <div className="text-sm text-gray-500">{bed.bedType}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {bed.patientName ? (
                      <div>
                        <div className="text-sm font-medium text-gray-900">{bed.patientName}</div>
                        <div className="text-sm text-gray-500">ID: {bed.patientId}</div>
                        <div className="text-sm text-gray-500">
                          Admitted: {new Date(bed.admissionDate!).toLocaleDateString()}
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500">No patient assigned</div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {bed.assignedNurse ? (
                      <div>
                        <div className="text-sm text-gray-900">{bed.assignedNurse}</div>
                        <div className="text-sm text-gray-500">Condition: {bed.condition}</div>
                        <div className="text-sm text-gray-500 max-w-xs truncate">{bed.notes}</div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500">{bed.notes}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      bed.status === 'Occupied' ? 'bg-red-100 text-red-800' :
                      bed.status === 'Available' ? 'bg-green-100 text-green-800' :
                      bed.status === 'Reserved' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {bed.status}
                    </span>
                    {bed.condition && (
                      <div className={`text-xs mt-1 ${
                        bed.condition === 'Critical' ? 'text-red-600' :
                        bed.condition === 'Stable' ? 'text-green-600' :
                        'text-blue-600'
                      }`}>
                        {bed.condition}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex flex-col space-y-1">
                      {bed.status === 'Available' && (
                        <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                          Assign Patient
                        </button>
                      )}
                      {bed.status === 'Occupied' && (
                        <>
                          <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors">
                            Discharge
                          </button>
                          <button className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 transition-colors">
                            Transfer
                          </button>
                        </>
                      )}
                      {bed.status === 'Maintenance' && (
                        <button className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors">
                          Mark Ready
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
    </div>
  );
};

export default Wards;