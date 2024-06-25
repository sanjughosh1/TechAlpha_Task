import React, { useState } from 'react';
import Modal from 'react-modal';
import Header from './components/Header.jsx';
import Footer from './components/footer.jsx';
import Job from './components/Job.jsx';
import JobSearchForm from './components/jobSearchForme.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import jobs from './mockJobsArray.jsx';

Modal.setAppElement('#root');

const App = () => {
  const [filteredJobs, setFilteredJobs] = useState(null); // Start with null instead of an empty array
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState({ title: '', location: '' });

  const handleSearch = ({ title, location }) => {
    // Filter jobs based on search criteria
    const searchResults = jobs.filter(
      job =>
        job.title.toLowerCase().includes(title.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
    );

    setFilteredJobs(searchResults.length > 0 ? searchResults : []); // Set filteredJobs to an empty array if no results
    setSearchCriteria({ title, location }); // Preserve search criteria in state
  };

  return (
    <div className="min-h-screen flex bg-gray-300 flex-col">
      <Header
        onRegisterClick={() => setIsRegisterModalOpen(true)}
        onLoginClick={() => setIsLoginModalOpen(true)}
      />

      <main className="flex-grow p-4">
        <JobSearchForm onSearch={handleSearch} />
        {filteredJobs === null ? ( // Check if filteredJobs is null
          <p className='rounded-xl bg-gray-600 w-full font-bold text-white p-6'>Perform a search to see jobs.</p>
        ) : filteredJobs.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {filteredJobs.map((job, index) => (
              <Job key={index} title={job.title} location={job.location} description={job.description} />
            ))}
          </div>
        ) : (
          <p>No jobs found.</p>
        )}
      </main>
      <Footer />
      <Modal
        isOpen={isRegisterModalOpen}
        onRequestClose={() => setIsRegisterModalOpen(false)}
        contentLabel="Register"
      >
        <RegistrationForm onClose={() => setIsRegisterModalOpen(false)} />
      </Modal>

      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={() => setIsLoginModalOpen(false)}
        contentLabel="Login"
      >
        <LoginForm onClose={() => setIsLoginModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default App;
