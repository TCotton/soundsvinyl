import * as React from "react";
import { Helmet, HelmetData } from "react-helmet";

const Application = () =>
	<div className="application">

		<Helmet>
			<meta charSet="utf-8"/>
			<title>My Title</title>
			<link rel="canonical" href="http://mysite.com/example"/>
		</Helmet>

		<Helmet>
			<title>My Title</title>
			<meta name="description" content="Helmet application"/>
		</Helmet>

		<div>
			<Helmet>
				<title>Nested Title</title>
				<meta name="description" content="Nested component"/>
			</Helmet>
		</div>

	</div>;
