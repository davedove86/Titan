import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: '', // Update to point to your repository
		user: {
			name: 'Dave Dove', // update to use your name
			email: 'davedove@icloud.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
