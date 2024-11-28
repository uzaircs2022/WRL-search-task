import React, { useState } from 'react';
import './Main.css';
import useFetchRecords from '../hooks/useFetchRecords';
import Search from '../components/Search';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { record, loading, error } = useFetchRecords(searchTerm);

  return (
    <div className="app-container">
      <header>
        <h1>Search Hamdb</h1>
      </header>
      
      <Search onSearch={(term) => setSearchTerm(term)} />

      {loading && <p>Loading...</p>}

      {record ? (
        <div className="card">
          <div className="record-container">
            <div className="record">
              <h5 className="label">Name</h5>
              <h5 className="record-data">{record.full_name}</h5>
            </div>
            <div className="record">
              <h5 className="label">Callsign</h5>
              <h5 className="record-data">{record.callsign}</h5>
            </div>
            <div className="record">
              <h5 className="label">Class</h5>
              <h5 className="record-data">{record.status}</h5>
            </div>
            <div className="record">
              <h5 className="label">Status</h5>
              <h5 className="record-data">
                {record.status === 'A' ? 'Active' : 'Cancelled'}
              </h5>
            </div>
            <div className="record">
              <h5 className="label">Address</h5>
              <h5 className="record-data">{`${record.address1}, ${record.city}, ${record.state} ${record.zip}, United States`}</h5>
            </div>
          </div>
        </div>
      ) : (
        !loading && !error && <p>No record found</p>
      )}
    </div>
  );
};

export default Main;




