import { Box, Button, Center, Container, Input, Link, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import { rupiahFormatted } from '../helper';

export default function Home() {
	const [normalPrice, setNormalPrice] = useState('');
	const [percentage, setPercentage] = useState('');
	const [maxCashback, setMaxCashback] = useState('');

	const [totalCashback, setTotalCashback] = useState('0');
	const [beforePrice, setBeforePrice] = useState('0');
	const [totalPayment, setTotalPayment] = useState('0');

	function handleCalc() {
		// hitung diskon
		const __calc = (normalPrice * percentage) / 100;
		// hitung harga normal dikurang diskon
		const __totalPayment1 = normalPrice - __calc;
		// hitung harga normal dikurang kesbek
		const __totalPayment2 = normalPrice - maxCashback;

		// harga sebelum nya adalah harga normal
		setBeforePrice(normalPrice);
		// jika hasil diskon lebih besar dari mak kesbek, maka tampilkan mak kesbek
		setTotalCashback(__calc > maxCashback ? maxCashback : __calc);
		// jika hasil diskon lebih besar dari mak kesbek, maka hitung normal price dikurang mak kesbek
		setTotalPayment(__calc > maxCashback ? __totalPayment2 : __totalPayment1);
	}

	const disabledBtn = normalPrice.length === 0 || percentage.length === 0 || maxCashback.length === 0;

	return (
		<>
			<Head>
				<title>Kesbek Maksimal</title>
				<meta name='desc' content='Hitung cashback dengan harga maksimal tanpa ribet.' />
			</Head>

			<main>
				<Container px={{ base: 0, md: 5 }} py={{ base: 0, md: 10 }} maxW='4xl' centerContent>
					<Box borderRadius={{ base: 0, md: '10px' }} bg='gray.800' w='100%' px={4} py={8} color='white'>
						<Center>
							<Text fontWeight='black' fontSize='30px' color='whiteAlpha.800'>
								Kesbek 🤑
							</Text>
						</Center>
						<Center>
							<Text textAlign='center' fontSize='md'>
								Hitung cashback dengan harga maksimal tanpa ribet.
							</Text>
						</Center>

						<Box pt={20}>
							<Box display={{ md: 'flex' }}>
								<Box px='15px' width={{ base: '100%', md: '40%' }}>
									<Stack mb='4'>
										<Text>Harga Normal</Text>
										<Input
											value={normalPrice}
											onChange={(e) => setNormalPrice(e.target.value)}
											variant='outline'
											placeholder='Harga normal...'
											type='number'
										/>
									</Stack>

									<Stack mb='4'>
										<Text>Jumlah Persen</Text>
										<Input
											value={percentage}
											onChange={(e) => setPercentage(e.target.value)}
											variant='outline'
											placeholder='Jumlah persen...'
											type='number'
										/>
									</Stack>

									<Stack>
										<Text>Maksimal Cashback</Text>
										<Input
											type='number'
											value={maxCashback}
											onChange={(e) => setMaxCashback(e.target.value)}
											variant='outline'
											placeholder='Maksimal cashback...'
										/>
									</Stack>
								</Box>

								<Box
									mt={{ base: 10, md: 0 }}
									justifyContent='center'
									flexDirection='column'
									display='flex'
									alignItems='center'
									px='15px'
									width={{ base: '100%', md: '60%' }}
								>
									<Center>
										<Stack>
											<Text color='whiteAlpha.900' fontSize='3xl' textAlign='center' fontWeight='bold'>
												💸 Cashback 💸
											</Text>

											<Text color='whiteAlpha.800' fontSize='2xl' textAlign='center' fontWeight='medium'>
												{rupiahFormatted(totalCashback, 'Rp ')}
											</Text>
										</Stack>
									</Center>

									<Box width='100%' pt={10} justifyContent='space-between' alignItems='center' display='flex'>
										<Box width='50%'>
											<Stack>
												<Text color='whiteAlpha.900' fontSize='xl' textAlign='center' fontWeight='bold'>
													Harga Sebelum
												</Text>

												<Text
													color='whiteAlpha.800'
													textDecoration='line-through'
													fontSize='xl'
													textAlign='center'
													fontWeight='medium'
												>
													{rupiahFormatted(beforePrice, 'Rp ')}
												</Text>
											</Stack>
										</Box>

										<Box width='50%'>
											<Stack>
												<Text color='whiteAlpha.900' fontSize='xl' textAlign='center' fontWeight='bold'>
													Total Bayar
												</Text>

												<Text color='whiteAlpha.800' fontSize='xl' textAlign='center' fontWeight='medium'>
													{rupiahFormatted(totalPayment, 'Rp ')}
												</Text>
											</Stack>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>

						<Box mt={10} px={4}>
							<Button
								width={{ base: '100%', md: 'inherit' }}
								disabled={disabledBtn}
								onClick={() => handleCalc()}
								colorScheme='teal'
								px='25px'
								size='md'
							>
								Hitung
							</Button>
						</Box>
					</Box>

					<Box borderRadius={{ base: 0, md: '10px' }} bg='gray.800' w='100%' mt={{ base: 10, md: 5 }} px={4} py={8} color='white'>
						<Center>
							<Text fontWeight='bold' fontSize='16px' color='whiteAlpha.800'>
								Built by{' '}
								<Link color='teal.400' href='https://saiki.link/me' target='_blank' rel='noreferrer'>
									firmnardians
								</Link>{' '}
								for everyone.
							</Text>
						</Center>
						<Center>
							<Text textAlign='center' fontSize='md'>
								Open Source:{' '}
								<Link color='teal.400' href='https://github.com/firmnardians/kesbek' target='_blank' rel='noreferrer'>
									Github
								</Link>
							</Text>
						</Center>
					</Box>
				</Container>
			</main>
		</>
	);
}
