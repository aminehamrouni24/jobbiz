import { useEffect, useState } from "react";
import AboutForm from "./AboutForm";
import SocialProfileForm from "./SocialProfileForm";
import WorkExperienceCard from "./WorkExperienceCard";
import WorkExperienceForm from "./WorkExperienceForm";
import EducationCard from "./EducationCard";
import EducationForm from "./EducationForm";
import { useSelector } from "react-redux";
import SkillsSearch from "../Common/SkillsSearch";

function EditProfile() {
  const [showAddWorkExperience, setShowAddWorkExperience] = useState(false);
  const [showAddEducation, setShowAddEducation] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(new Map());

  const { userData } = useSelector((store) => store.auth);
  const userEducation = userData?.userProfile?.education;
  const userWorkExperience = userData?.userProfile?.workExperience;

  const [workExperienceFormData, setWorkExperienceFormData] = useState(null);
  const [educationFormData, setEducationFormData] = useState(null);

  useEffect(() => {
    // Check if userData and userProfile exist
    if (userData && userData.userProfile && userData.userProfile.skills) {
      // Initialize selectedSkills with userData skills
      const initialSkills = new Map(
        userData.userProfile.skills.map((skill) => [skill, true])
      );
      setSelectedSkills(initialSkills);
    }
  }, [userData]); // Trigger effect when userData changes

  if (!userData) {
    return (
      <div className="h-screen flex justify-center items-center text-xl font-semibold">
        Loading...
      </div>
    );
  }
  return (
    <div className="px-4">
      <div className="flex flex-col md:flex-row gap-16 my-5 border-b pb-10">
        <div className="w-full md:w-[30%] flex flex-col gap-2.5">
          <p className="font-medium">About</p>
          <p className="text-gray-400 text-sm">
            Parlez-nous de vous pour que les entreprises sachent qui vous êtes.
          </p>
        </div>
        <div className="w-full md:w-[70%] ">
          <AboutForm userData={userData} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 my-5 border-b pb-10">
        <div className="w-full md:w-[30%] flex flex-col gap-2.5">
          <p className="font-medium">Profiles Sociaux</p>
          <p className="text-gray-400 text-sm">
            Où peut-on vous trouver en ligne ?
          </p>
        </div>
        <div className="w-full md:w-[70%] ">
          <SocialProfileForm userData={userData} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 my-5 border-b pb-10">
        <div className="w-full md:w-[30%] flex flex-col gap-2.5">
          <p className="font-medium"> Votre expérience professionnelle</p>
          <p className="text-gray-400 text-sm">
            Quels sont les autres postes que vous avez occupés ?
          </p>
        </div>
        <div className="w-full md:w-[70%] flex flex-col gap-3.5">
          <div className="flex flex-col gap-3">
            {userWorkExperience.length > 0 &&
              userWorkExperience.map((exp, index) => (
                <WorkExperienceCard
                  key={index}
                  exp={exp}
                  setShowAddWorkExperience={setShowAddWorkExperience}
                  setWorkExperienceFormData={setWorkExperienceFormData}
                />
              ))}
          </div>
          {showAddWorkExperience ? (
            <WorkExperienceForm
              setShowAddWorkExperience={setShowAddWorkExperience}
              data={workExperienceFormData}
              setWorkExperienceFormData={setWorkExperienceFormData}
            />
          ) : (
            <div
              className="text-sm text-green-600 flex gap-1 items-center hover:cursor-pointer"
              onClick={() => setShowAddWorkExperience(true)}
            >
              <i className="fa-solid fa-plus"></i>
              <span>Ajouter une expérience professionnelle</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 my-5 border-b pb-10">
        <div className="w-full md:w-[30%] flex flex-col gap-2.5">
          <p className="font-medium">Education</p>
          <p className="text-gray-400 text-sm">
            Quelles sont les écoles dans lesquelles vous avez étudié ?
          </p>
        </div>
        <div className="w-full md:w-[70%] flex flex-col gap-3.5">
          <div className="flex flex-col gap-3">
            {userEducation.length > 0 &&
              userEducation.map((edu, index) => (
                <EducationCard
                  key={index}
                  edu={edu}
                  setShowAddEducation={setShowAddEducation}
                  setEducationFormData={setEducationFormData}
                />
              ))}
          </div>

          {showAddEducation ? (
            <EducationForm
              setShowAddEducation={setShowAddEducation}
              educationFormData={educationFormData}
              setEducationFormData={setEducationFormData}
            />
          ) : (
            <div
              className="text-sm text-green-600 flex gap-1 items-center hover:cursor-pointer"
              onClick={() => setShowAddEducation(true)}
            >
              <i className="fa-solid fa-plus"></i>
              <span>Ajouter 'éducation</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-16 my-5 border-b pb-10">
        <div className="w-full md:w-[30%] flex flex-col gap-2.5">
          <p className="font-medium">Vos compétences</p>
          <p className="text-gray-400 text-sm">
            Cela aidera les startups à se concentrer sur leurs points forts.
          </p>
        </div>
        <div className="w-full md:w-[70%] flex flex-col gap-3.5">
          <SkillsSearch
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
            profile={true}
          />
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
