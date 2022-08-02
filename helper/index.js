/**
 *
 * @param {Number} number
 * @param {String} prefix
 * @returns
 */

export function rupiahFormatted(number = 0, prefix = '') {
	const isNumber = number === undefined ? 0 : number;
	const fixed = Math.trunc(Number(isNumber));
	const rupiah = `${prefix ? 'Rp' : ''} ${fixed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;

	return rupiah;
}
