import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import AuthorCard from './components/AuthorCard';
import Education from './components/EducationCard';
import Hobbies from './components/Hobbies';
import Work from './components/Work'

function App() {
  return (
    <>
      <Navbar />

      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            <AuthorCard />

            <Work />

            <Education />

            <Hobbies />

          </div>
          {/* <!-- /End replace --> */}
        </main>
      </div>
    </>
  );
}

export default App;
