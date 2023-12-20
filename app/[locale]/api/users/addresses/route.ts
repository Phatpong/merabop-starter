import { prismadb } from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { addresses } = body;
		const { first_name, last_name, address_name, address_type, sub_district, district, zipcode, country, province, user_id } = addresses;
		console.log(body);
		console.log(body.addresses);
		console.log(addresses);
		console.log(...addresses);
		// console.log(first_name);

		// addresses.forEach((address: any) => {
		// 	const updateAddresses = {
		// 		...address,
		// 	};
		// 	console.log(updateAddresses);
		// });

		const createdUserAddress = await prismadb.userAddress.createMany({
			data: addresses,
		});
		console.log(createdUserAddress);
		return NextResponse.json(createdUserAddress);
	} catch (error) {
		console.log("[USER_POST]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
