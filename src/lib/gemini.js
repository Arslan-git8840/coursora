import { GoogleGenAI } from "@google/genai";


export async function callAi(promptTemplate) {

    const ai = new GoogleGenAI({
        apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
    });

    const config = {
        responseMimeType: "text/plain",
    };

    const model = "gemini-2.0-flash";

    const contents = [
        {
            role: "user",
            parts: [
                {
                    text: `${promptTemplate}`,
                },
            ],
        },
    ];

    const response = await ai.models.generateContentStream({
        model,
        config,
        contents,
    });

    const text = [];
    for await (const chunk of response) {
        // console.log(chunk.text);
        text.push(chunk.text);
    }

    return {
        text: text.join(" "),
    };
}
