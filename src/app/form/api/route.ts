import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

interface FormData {
    [key: string]: string;
}

export async function POST(req: NextRequest) {
    const openai = new OpenAI({
        apiKey: process.env.OPEN_AI_API_KEY
    });
    // Assume formData is an array of objects containing the form input values
    const formData = await req.json() as FormData;

    console.log("formData: ", formData)

    let promptSections = [];
    let repoURL = "";

    // Iterate over the entries in formData
    for (let [sectionTitle, sectionContent] of Object.entries(formData)) {
      // Only add sections that have content
      if (sectionTitle === "repoURL") {
        repoURL = sectionContent;
      }
      else if (sectionContent) {
        promptSections.push(`- ${sectionTitle}: ${sectionContent}`);
      }
    }

    let prompt = "";

    if (repoURL) {
        prompt = `Create a README file for the project in this repo: ${repoURL}\n\n`;
        if (promptSections.length > 0) {
            prompt += "Please also use these additional details about the project:\n\n" + promptSections.join('\n');
        }
    } else {
        prompt = "Create a README file for a project described like this: \n\n" + promptSections.join('\n'); 
    }

    console.log("prompt: ", prompt);

    try {
      // Construct your GPT-3.5 API request
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": prompt}],
      });
      console.log(chatCompletion.choices[0].message);
    
    console.log(chatCompletion.choices[0].message.content);

      if (!chatCompletion) {
        throw new Error(`GPT-3 API request failed.`);
      }

      const data = chatCompletion.choices[0].message.content?.trim();

      return NextResponse.json({ data, status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Internal Server Error', status: 500 });
    }
  }