import React, { useEffect, useState } from "react";
import CheckBoxLabel from "../Common/FormComponents/CheckBoxLabel";
import SelectInput from "../Common/FormComponents/SelectInput";
import InputField from "../Common/FormComponents/InputField";
import Checkbox from "../Common/FormComponents/Checkbox";
import CompanySearch from "../Common/CompanySearch";
import { userService } from "../../services/userService";
import { useNavigate } from "react-router-dom";

function UserOnboaring() {
  const initialFormData = {
    location: "",
    primaryRole: "",
    yearsOfExperience: "",
    companyName: "",
    companyLogo: "",
    companyDomain: "",
    title: "",
    notEmployed: false,
    linkedin: "",
    website: "",
  };

  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(true);
  const [formData, setFormData] = useState(initialFormData);

  const handleDropdown = (item) => {
    handleCompanyInput(item);
    setShowDropdown(!showDropdown);
  };

  const handleInputChange = (e) => {
    const { id, type } = e.target;

    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: !prevFormData[id],
      }));
    } else {
      const { value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
  };

  const handleCompanyInput = (company) => {
    const { name, logo, domain } = company;

    setFormData({
      ...formData,
      companyName: name,
      companyLogo:
        logo ||
        "https://photos.wellfound.com/startups/i/267839-22e9550a168c9834c67a3e55e2577688-medium_jpg.jpg?buster=1677467708",
      companyDomain: domain,
    });
  };

  const handleSubmission = async (e) => {
    e.preventDefault();

    const data = {
      address: { country: formData.location },
      location: formData.location,
      primaryRole: formData.primaryRole,
      socialProfiles: {
        linkedin: formData.linkedin || "",
        github: "",
        twitter: "",
        portfolioWebsite: formData.website || "",
      },
      workExperience: [
        {
          jobTitle: formData.title || "",
          company: {
            name: formData.companyName || "",
            logoUrl: formData.companyLogo || "",
            domain: formData.companyDomain || "",
          },
        },
      ],
      yearsOfExperience: formData.yearsOfExperience,
      doneOnboarding: true,
    };
    try {
      const res = await userService.updateUserProfile(data);
      console.log(res);
      if (res.status === 200) {
        navigate("/jobs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (formData.notEmployed === true) {
      setFormData({
        ...formData,
        companyName: "",
        companyLogo: "",
        companyDomain: "",
        title: "",
      });
    }
  }, [formData.notEmployed]);

  const locationOptions = [
    { value: "default", label: "Select Country" },
    { value: "tunis", label: "Tunis" },
    { value: "ariana", label: "Ariana" },
    { value: "ben_arous", label: "Ben Arous" },
    { value: "manouba", label: "Manouba" },
    { value: "nabeul", label: "Nabeul" },
    { value: "zaghouan", label: "Zaghouan" },
    { value: "bizerte", label: "Bizerte" },
    { value: "beja", label: "Béja" },
    { value: "jendouba", label: "Jendouba" },
    { value: "kef", label: "Le Kef" },
    { value: "siliana", label: "Siliana" },
    { value: "kairouan", label: "Kairouan" },
    { value: "kasserine", label: "Kasserine" },
    { value: "sidi_bouzid", label: "Sidi Bouzid" },
    { value: "sousse", label: "Sousse" },
    { value: "monastir", label: "Monastir" },
    { value: "mahdia", label: "Mahdia" },
    { value: "sfax", label: "Sfax" },
    { value: "gabes", label: "Gabès" },
    { value: "medenine", label: "Medenine" },
    { value: "tataouine", label: "Tataouine" },
    { value: "gafsa", label: "Gafsa" },
    { value: "tozeur", label: "Tozeur" },
    { value: "kebili", label: "Kebili" },
  ];
  const roleOptions = [
    {
      label: "Technical Roles",
      options: [
        { value: "software_engineer", label: "Software Engineer" },
        { value: "data_scientist", label: "Data Scientist" },
        { value: "system_admin", label: "System Administrator" },
      ],
    },
    {
      label: "Management Roles",
      options: [
        { value: "project_manager", label: "Project Manager" },
        { value: "product_manager", label: "Product Manager" },
        { value: "team_lead", label: "Team Lead" },
      ],
    },
    {
      label: "Design Roles",
      options: [
        { value: "ui_designer", label: "UI Designer" },
        { value: "ux_designer", label: "UX Designer" },
        { value: "graphic_designer", label: "Graphic Designer" },
      ],
    },
  ];

  const experienceOptions = [
    { value: "default", label: "Select years of experience" },
    { value: "0", label: "Less than 1 year" },
    { value: "1", label: "1 year" },
    { value: "2", label: "2 years" },
    { value: "3", label: "3 years" },
    { value: "4", label: "4 years" },
    { value: "5", label: "5 years" },
    { value: "6", label: "More than 5 years" },
  ];
  return (
    <div className="mt-[3.8rem]  bg-[#ebeff5] flex flex-col items-center ">
      <div>
        <div className="py-10 flex flex-col justify-center items-center gap-5">
          <h2 className="font-semibold text-5xl text-gray-950 text-center">
            Créez votre Profile
          </h2>
          <p className="text-lg text-gray-950 text-center">
            Postulez en privé auprès de milliers d'entreprises technologiques et
            de startups avec un seul profil .
          </p>
        </div>
      </div>
      <form className="w-11/12 md:w-5/6 lg:w-4/6" onSubmit={handleSubmission}>
        <div className="bg-white  rounded-xl p-6 md:p-10 flex flex-col gap-6 mb-10">
          <div>
            <p className="font-medium">
              <span className="text-green-500 mr-1">*</span>Où êtes-vous basé ?
            </p>
            <div className="pl-3 flex flex-col gap-3">
              <p className="text-xs mt-1 text-gray-400 hidden">
                Conseil : Vous pouvez choisir une ville, un état ou un pays.
              </p>
              <CheckBoxLabel text={formData.location} />
              <SelectInput
                id="location"
                value={formData.location}
                onChange={handleInputChange}
                options={locationOptions}
                className={"w-full md:w-1/2"}
              />
            </div>
          </div>
          <div>
            <p className="font-medium">
              <span className="text-green-500 mr-1">*</span>Qu'est-ce qui décrit
              le mieux votre rôle actuel ?
            </p>
            <div className="pl-3 flex flex-col gap-2">
              <CheckBoxLabel text={formData.primaryRole} />
              <SelectInput
                id="primaryRole"
                value={formData.primaryRole}
                onChange={handleInputChange}
                options={roleOptions}
                optgroup={true}
                className={"w-full md:w-1/2"}
              />
            </div>
          </div>
          <div>
            <p className="font-medium">
              <span className="text-green-500 mr-1">*</span>Combien d'années
              d'expérience avez-vous dans votre fonction actuelle ?
            </p>
            <div className="pl-3 flex flex-col gap-2">
              <CheckBoxLabel
                text={
                  formData.yearsOfExperience &&
                  `${formData.yearsOfExperience} years`
                }
              />
              <SelectInput
                id="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleInputChange}
                options={experienceOptions}
                className={"w-full md:w-1/2"}
              />
            </div>
          </div>
          <div>
            <p className="font-medium">
              <span className="text-green-500 mr-1">*</span> Où travaillez-vous
              actuellement ?
            </p>
            <div className="pl-3 flex flex-col gap-2">
              <p className="text-xs mt-1 text-gray-400">
                Votre entreprise ne verra jamais que vous êtes à la recherche
                d'un emploi
              </p>
              <CheckBoxLabel text={formData.companyName} />
              <div className="flex flex-col gap-1.5 ">
                <div className={formData.notEmployed ? "hidden" : ""}>
                  <InputField
                    label="Title"
                    id="title"
                    onChange={handleInputChange}
                    value={formData.title}
                    isRequired={!formData.notEmployed}
                    placeholder="SDE 1"
                    className={"w-full md:w-1/2"}
                  />

                  <div>
                    <div className={showDropdown ? "" : "hidden"}>
                      <CompanySearch
                        handleDropdown={handleDropdown}
                        width={"w-full md:w-1/2"}
                      />
                    </div>
                    <div className={!showDropdown ? "" : "hidden"}>
                      <label className="font-medium flex gap-2">
                        Entreprise
                        <span className="text-gray-500">*</span>
                      </label>
                      <div className="flex justify-between items-center my-2.5 p-2 bg-white rounded-md shadow-sm border">
                        <div className="flex items-center ">
                          <img
                            src={formData.companyLogo}
                            alt={formData.companyName}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <span className="font-semibold">
                            {formData.companyName}
                          </span>
                        </div>
                        <i
                          className="fa-solid fa-x text-gray-400 hover:cursor-pointer mr-3 text-xs"
                          onClick={() => handleDropdown({ name: "", logo: "" })}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 items-center my-3 ml-1.5">
                  <Checkbox
                    label={"I'm not currently employed"}
                    name="notEmployed"
                    id="notEmployed"
                    checked={formData.notEmployed}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-5 md:p-16 flex flex-col gap-10">
            <InputField
              label="Linkedin Profile"
              id="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              placeholder={"https://www.linkedin.com/in/username"}
              className={"w-full md:w-1/2 flex flex-col gap-3"}
            />
            <InputField
              label="Your Website"
              id="website"
              value={formData.website}
              onChange={handleInputChange}
              placeholder={"https://mypersonalwebsite.com"}
              className={"w-full md:w-1/2 flex flex-col gap-3"}
            />
          </div>
          <button
            type="submit"
            className="flex justify-center items-center bg-green-500 hover:bg-green-600  text-white font-medium  rounded-3xl w-48 py-2 px-3.5"
          >
            Créez votre profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserOnboaring;
