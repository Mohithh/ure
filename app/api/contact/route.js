import { sendMail } from "@/utils/sendMail";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.privacy) {
      return Response.json(
        { success: false, message: "Privacy not accepted" },
        { status: 400 }
      );
    }

    await sendMail(body);

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("❌ API Error:", error);

    return Response.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}