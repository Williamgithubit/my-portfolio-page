import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar';
import AuthorCard from './components/AuthorCard';
import Education from './components/EducationCard';

function App() {
  return (
    <>
     <Navbar />
     
    

      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            <AuthorCard />

            {/* <!-- Work --> */}
            <div id="work" class="bg-[#B2B2B2] h-auto my-6 py-8 rounded-lg border-4">
              <div class="flex justify-center">
                <h3 class="border-4 w-20  border-dashed px-4 py-4">Work</h3>
              </div>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Kwagei Group</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                  pavilions, award-winning fireworks and seasonal special events.</p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">EasyTech</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                  pavilions, award-winning fireworks and seasonal special events.</p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Epcot Center</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                  pavilions, award-winning fireworks and seasonal special events.</p>
              </details>

            </div>
            <Education />

            {/* <!-- Hobbies --> */}
            <div id="hobbie" class="bg-[#B2B2B2] h-50 my-6 py-8 rounded-lg border-4"></div>
          </div>
          {/* <!-- /End replace --> */}
        </main>
      </div>
    </>
  );
}

export default App;
