import { prismadb } from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const { userId } = auth();
		const body = await req.json();

		const { identity_card_number } = body;
		if (!userId) {
			return new NextResponse("Unauthorized", { status: 403 });
		}

		const createdIdentityUser = await prismadb.userIdentity.create({
			data: { identity_card_number },
		});
		console.log(createdIdentityUser);
		return NextResponse.json(createdIdentityUser);
	} catch (error) {
		console.log("[USER_POST]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}

// log server , log client
