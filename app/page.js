'use client';
import { useState } from 'react';

export default function Home() {
  const [gender, setGender] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [medicalEducation, setMedicalEducation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      gender,
      ageRange,
      ethnicity,
      medicalEducation,
    };
    console.log('Form data:', formData);
    alert('Form submitted. See console for values.');
  };

  return (
    <main className="min-h-screen bg-[#EAF0F6] flex items-center justify-center p-4">
      <div className="w-[390px] h-[844px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-300 flex flex-col">
        <div className="flex-1 overflow-y-auto p-6">
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold text-gray-800 mb-1">
              Welcome to your Care Journey
            </h1>
            <p className="text-sm text-gray-600">
              I'm here to support you every step of the way. Please share some information to help me provide the best care possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Which gender do you identify as?
              </label>
              <select
                className="w-full p-3 text-sm rounded-xl border border-gray-300 bg-white shadow-sm"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-binary</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What is your age range?
              </label>
              <select
                className="w-full p-3 text-sm rounded-xl border border-gray-300 bg-white shadow-sm"
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value)}
                required
              >
                <option value="">Select...</option>
                <option>Under 18</option>
                <option>18–24</option>
                <option>25–34</option>
                <option>35–44</option>
                <option>45–54</option>
                <option>55–64</option>
                <option>65+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What is your race/ethnicity?
              </label>
              <select
                className="w-full p-3 text-sm rounded-xl border border-gray-300 bg-white shadow-sm"
                value={ethnicity}
                onChange={(e) => setEthnicity(e.target.value)}
                required
              >
                <option value="">Select...</option>
                <option>White</option>
                <option>Black or African American</option>
                <option>Asian</option>
                <option>Hispanic or Latino</option>
                <option>Native American</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Do you have formal medical education?
              </label>
              <div className="flex gap-4 mt-1">
                <button
                  type="button"
                  onClick={() => setMedicalEducation(true)}
                  className={`w-full py-2 rounded-xl border text-sm ${
  medicalEducation === true
    ? 'bg-blue-600 text-white border-blue-600'
    : 'bg-white text-gray-700 border-gray-300'
}`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setMedicalEducation(false)}
                  className={`w-full py-2 rounded-xl border text-sm ${
  medicalEducation === true
    ? 'bg-blue-600 text-white border-blue-600'
    : 'bg-white text-gray-700 border-gray-300'
}`}
                >
                  No
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Your information is protected and will only be used to improve your care experience.
            </p>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 mt-2 rounded-xl hover:bg-blue-700 transition text-sm"
            >
              Continue to Next Step
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              Need assistance? Please ask any staff member for help.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}