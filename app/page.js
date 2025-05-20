"use client";
import { useState } from "react";

export default function Home() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [race, setRace] = useState("");
  const [education, setEducation] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!gender) newErrors.gender = "Please select a gender";
    if (!age) newErrors.age = "Please select an age range";
    if (!race) newErrors.race = "Please select a race/ethnicity";
    if (!education) newErrors.education = "Please select an option";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted!");
      // You can navigate or do something else here
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#f4f4f4]">
      <div className="w-[375px] max-h-[667px] rounded-2xl shadow-lg overflow-y-auto bg-[#f4f4f4] px-4 py-3">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <img src="/ozz-logo.png" alt="Ozz Health Logo" className="w-14 h-auto" />
        </div>

        {/* Title and Subtitle */}
        <div className="text-center text-xs text-[#2b3d2f] mb-4 px-2">
          <p className="font-semibold mb-1 text-sm">Welcome to your Care Journey</p>
          <p>
            We're here to support you every step of the way. Please share some
            information to help us provide the best care possible.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="text-xs text-[#9fb4a2] space-y-4">
          {/* Gender Dropdown */}
          <div>
            <label className="block mb-1 font-medium">Which gender do you identify as?</label>
            <select
              defaultValue=""
              onChange={(e) => setGender(e.target.value)}
              className="w-full border border-[#9fb4a2] rounded-md px-2 py-1.5 bg-white text-[#2b3d2f] focus:outline-none"
            >
              <option value="" disabled>Please select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Non-binary</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>
            {errors.gender && <p className="text-red-500 text-[10px] mt-1">{errors.gender}</p>}
          </div>

          {/* Age Dropdown */}
          <div>
            <label className="block mb-1 font-medium">What is your age range?</label>
            <select
              defaultValue=""
              onChange={(e) => setAge(e.target.value)}
              className="w-full border border-[#9fb4a2] rounded-md px-2 py-1.5 bg-white text-[#2b3d2f] focus:outline-none"
            >
              <option value="" disabled>Please select</option>
              <option>Under 18</option>
              <option>18–24</option>
              <option>25–34</option>
              <option>35–44</option>
              <option>45–54</option>
              <option>55–64</option>
              <option>65 or older</option>
            </select>
            {errors.age && <p className="text-red-500 text-[10px] mt-1">{errors.age}</p>}
          </div>

          {/* Race Dropdown */}
          <div>
            <label className="block mb-1 font-medium">What is your race/ethnicity?</label>
            <select
              defaultValue=""
              onChange={(e) => setRace(e.target.value)}
              className="w-full border border-[#9fb4a2] rounded-md px-2 py-1.5 bg-white text-[#2b3d2f] focus:outline-none"
            >
              <option value="" disabled>Please select</option>
              <option>White</option>
              <option>Black or African American</option>
              <option>Asian</option>
              <option>Hispanic or Latino</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>
            {errors.race && <p className="text-red-500 text-[10px] mt-1">{errors.race}</p>}
          </div>

          {/* Medical Education */}
          <div>
            <label className="block mb-1 font-medium">Do you have formal medical education?</label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setEducation("Yes")}
                className={`flex-1 border rounded-md py-1.5 font-semibold text-xs ${
                  education === "Yes"
                    ? "bg-[#e0e5e1] border-[#2b3d2f] text-[#2b3d2f]"
                    : "border-[#9fb4a2] text-[#2b3d2f] hover:bg-[#e0e5e1]"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setEducation("No")}
                className={`flex-1 border rounded-md py-1.5 font-semibold text-xs ${
                  education === "No"
                    ? "bg-[#e0e5e1] border-[#2b3d2f] text-[#2b3d2f]"
                    : "border-[#9fb4a2] text-[#2b3d2f] hover:bg-[#e0e5e1]"
                }`}
              >
                No
              </button>
            </div>
            {errors.education && <p className="text-red-500 text-[10px] mt-1">{errors.education}</p>}
          </div>

          {/* Footer */}
          <div className="pt-4 space-y-2 text-center text-[10px] text-[#2b3d2f]">
            <p className="leading-tight px-2">
              Your information is protected and will only be used to improve your care experience.
            </p>
            <button
              type="submit"
              className="w-full py-1.5 rounded-md bg-[#9fb4a2] text-white font-semibold hover:bg-[#88a391] text-xs"
            >
              Continue to Next Step
            </button>
            <p>Need assistance? Please ask any staff member for help.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
