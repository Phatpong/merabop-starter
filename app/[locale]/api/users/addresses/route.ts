import { prismadb } from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		// const { userId } = auth();
		const body = await req.json();

		const { first_name, last_name, address_type, address_name, sub_district, district, province, zipcode, country, user_id } = body;
		console.log(body);

		// if (!userId) {
		// 	return new NextResponse("Unauthorized", { status: 403 });
		// }

		const createdUserAddress = await prismadb.userAddress.create({
			data: {
				first_name,
				last_name,
				address_type,
				address_name,
				sub_district,
				district,
				province,
				country,
				zipcode,
				user_id,
			},
		});

		return NextResponse.json(createdUserAddress);
	} catch (error) {
		console.log("[USER_POST]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}

// log server , log client
