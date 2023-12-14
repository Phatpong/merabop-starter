import { prismadb } from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		// const { userId } = auth();
		const body = await req.json();

		const { first_name, last_name, username, email, phone_number } = body;
		console.log(body);

		// if (!userId) {
		// 	return new NextResponse("Unauthorized", { status: 403 });
		// }

		const createdUser = await prismadb.user.create({
			data: {
				first_name,
				last_name,
				username,
				email,
				phone_number,
			},
		});

		return NextResponse.json(createdUser);
	} catch (error) {
		console.log("[USER_POST]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}

// log server , log client
