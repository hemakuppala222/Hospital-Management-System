import React, { useState } from 'react';
import { Calendar, Clock, Plus, Filter, Search } from 'lucide-react';

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [filterStatus, setFilterStatus] = useState('all');

  const appointments = [
    {
      id: 'A001',
      patientName: 'John Smith',
      patientId: 'P001',
      doctorName: 'Dr. Wilson',
      department: 'Cardiology',
      time: '09:00',
      duration: '30 min',
      type: 'Follow-up',
      status: 'Confirmed',
      date: '2024-01-16'
    },
    {
      id: 'A002',
      patientName: 'Sarah Johnson',
      patientId: 'P002',
      doctorName: 'Dr. Martinez',
      department: 'General Medicine',
      time: '10:30',
      duration: '45 min',
      type: 'Consultation',
      status: 'Pending',
      date: '2024-01-16'
    },
    {
      id: 'A003',
      patientName: 'Emily Davis',
      patientId: 'P004',
      doctorName: 'Dr. Thompson',
      department: 'Dermatology',
      time: '14:00',
      duration: '30 min',
      type: 'Check-up',
      status: 'Confirmed',
      date: '2024-01-16'
    },
    {
      id: 'A004',
      patientName: 'Robert Wilson',
      patientId: 'P005',
      doctorName: 'Dr. Anderson',
      department: 'Emergency',
      time: '15:30',
      duration: '60 min',
      type: 'Emergency',
      status: 'In Progress',
      date: '2024-01-16'
    }
  ];

  const filteredAppointments = appointments.filter(appointment => {
    const matchesDate = appointment.date === selectedDate;
    const matchesFilter = filterStatus === 'all' || appointment.status.toLowerCase().replace(' ', '') === filterStatus;
    return matchesDate && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointment Management</h1>
          <p className="text-gray-600 mt-1">Schedule and manage patient appointments</p>
        </div>
        <button className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Schedule Appointment
        </button>
      </div>

      {/* Date and Filter Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="inprogress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <Filter className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Today's Schedule Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">
            {appointments.filter(a => a.date === selectedDate).length}
          </div>
          <div className="text-sm text-gray-600">Total Appointments</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-green-600">
            {appointments.filter(a => a.date === selectedDate && a.status === 'Confirmed').length}
          </div>
          <div className="text-sm text-gray-600">Confirmed</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-yellow-600">
            {appointments.filter(a => a.date === selectedDate && a.status === 'Pending').length}
          </div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-2xl font-bold text-red-600">
            {appointments.filter(a => a.date === selectedDate && a.status === 'In Progress').length}
          </div>
          <div className="text-sm text-gray-600">In Progress</div>
        </div>
      </div>

      {/* Appointments Timeline */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Schedule for {new Date(selectedDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </h3>
        </div>
        <div className="p-6">
          {filteredAppointments.length === 0 ? (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No appointments scheduled for this date</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAppointments
                .sort((a, b) => a.time.localeCompare(b.time))
                .map((appointment) => (
                <div key={appointment.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <div className="text-center">
                        <div className="text-sm font-semibold text-gray-900">{appointment.time}</div>
                        <div className="text-xs text-gray-500">{appointment.duration}</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900">{appointment.patientName}</h4>
                          <p className="text-sm text-gray-500">ID: {appointment.patientId}</p>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-700">{appointment.doctorName}</p>
                          <p className="text-sm text-gray-500">{appointment.department}</p>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700">{appointment.type}</p>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                            appointment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            appointment.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {appointment.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                      View
                    </button>
                    <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointments;