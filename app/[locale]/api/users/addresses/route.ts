import { prismadb } from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const { first_name, last_name, address_type, address_name, sub_district, district, province, zipcode, country, user_id } = body;
		console.log(body);
		console.log(body.addresses);
		console.log(body.addresses[0]);
		console.log(body.addresses[0].first_name);

		const createdUserAddress = await prismadb.userAddress.create({
			data: {
				first_name,
				last_name,
				address_name,
				address_type,
				sub_district,
				district,
				zipcode,
				country,
				province,
				user: {
					connect: { id: user_id },
				},
			},
		});
		console.log(createdUserAddress);
		return NextResponse.json(createdUserAddress);
	} catch (error) {
		console.log("[USER_POST]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
