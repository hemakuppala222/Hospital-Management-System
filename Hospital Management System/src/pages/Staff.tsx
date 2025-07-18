import React, { useState } from 'react';
import { Search, Plus, Filter, UserCheck, Clock, Phone, Mail } from 'lucide-react';

const Staff = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');

  const staff = [
    {
      id: 'S001',
      name: 'Dr. Sarah Wilson',
      role: 'Chief Medical Officer',
      department: 'Administration',
      phone: '+1 (555) 111-2222',
      email: 'sarah.wilson@hospital.com',
      status: 'On Duty',
      shift: '08:00 - 18:00',
      experience: '15 years',
      specialization: 'Internal Medicine',
      avatar: 'SW'
    },
    {
      id: 'S002',
      name: 'Dr. Michael Martinez',
      role: 'Senior Physician',
      department: 'General Medicine',
      phone: '+1 (555) 222-3333',
      email: 'michael.martinez@hospital.com',
      status: 'On Duty',
      shift: '06:00 - 14:00',
      experience: '12 years',
      specialization: 'Family Medicine',
      avatar: 'MM'
    },
    {
      id: 'S003',
      name: 'Dr. Emily Thompson',
      role: 'Dermatologist',
      department: 'Dermatology',
      phone: '+1 (555) 333-4444',
      email: 'emily.thompson@hospital.com',
      status: 'Off Duty',
      shift: '14:00 - 22:00',
      experience: '8 years',
      specialization: 'Dermatology',
      avatar: 'ET'
    },
    {
      id: 'S004',
      name: 'Dr. James Anderson',
      role: 'Emergency Physician',
      department: 'Emergency',
      phone: '+1 (555) 444-5555',
      email: 'james.anderson@hospital.com',
      status: 'On Duty',
      shift: '22:00 - 06:00',
      experience: '10 years',
      specialization: 'Emergency Medicine',
      avatar: 'JA'
    },
    {
      id: 'S005',
      name: 'Nurse Lisa Johnson',
      role: 'Head Nurse',
      department: 'Nursing',
      phone: '+1 (555) 555-6666',
      email: 'lisa.johnson@hospital.com',
      status: 'On Duty',
      shift: '08:00 - 20:00',
      experience: '18 years',
      specialization: 'Critical Care',
      avatar: 'LJ'
    },
    {
      id: 'S006',
      name: 'Dr. Robert Chen',
      role: 'Cardiologist',
      department: 'Cardiology',
      phone: '+1 (555) 666-7777',
      email: 'robert.chen@hospital.com',
      status: 'On Leave',
      shift: '09:00 - 17:00',
      experience: '20 years',
      specialization: 'Interventional Cardiology',
      avatar: 'RC'
    }
  ];

  const filteredStaff = staff.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || member.department.toLowerCase() === filterDepartment.toLowerCase();
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Staff Management</h1>
          <p className="text-gray-600 mt-1">Manage hospital staff, schedules, and credentials</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Add Staff Member
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
              placeholder="Search staff by name or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="all">All Departments</option>
                <option value="administration">Administration</option>
                <option value="general medicine">General Medicine</option>
                <option value="dermatology">Dermatology</option>
                <option value="emergency">Emergency</option>
                <option value="nursing">Nursing</option>
                <option value="cardiology">Cardiology</option>
              </select>
              <Filter className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Staff Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">142</div>
          <div className="text-sm text-gray-600">Total Staff</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-green-600">
            {staff.filter(s => s.status === 'On Duty').length}
          </div>
          <div className="text-sm text-gray-600">On Duty</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {staff.filter(s => s.status === 'Off Duty').length}
          </div>
          <div className="text-sm text-gray-600">Off Duty</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-red-600">
            {staff.filter(s => s.status === 'On Leave').length}
          </div>
          <div className="text-sm text-gray-600">On Leave</div>
        </div>
      </div>

      {/* Staff Directory */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Staff Directory</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStaff.map((member) => (
              <div key={member.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                    {member.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-gray-900 truncate">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                    <p className="text-sm text-gray-500">{member.department}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      member.status === 'On Duty' ? 'bg-green-100 text-green-800' :
                      member.status === 'Off Duty' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {member.status}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Shift: {member.shift}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <UserCheck className="h-4 w-4 mr-2" />
                    {member.experience} experience
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Specialization:</strong> {member.specialization}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {member.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    {member.email}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                    View Profile
                  </button>
                  <button className="flex-1 px-3 py-2 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors">
                    Schedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;