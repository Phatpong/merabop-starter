import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const HomePage = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<Card className="w-full h-full">
				<CardHeader>
					<CardTitle>Home Screen</CardTitle>
					<CardDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint temporibus quod incidunt harum, doloremque quis pariatur porro, labore in eum repellendus rem distinctio dolore, non adipisci. Magni recusandae dignissimos placeat.</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores rerum hic voluptatibus. Odio reiciendis suscipit, ut rem architecto qui ex consectetur molestias eveniet iusto dignissimos necessitatibus nisi vel incidunt recusandae!</p>
				</CardContent>
				<CardFooter>
					<Button className="w-full">
						<Link href="/user">สมัครงาน</Link>
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default HomePage;
