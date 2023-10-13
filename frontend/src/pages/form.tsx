// pages/form.tsx

import { useState } from 'react';
import FormSection from '../components/FormSection';
import Button from '../components/Button';
import { useData } from '../contexts/DataContext';
import LoadingIndicator from '../components/LoadingIndicator';
import { useNavigate } from "react-router-dom";

const FormPage = () => {
    // const [formData, setFormData] = useState<Record<string, string | null>>({});
    const [activeSection, setActiveSection] = useState<string | null>(null);
    // const pathname = usePathname();
    const router = useNavigate();
    const { formData, setFormData, setApiResponse } = useData();
    const [isLoading, setIsLoading] = useState(false);

    const toggleSection = (event: React.MouseEvent, section: string) => {
        event.preventDefault();
        setActiveSection(activeSection === section ? null : section);
    };
    
    const handleInputChange = (input: string, value: string) => {
        setFormData(prev => ({ ...prev, [input]: value }));
    };

    const handleSubmit = () => {
        setIsLoading(true); 
        console.log("formData: ", formData)
        fetch('https://generatereadme-huq72i62ua-uc.a.run.app', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        .then(res => {
            if (!res.ok) {
                // Handle error case
                throw new Error(`Failed to fetch: ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => {
            console.log("data: ", data);
            setApiResponse(data.data);
            setIsLoading(false);
            router(`/form/review`);  // Navigate to the review page
        })
        .catch(err => {
            console.error("Error: ", err)
            setIsLoading(false);
        });
    };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
        {isLoading ? (
            <LoadingIndicator />
        ) : (
            <>
            <div>
                <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">Generate Your README</h1>
                <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">Enter your repo&apos;s URL or enter specific details or both.</h2>
            </div>
        <div className="bg-white p-8 rounded shadow-lg">
            <form>
                <FormSection
                    label="Repo URL:"
                    placeholder="Enter git repo URL to extract data"
                    id="repoURL"
                    toggleSection={toggleSection}
                    activeSection={activeSection}
                    value={formData.repoURL || ''}
                    onChange={handleInputChange}
                />
                <h2 className="text-xl font-bold mb-4 text-gray-800">Project Information</h2>
          
            <FormSection
                label="Project Name (Title):"
                placeholder="Enter project name"
                id="projectName"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.projectName || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Project Description (Description):"
                placeholder="Enter project description"
                isTextArea={true}
                id="projectDescription"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.projectDescription || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Motivation or Problem Statement:"
                placeholder="Explain what motivated you to build this project or what problem it solves."
                isTextArea={true}
                id="motivation"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.motivation || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Features:"
                placeholder="List the Features."
                isTextArea={true}
                id="features"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.features || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Technologies Used:"
                placeholder="List the technologies used"
                isTextArea={true}
                id="technologiesUsed"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.technologiesUsed || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Setup and Installation:"
                placeholder="Explain how others can setup and install this project"
                isTextArea={true}
                id="setupAndInstallation"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.setupAndInstallation || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Usage Instructions:"
                placeholder="Explain how users can use this project"
                isTextArea={true}
                id="usageInstructions"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.usageInstructions || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Contributing Guidelines:"
                placeholder="How can other developers contribute to the project?"
                isTextArea={true}
                id="contributingGuidelines"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.contributingGuidelines || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Future Improvements or Future Features:"
                placeholder="What are you planning to add or change in the future?"
                isTextArea={true}
                id="futureFeatures"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.futureFeatures || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Screen Shot:"
                placeholder="Enter a relative URL to an image in your repo."
                isTextArea={true}
                id="screenshot"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.screenshot || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Demo Link:"
                placeholder="Enter a URL to a live demo"
                isTextArea={true}
                id="demoLink"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.demoLink || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="License:"
                placeholder="Choose a license foryour project"
                isTextArea={true}
                id="license"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.license || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Contact Information"
                placeholder="How can other users contact you?"
                isTextArea={true}
                id="contactInformation"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.contactInformation || ''}
                onChange={handleInputChange}
            />
            <h2 className="text-xl font-bold mb-4 text-gray-800">Additional Information</h2>
            <FormSection
                label="Challenges Encountered:"
                placeholder="What challenges did you encounter while building this project?"
                isTextArea={true}
                id="challengesEncountered"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.challengesEncountered || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Lessons Learned:"
                placeholder="What did you learn while building this project?"
                isTextArea={true}
                id="lessonsLearned"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.lessonsLearned || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Credits and Acknowledgments:"
                placeholder="Do you wish to credit any other people or software?"
                isTextArea={true}
                id="credits"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.credits || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Known Bugs:"
                placeholder="Are you aware of any bugs?"
                isTextArea={true}
                id="knownBugs"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.knownBugs || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Open Issues:"
                placeholder="Are there any issues that need to be addressed?"
                isTextArea={true}
                id="openIssues"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.openIssues || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Repository Structure:"
                placeholder="How have you structured the files and folders in your repo?"
                isTextArea={true}
                id="repositoryStructure"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.repositoryStructure || ''}
                onChange={handleInputChange}
            />
            <h2 className="text-xl font-bold mb-4 text-gray-800">Customization Options</h2>
            <FormSection
                label="README Format:"
                placeholder="Standard, Detailed, Minimal, etc?"
                isTextArea={true}
                id="readmeFormat"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.readmeFormat || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Include Badges:"
                placeholder="Yes or No?"
                isTextArea={true}
                id="includeBadges"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.includeBadges || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Include Table of Contents:"
                placeholder="Would you like to include a table of contents?"
                isTextArea={true}
                id="tableOfContents"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.tableOfContents || ''}
                onChange={handleInputChange}
            />
            <FormSection
                label="Other Information:"
                placeholder="Is there any other information you'd like to include?"
                isTextArea={true}
                id="otherInformation"
                toggleSection={toggleSection}
                activeSection={activeSection}
                value={formData.otherInformation || ''}
                onChange={handleInputChange}
            />
        </form>
      </div>
      <div className="p-4 bg-gray-200 sticky bottom-0 flex justify-center items-center">
        {/* The sticky bar */}
        <Button text="Submit" onClick={handleSubmit} />
      </div>
      </>
        )}
    </div>
  );
};

export default FormPage;