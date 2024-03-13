import { sendMail } from "@/utils/sendmail";
import { NextRequest, NextResponse } from "next/server";

// const handler = async (req: NextRequest, res: NextResponse) => {
//   try {
//     console.log("API HIT");
//     const { method } = req;
//     switch (method) {
//       case "POST": {
//         //Do some thing
//         await sendMail(
//           "TEST",
//           "dontkillme@bunnyfiedlabs.com",
//           "THI IS A TEST FOR MY MEDIUM USERS"
//         );
//         return res.status(200).send("Success");
//         // break;
//       }
//       case "GET": {
//         //Do some thing
//         res.status(200).send(req.auth_data);
//         break;
//       }
//       default:
//         res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
//         res.status(405).end(`Method ${method} Not Allowed`);
//         break;
//     }
//   } catch (err) {
//     res.status(400).json({
//       error_code: "api_one",
//       message: err.message,
//     });
//   }
// };

// export default handler;
export async function POST(request: NextRequest, response: NextResponse) {
  const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  try {
    const formData = await request.formData();
    const subject = formData.get("subject");
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");

    const message = formData.get("message");
    const stats = await sendMail(
      subject,
      email,
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n Message: ${message}`
    );
    console.log("status -- ", stats);
    if (!stats) {
      return NextResponse.json({ message: "Error: email was not sent", stats });
    }

    return NextResponse.json({ message: "Success: email was sent", stats });
  } catch (err) {
    return NextResponse.json({
      message: "Error: email was not sent",
      stats: false,
    });
  }
}
