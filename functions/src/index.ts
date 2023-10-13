/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

import OpenAI from "openai";

interface FormData {
  [key: string]: string;
}

exports.generateReadme = onRequest(
  {secrets: ["OPEN_AI_API_KEY"]},
  async (req, res) => {
    logger.info("Beginning Readme generation process!", {structuredData: true});

    const allowedOrigins = [
      "https://write-my-readme.web.app",
      "http://127.0.0.1:5001",
      "http://localhost:3000", // if you expect traffic from 'localhost' with the port
      "http://localhost", // if you expect traffic from 'localhost' without specifying the port
    ];

    const origin: string = req.headers.origin || "";
    if (allowedOrigins.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
    }
    // CORS headers for preflight request
    if (req.method === "OPTIONS") {
      res.set("Access-Control-Allow-Methods", "GET, POST"); // Allow POST too
      res.set("Access-Control-Allow-Headers", "Content-Type");
      res.set("Access-Control-Max-Age", "3600");
      res.status(204).send("");
      return;
    }

    res.set("Access-Control-Allow-Origin", "*");
    // Setting CORS for other requests

    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const apiKey = process.env.OPEN_AI_API_KEY;
    if (!apiKey) {
      console.error("OpenAI API key not found in configuration.");
      res.status(405).send("OpenAI API key not found in configuration.");
      return;
    }
    const openai = new OpenAI({apiKey});

    try {
      if (req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return;
      }

      const formData: FormData = req.body;
      const promptSections: string[] = [];
      let repoURL = "";

      for (const [sectionTitle, sectionContent] of Object.entries(formData)) {
        if (sectionTitle === "repoURL") {
          repoURL = sectionContent;
        } else if (sectionContent) {
          promptSections.push(`- ${sectionTitle}: ${sectionContent}`);
        }
      }

      const prompt = repoURL ?
        `Create a README file for the project in this repo: ${repoURL}\n\n` +
          (promptSections.length > 0 ?
            `Please also use these additional details 
            about the project:\n\n` +
            promptSections.join("\n") :
            "") :
        "Create a README file for a project described like this: \n\n" +
        promptSections.join("\n");

      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: prompt}],
      });

      if (!chatCompletion) {
        throw new Error("GPT-3 API request failed.");
      }

      const data = chatCompletion.choices[0].message.content?.trim();
      res.status(200).send({data});
    } catch (error) {
      console.error(error);
      res.status(500).send({error: "Internal Server Error"});
    }
  });
