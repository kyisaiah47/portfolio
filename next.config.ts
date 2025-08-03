import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
	images: {
		domains: ["hvnbpd9agmcawbt2.public.blob.vercel-storage.com"],
	},
};

export default withFlowbiteReact(nextConfig);