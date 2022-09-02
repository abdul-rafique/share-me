import React, { useState } from "react";
import {
  IoBriefcaseOutline,
  // IoSchoolOutline,
  IoCreateOutline,
  // IoHomeOutline,
  // IoLocationOutline,
} from "react-icons/io5";

function UserWorkInfo({ handleWorkInfoForm }) {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="flex items-center gap-3 text-black/80">
        <IoBriefcaseOutline size={28} />
        <p>
          <span className="font-semibold">Computer Instructor </span>
          at
          <span className="font-semibold"> SOS TTI</span>
        </p>
      </div>
      <button
        className="p-2 bg-accent/10 rounded-full"
        onClick={handleWorkInfoForm}
      >
        <IoCreateOutline size={16} />
      </button>
    </div>
  );
}

function UserWorkInfoForm({ handleWorkInfoForm }) {
  return (
    <div className="">
      <form action="" className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="#company" className="text-sm ml-1">
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            className="rounded-lg focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="#position" className="text-sm ml-1">
            Position
          </label>
          <input
            type="text"
            name="position"
            id="position"
            className="rounded-lg focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="#city" className="text-sm ml-1">
            City/Town
          </label>
          <input
            type="text"
            name="city"
            id="city"
            className="rounded-lg focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="#description" className="text-sm ml-1">
            Description
          </label>
          <textarea
            rows={3}
            name="description"
            id="description"
            className="rounded-lg focus:ring-primary focus:border-primary"
          ></textarea>
        </div>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={handleWorkInfoForm}
            className="px-3 py-1.5 bg-gray/20 font-semibold rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-1.5 bg-primary text-white font-semibold rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

// function UserEducationInfo() {
//   return (
//     <div className="flex justify-between items-center gap-5">
//       <div className="flex items-center gap-3">
//         <IoSchoolOutline size={28} />
//         <p>
//           <span className="font-semibold">Computer Instructor </span>
//           at
//           <span className="font-semibold"> SOS TTI</span>
//         </p>
//       </div>
//       <button className="p-2 bg-gray/30 rounded-full">
//         <IoCreateOutline size={16} />
//       </button>
//     </div>
//   );
// }

// function UserHomeInfo() {
//   return (
//     <div className="flex justify-between items-center gap-5">
//       <div className="flex items-center gap-3">
//         <IoHomeOutline size={28} />
//         <p>
//           <span className="font-semibold">Computer Instructor </span>
//           at
//           <span className="font-semibold"> SOS TTI</span>
//         </p>
//       </div>
//       <button className="p-2 bg-gray/30 rounded-full">
//         <IoCreateOutline size={16} />
//       </button>
//     </div>
//   );
// }

// function UserLocationInfo() {
//   return (
//     <div className="flex justify-between items-center gap-5">
//       <div className="flex items-center gap-3">
//         <IoLocationOutline size={28} />
//         <p>
//           <span className="font-semibold">Computer Instructor </span>
//           at
//           <span className="font-semibold"> SOS TTI</span>
//         </p>
//       </div>
//       <button className="p-2 bg-gray/30 rounded-full">
//         <IoCreateOutline size={16} />
//       </button>
//     </div>
//   );
// }

function About() {
  const [showWorkInfoForm, setShowWorkInfoForm] = useState(false);
  // const [showEduInfoForm, setShowEduInfoForm] = useState(false);
  // const [showHomeTownInfoForm, setShowHomeTownInfoForm] = useState(false);
  // const [showLocationInfoForm, setShowLocationInfoForm] = useState(false);

  const handleWorkInfoForm = () => {
    if (showWorkInfoForm) {
      setShowWorkInfoForm(false);
    } else {
      setShowWorkInfoForm(true);
    }
  };

  // const handleEduInfoForm = () => {
  //   if (showEduInfoForm) {
  //     setShowEduInfoForm(false);
  //   } else {
  //     setShowEduInfoForm(true);
  //   }
  // };

  // const handleHomeTownInfoForm = () => {
  //   if (showHomeTownInfoForm) {
  //     setShowHomeTownInfoForm(false);
  //   } else {
  //     setShowHomeTownInfoForm(true);
  //   }
  // };

  // const handleLocationInfoForm = () => {
  //   if (showHomeTownInfoForm) {
  //     setShowLocationInfoForm(false);
  //   } else {
  //     setShowLocationInfoForm(true);
  //   }
  // };
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-lg bg-white shadow shadow-gray-light overflow-hidden px-5 py-3">
        <h5 className="text-lg font-semibold text-black/80">About</h5>
      </div>
      <div className="flex flex-col gap-5 rounded-lg bg-white shadow overflow-hidden p-5">
        {showWorkInfoForm ? (
          <UserWorkInfoForm handleWorkInfoForm={handleWorkInfoForm} />
        ) : (
          <UserWorkInfo handleWorkInfoForm={handleWorkInfoForm} />
        )}
        {/* <UserEducationInfo />
        <UserHomeInfo />
        <UserLocationInfo /> */}
        {/* <form action="">
          <label htmlFor="">Full Name</label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              name=""
              id=""
              placeholder="Abdul Rafique"
              className="block mt-1 rounded-lg border-0 w-full"
            />
            <button className="p-2 bg-gray/30 rounded-full">
              <IoPencilOutline size={16} />
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}

export default About;
