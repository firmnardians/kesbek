import Head from 'next/head';
import React from 'react';

export default function Meta({ title, desc }) {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={desc} />
			<meta property='og:description' content={desc} />
			<meta property='og:site_name' content={title} />
			<meta property='og:title' content={title} />
			<meta property='og:type' content='website' />
			<meta name='keywords' content='Cashback, Menghitung cashback maksimal, Apa itu cashback' />
		</Head>
	);
}
