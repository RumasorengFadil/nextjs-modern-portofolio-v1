import { NextResponse } from "next/server";
import OpenAI from "openai";
import context from "@/data/context.json";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function findRelevantContext(question: string) {
  // Simple keyword search (bisa diganti fuzzy match pakai fuse.js)
  const matched = context.filter((item) =>
    question.toLowerCase().includes(item.topic.toLowerCase())
  );

  // Jika tidak ketemu, fallback ke semua data
  const combined = matched.length > 0 ? matched : context;
  return combined.map((c) => c.content).join("\n\n");
}

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    const knowledgeBase = findRelevantContext(question);

    const stream = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
            You are an AI assistant for Fadil or Fadil Rumasoreng's portfolio website.
            I have some knowledge that may be useful to you:
            ${knowledgeBase}
            Please pay attention to the context when answering. Answer only questions related to Fadil Rumasoreng. If someone greets you, just greet them back. It's okay. If someone ask someone non related with Fadil Rumasoreng, answering he that you just answer something related with Fadil Rumasoreng. 
          `,
        },
        { role: "user", content: question },
      ],
      stream: true,
    });

    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const token = chunk.choices?.[0]?.delta?.content || "";
          controller.enqueue(encoder.encode(token));
        }
        controller.close();
      },
    });

    return new NextResponse(readableStream);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
// export async function POST(req: Request) {
//   try {
//     const { question } = await req.json();

//     const knowledgeBase = findRelevantContext(question);

//     const completion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "system",
//           content: `
//             You are an AI assistant for Fadil Rumasoreng's portfolio website.
//             Only answer questions based on the following information:
//             ${knowledgeBase}
//             If the question is unrelated, reply with:
//             "Sorry, I can only answer questions about Fadil or his projects."
//           `,
//         },
//         { role: "user", content: question },
//       ],
//     });

//     const answer = completion.choices[0].message.content;
//     return NextResponse.json({ answer });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
//   }
// }
