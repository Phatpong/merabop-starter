import { authMiddleware } from "@clerk/nextjs";

import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
	locales: ["en", "th"],

	defaultLocale: "en",
});

export default authMiddleware({
	beforeAuth: (req) => {
		// Execute next-intl middleware before Clerk's auth middleware
		return intlMiddleware(req);
	},

	// Ensure that locale specific sign-in pages are public
	publicRoutes: [
		//
		"/",
		"/:locale",
		"/:locale/api/webhooks(.*)",
		// ทำให้ path /:locale/ ? เป็นอะไรต่อก็จัดไป
	],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
