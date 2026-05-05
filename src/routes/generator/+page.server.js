export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const occasion = data.get('occasion');
		const color = data.get('color');
		const style = data.get('style');

		console.log('Filter:', { occasion, color, style });

		return {
			outfit: {
				top: 'T-Shirt',
				bottom: 'Jeans',
				shoes: 'Sneakers'
			}
		};
	}
};