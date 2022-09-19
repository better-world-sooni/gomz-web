import type { AppProps } from "next/app";
import { wrapper } from "src/store/store";
import "styles/tailwind.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init();
	}, []);
	return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
