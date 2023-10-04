"use client"

// Importing necessary libraries and components
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import 'github-markdown-css/github-markdown.css';
import Button from '../../components/Button';
import Tab from '../../components/Tab';
import { useData } from '../../contexts/DataContext';
import Link from 'next/link';

const ReviewPage = () => {
  // State to manage the markdown content and active tab
  const { apiResponse } = useData();
  console.log("apiResponse: ", apiResponse)
  const [markdown, setMarkdown] = useState<string>(apiResponse);  // Pre-fill with generated README
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('preview');   

  // Function to handle markdown download
  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    a.click();
    URL.revokeObjectURL(url);
  };
  

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      console.log('Text copied to clipboard');
    } catch (err) {
      console.error('Error in copy to clipboard: ', err);
    }
  };
  

  return (
    <div className="p-4">
        <div className="mb-4">
            <Link href="/form" className="text-emerald-500 hover:underline">
                Back to Form
            </Link>
        </div>
      <div className="tabs mb-4">
        <Tab label="Preview" isActive={activeTab === "preview"} onClick={() => setActiveTab("preview")} />
        <Tab label="Editor" isActive={activeTab === "editor"} onClick={() => setActiveTab("editor")} />
      </div>
      <div className="tab-content">
        {activeTab === 'editor' && <SimpleMDE value={markdown} onChange={setMarkdown} />}
        {activeTab === 'preview' && (
            <div className="markdown-body">
                <ReactMarkdown children={markdown} />
            </div>
        )}
      </div>
      <div className="actions mt-4">
        <Button text="Copy to Clipboard" onClick={copyToClipboard} className="mr-1" />
        <Button text="Download as File" onClick={handleDownload} />
      </div>
    </div>
  );
};

export default ReviewPage;
